import './NavBar.css';

import { List } from '@consta/uikit/__internal__/src/components/ListCanary';
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
    <List
      items={items}
      size="m"
      getItemKey={getItemLabel}
      getItemLabel={getItemLabel}
      className={cnNavBar(null, [className])}
      ref={ref}
      renderItem={(item) => {
        const onClick: React.MouseEventHandler = (e) => {
          getItemOnClick(item)?.(e);
          onItemClick?.({ e, item });
        };
        return (
          <NavBarItem
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
      }}
      {...otherProps}
    />
  );
};

export const NavBar = forwardRef(NavBarRender) as NavBarComponent;
