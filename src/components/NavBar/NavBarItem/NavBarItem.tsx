import './NavBarItem.css';

import React, { forwardRef } from 'react';

import { cn } from '##/utils/bem';

import { NavBarItemComponent, NavBarItemProps } from '../types';

const cnNavBarItem = cn('NavBarItem');

const NavBarItemRender = (
  props: NavBarItemProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const {
    label,
    active = false,
    iconLeft: IconLeft,
    iconRight: IconRight,
    className,
    as: Tag = 'div',
    ...otherProps
  } = props;

  return (
    <Tag
      ref={ref}
      className={cnNavBarItem({ active }, [className])}
      {...otherProps}
    >
      <div className={cnNavBarItem('Content')}>
        {IconLeft && <IconLeft className={cnNavBarItem('Icon')} size="s" />}
        {label}
      </div>
      {IconRight && <IconRight className={cnNavBarItem('Icon')} size="s" />}
    </Tag>
  );
};

export const NavBarItem = forwardRef(NavBarItemRender) as NavBarItemComponent;
