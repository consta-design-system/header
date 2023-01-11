import './GlobalMenuItem.css';

import React, { forwardRef } from 'react';

import { cn } from '##/utils/bem';

import { GlobalMenuItemComponent, GlobalMenuItemProps } from '../types';

const cnGlobalMenuItem = cn('GlobalMenuItem');

const GlobalMenuItemRender = (
  props: GlobalMenuItemProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const { label, className, as: Tag = 'div', ...otherProps } = props;
  return (
    <Tag
      ref={ref}
      className={cnGlobalMenuItem(null, [className])}
      {...otherProps}
    >
      {label}
    </Tag>
  );
};

export const GlobalMenuItem = forwardRef(
  GlobalMenuItemRender,
) as GlobalMenuItemComponent;
