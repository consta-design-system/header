import './NavBar.css';

import React, { forwardRef } from 'react';

import { cn } from '##/utils/bem';

import { withDefaultGetters } from './helper';
import { NavBarItem } from './NavBarItem';
import { NavBarComponent, NavBarProps } from './types';

const cnNavBar = cn('NavBar');

const NavBarRender = (props: NavBarProps, ref: React.Ref<HTMLDivElement>) => {
  const {
    items,
    onItemClick,
    getItemActive,
    getItemIconLeft,
    getItemIconRight,
    getItemLabel,
    getItemOnClick,
    getItemAs,
    getItemAttributes,
    className,
    ...otherProps
  } = withDefaultGetters(props);

  return (
    <div className={cnNavBar(null, [className])} ref={ref} {...otherProps}>
      {items.map((item, index) => {
        const onClick: React.MouseEventHandler = (e) => {
          getItemOnClick(item)?.(e);
          onItemClick?.({ e, item });
        };
        return (
          <NavBarItem
            key={cnNavBar('Item', { index })}
            label={getItemLabel(item)}
            active={getItemActive(item)}
            iconLeft={getItemIconLeft(item)}
            iconRight={getItemIconRight(item)}
            onClick={onClick}
            className={cnNavBar('Item')}
            as={getItemAs(item)}
            {...(getItemAttributes(item) ?? {})}
          />
        );
      })}
    </div>
  );
};

export const NavBar = forwardRef(NavBarRender) as NavBarComponent;
