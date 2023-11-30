import React, { forwardRef } from 'react';

import { withDefaultRailGetters } from '../helpers';
import { NavbarRailItem } from '../NavbarRailItem';
import {
  defaultNavbarPropForm,
  defaultNavbarPropSize,
  NavbarRailComponent,
  NavbarRailProps,
} from '../types';

const NavbarRailRender = (
  props: NavbarRailProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const {
    items,
    onItemClick,
    getItemLabel,
    getItemIcon,
    getItemAs,
    getItemAttributes,
    getItemActive,
    getItemRef,
    getItemAdditionalClassName,
    size = defaultNavbarPropSize,
    form = defaultNavbarPropForm,
    className,
    getItemStatus,
    tooltipProps,
    getItemTooltip,

    ...otherProps
  } = withDefaultRailGetters(props);

  return (
    <div {...otherProps} ref={ref} className={className}>
      {items.map((item, index) => {
        return (
          <NavbarRailItem
            {...((getItemAttributes?.(item) ||
              {}) as JSX.IntrinsicElements['div'])}
            key={index}
            as={getItemAs?.(item)}
            size={size}
            form={form}
            onClick={(e) => onItemClick?.(item, { e })}
            icon={getItemIcon(item)}
            ref={getItemRef?.(item) as React.RefObject<HTMLDivElement>}
            label={getItemLabel(item)}
            tooltipProps={{ ...tooltipProps, content: getItemTooltip(item) }}
            active={getItemActive(item)}
            status={getItemStatus(item)}
          />
        );
      })}
    </div>
  );
};

export const NavbarRail = forwardRef(NavbarRailRender) as NavbarRailComponent;
