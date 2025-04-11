import './PopoverButton.css';

import { Button } from '@consta/uikit/Button';
import {
  animateTimeout,
  cnMixPopoverAnimate,
} from '@consta/uikit/MixPopoverAnimate';
import { cnMixPopoverArrow } from '@consta/uikit/MixPopoverArrow';
import { Direction, Popover } from '@consta/uikit/Popover';
import { useFlag } from '@consta/uikit/useFlag';
import { useForkRef } from '@consta/uikit/useForkRef';
import React, { forwardRef, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';

import { Sidebar } from '##/components/Sidebar';
import { cn } from '##/utils/bem';

const cnPopoverButton = cn('PopoverButton');

type PopoverButtonProps = Omit<
  React.ComponentProps<typeof Button>,
  'children'
> & {
  children?: React.ReactNode | ((onClose: () => void) => React.ReactNode);
  isMobile?: boolean;
  popoverClassName?: string;
  withCloseButton?: boolean;
};

const DEFAULT_POPOVER_ARROW_SIZE = 6;
const DEFAULT_POPOVER_ARROW_OFFSET = 10;

export const PopoverButton = forwardRef<HTMLButtonElement, PopoverButtonProps>(
  (props, ref) => {
    const {
      size = 's',
      view = 'clear',
      children,
      className,
      onClick,
      withCloseButton = true,
      popoverClassName,
      isMobile,
      title,
      ...otherProps
    } = props;

    const [isOpen, setIsOpen] = useFlag();
    const [direction, setDirection] = useState<Direction | undefined>(
      undefined,
    );

    const buttonRef = useRef<HTMLButtonElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);

    const handleClick: React.MouseEventHandler = (e) => {
      onClick?.(e);
      setIsOpen.toggle();
    };

    const zIndex =
      typeof props.style?.zIndex === 'number'
        ? props.style.zIndex + 1
        : undefined;

    return (
      <>
        <Button
          ref={useForkRef([ref, buttonRef])}
          size={size}
          view={view}
          onClick={handleClick}
          className={cnPopoverButton(null, [className])}
          {...otherProps}
        />
        {isMobile ? (
          <Sidebar
            isOpen={isOpen}
            onClickOutside={setIsOpen.off}
            className={cnPopoverButton('Sidebar', [popoverClassName])}
            onClose={withCloseButton ? setIsOpen.off : undefined}
            title={title}
            style={{ zIndex }}
          >
            {typeof children === 'function'
              ? children?.(setIsOpen.off)
              : children}
          </Sidebar>
        ) : (
          <Transition
            timeout={animateTimeout}
            unmountOnExit
            in={isOpen}
            nodeRef={popoverRef}
          >
            {(animate) => (
              <Popover
                className={cnPopoverButton('Popover', [
                  popoverClassName,
                  cnMixPopoverAnimate({ animate, direction }),
                ])}
                anchorRef={buttonRef}
                arrowOffset={
                  DEFAULT_POPOVER_ARROW_SIZE + DEFAULT_POPOVER_ARROW_OFFSET
                }
                offset={DEFAULT_POPOVER_ARROW_SIZE + 4}
                onSetDirection={setDirection}
                style={{
                  ['--popover-arrow-size' as string]: `${DEFAULT_POPOVER_ARROW_SIZE}px`,
                  ['--popover-arrow-offset' as string]: `${DEFAULT_POPOVER_ARROW_OFFSET}px`,
                  zIndex,
                }}
                ref={popoverRef}
                onClickOutside={setIsOpen.off}
              >
                <div
                  className={cnPopoverButton('Arrow', [
                    cnMixPopoverArrow({ direction }),
                  ])}
                />
                {typeof children === 'function'
                  ? children?.(setIsOpen.off)
                  : children}
              </Popover>
            )}
          </Transition>
        )}
      </>
    );
  },
);
