import './MegaMenuBox.css';

import {
  PortalWithTheme,
  usePortalContext,
} from '@consta/uikit/PortalWithTheme';
import { useTheme } from '@consta/uikit/Theme';
import { useClickOutside } from '@consta/uikit/useClickOutside';
import React, { useMemo, useRef } from 'react';
import { Transition } from 'react-transition-group';

import { cn } from '##/utils/bem';

import { MegaMenuBoxProps } from './types';

const cnMegaMenuBox = cn('MegaMenuBox');

const ContextConsumer: React.FC<{
  onClickOutside?: (event: MouseEvent) => void;
  ignoreClicksInsideRefs?: ReadonlyArray<React.RefObject<HTMLElement>>;
  children: React.ReactNode;
}> = ({ onClickOutside, children, ignoreClicksInsideRefs }) => {
  const { refs } = usePortalContext();

  useClickOutside({
    isActive: !!onClickOutside,
    ignoreClicksInsideRefs: [
      ...(ignoreClicksInsideRefs || []),
      ...(refs || []),
    ],
    handler: onClickOutside,
  });

  return children as React.ReactElement;
};

export const MegaMenuBox = (props: MegaMenuBoxProps) => {
  const {
    isOpen,
    onClickOutside,
    onEsc,
    offset: offsetProp = 0,
    style,
    anchorRef,
    className,
    children,
    maxContentWidth,
    ...otherProps
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const { theme } = useTheme();

  const offset = useMemo(() => {
    return (
      (anchorRef?.current?.offsetTop ?? 0) +
      (anchorRef?.current?.offsetHeight ?? 0) +
      offsetProp
    );
  }, [offsetProp, anchorRef?.current]);

  return (
    <Transition in={isOpen} unmountOnExit timeout={240} nodeRef={containerRef}>
      {(animate) => (
        <PortalWithTheme
          preset={theme}
          style={{
            ['--mega-menu-offset' as string]: `${offset}px`,
            ...style,
          }}
          className={cnMegaMenuBox(null, [className])}
          ref={containerRef}
          {...otherProps}
        >
          <div className={cnMegaMenuBox('Overlay', { animate })} />
          <ContextConsumer
            onClickOutside={onClickOutside}
            ignoreClicksInsideRefs={[menuRef]}
          >
            <div ref={menuRef} className={cnMegaMenuBox('Window', { animate })}>
              <div
                className={cnMegaMenuBox('Wrapper')}
                style={{
                  ['--mega-menu-content-width' as string]: maxContentWidth
                    ? `${maxContentWidth}px`
                    : '100%',
                }}
              >
                {children}
              </div>
            </div>
          </ContextConsumer>
        </PortalWithTheme>
      )}
    </Transition>
  );
};
