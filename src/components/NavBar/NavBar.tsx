import './NavBar.css';

import { List, ListBox } from '@consta/uikit/ListCanary';
import React, { forwardRef } from 'react';

import { cn } from '##/utils/bem';

import { withDefaultGetters } from './helper';
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

  type ITEM = (typeof items)[number];

  const onClick = (item: ITEM) => (e: React.MouseEvent) => {
    getItemOnClick(item)?.(e);
    onItemClick?.({ e, item });
  };

  return (
    <ListBox ref={ref} className={cnNavBar(null, [className])} {...otherProps}>
      <List
        items={items}
        size="m"
        getItemLabel={getItemLabel}
        getItemActive={getItemActive}
        getItemLeftIcon={getItemIconLeft}
        getItemRightIcon={getItemIconRight}
        getItemOnClick={(item) => onClick(item)}
        getItemAs={getItemAs}
        itemSpase={{ pV: 's', pH: 'l' }}
        getItemAttributes={getItemAttributes}
        getItemAdditionalClassName={(item) =>
          cnNavBar('Item', { active: getItemActive(item) })
        }
      />
    </ListBox>
  );
};

export const NavBar = forwardRef(NavBarRender) as NavBarComponent;
