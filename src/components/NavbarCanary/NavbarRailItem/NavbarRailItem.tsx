import './NavbarRailItem.css';

import { isNotNil } from '@consta/uikit/__internal__/src/utils/type-guards';
import { forwardRefWithAs } from '@consta/uikit/__internal__/src/utils/types/PropsWithAsAttributes';
import { Badge } from '@consta/uikit/Badge';
import {
  animateTimeout,
  cnMixPopoverAnimate,
} from '@consta/uikit/MixPopoverAnimate';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import { Tooltip } from '@consta/uikit/Tooltip';
import { useDebounce } from '@consta/uikit/useDebounce';
import { useFlag } from '@consta/uikit/useFlag';
import { useForkRef } from '@consta/uikit/useForkRef';
import React, { useEffect, useRef } from 'react';
import { Transition } from 'react-transition-group';

import { cn } from '##/utils/bem';

import {
  defaultNavbarPropForm,
  defaultNavbarPropSize,
  NavbarRailItemProps,
} from '../types';

const cnNavbarItem = cn('NavbarRailItem');

const spaceMap = {
  m: { pV: 's', pH: 'm', mB: '2xs' },
  s: { pV: 'xs', pH: 'm', mB: '2xs' },
} as const;

const bageSizeMap = {
  s: 'xs',
  m: 's',
} as const;

const textSpaceMap = {
  m: { mT: 'xs' },
  s: { mT: '2xs' },
} as const;

const defaultTooltipProps: NavbarRailItemProps['tooltipProps'] = {
  direction: 'rightCenter',
  possibleDirections: [
    'rightCenter',
    'rightDown',
    'rightUp',
    'rightStartDown',
    'rightStartUp',
  ],
  spareDirection: 'rightCenter',
};

export const NavbarRailItem = forwardRefWithAs<NavbarRailItemProps, 'div'>(
  (props, refComponent) => {
    const {
      size = defaultNavbarPropSize,
      icon: Icon,
      status,
      form = defaultNavbarPropForm,
      active,
      label,
      as = 'div',
      className,
      tooltipProps: tooltipPropsProp,
      ...otherProps
    } = props;

    const tooltipProps = { ...defaultTooltipProps, ...tooltipPropsProp };

    const Tag = as as string;
    const ref = useRef<HTMLDivElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useFlag();
    const [hover, setHover] = useFlag();

    const onMouseEnter: React.MouseEventHandler<HTMLDivElement> = (e) => {
      setHover.on();
      otherProps.onMouseEnter?.(e);
    };

    const onMouseLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
      setHover.off();
      otherProps.onMouseEnter?.(e);
    };

    const controllerOpen = useDebounce(() => {
      if (hover) {
        setOpen.on();
      } else {
        setOpen.off();
      }
    }, 200);

    useEffect(() => {
      controllerOpen();
    }, [hover]);

    return (
      <>
        <Tag
          {...otherProps}
          ref={useForkRef([ref, refComponent])}
          className={cnNavbarItem({ size, form, active }, [
            cnMixSpace(spaceMap[size]),
            className,
          ])}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className={cnNavbarItem('IconWrapper')}>
            {Icon && <Icon size={size} />}
            {status && (
              <Badge
                className={cnNavbarItem('Badge')}
                size={bageSizeMap[size]}
                status={status}
                minified
              />
            )}
          </div>

          {label && (
            <Text
              className={cnNavbarItem('Label', [
                cnMixSpace(textSpaceMap[size]),
              ])}
              align="center"
              size={size}
            >
              {label}
            </Text>
          )}
        </Tag>
        {tooltipProps && isNotNil(tooltipProps.content) && (
          <Transition
            in={open}
            unmountOnExit
            timeout={animateTimeout}
            nodeRef={popoverRef}
          >
            {(animate) => {
              return (
                <Tooltip
                  className={cnMixPopoverAnimate({ animate })}
                  direction={tooltipProps.direction}
                  spareDirection={tooltipProps.spareDirection}
                  possibleDirections={tooltipProps.possibleDirections}
                  offset={tooltipProps.offset}
                  anchorRef={ref}
                  ref={popoverRef}
                >
                  {tooltipProps.content}
                </Tooltip>
              );
            }}
          </Transition>
        )}
      </>
    );
  },
);
