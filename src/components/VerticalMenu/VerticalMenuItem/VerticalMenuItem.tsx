import './VerticalMenuItem.css';

import { IconArrowRight } from '@consta/icons/IconArrowRight';
import { Text } from '@consta/uikit/Text';
import React from 'react';

import { cn } from '##/utils/bem';

import { VerticalMenuItemComponent } from '../types';

export const cnVerticalMenuItem = cn('VerticalMenuItem');

export const VerticalMenuItem: VerticalMenuItemComponent = (props) => {
  const {
    className,
    label,
    href,
    target,
    active,
    onClick,
    withSubMenu,
    ...otherProps
  } = props;

  const propsLink = href
    ? ({
        as: 'a',
        href,
        target,
      } as const)
    : ({
        as: 'span',
      } as const);

  return (
    <Text
      {...otherProps}
      {...propsLink}
      className={cnVerticalMenuItem({ active }, [className])}
      onClick={onClick}
      view="primary"
      size="m"
      lineHeight="m"
    >
      {label}
      {withSubMenu && (
        <IconArrowRight className={cnVerticalMenuItem('Icon')} size="xs" />
      )}
    </Text>
  );
};
