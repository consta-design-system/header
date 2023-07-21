import './ButtonMenu.css';

import { Button, buttonPropSizeDefault } from '@consta/uikit/Button';
import React, { forwardRef } from 'react';

import { getItemClick } from '##/helpers/getItemClick';
import { cn } from '##/utils/bem';

import { withDefaultGetters } from './helpers';
import { ButtonMenuComponent, ButtonMenuProps } from './types';

export const cnButtonMenu = cn('ButtonMenu');

const ButtonMenuRender = (
  props: ButtonMenuProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const {
    items,
    className,
    getItemHref,
    getItemLabel,
    getItemOnClick,
    getItemTarget,
    onItemClick,
    getItemIcon,
    form,
    size = buttonPropSizeDefault,
    view,
    onlyIcon,
    ...otherProps
  } = withDefaultGetters(props);

  return (
    <div
      className={cnButtonMenu({ size }, [className])}
      ref={ref}
      {...otherProps}
    >
      {items.map((item, index) => {
        const target = getItemTarget(item);
        const href = getItemHref(item);

        const linkProps =
          (target || href) &&
          ({
            as: 'a',
            target,
            href,
          } as const);

        return (
          <Button
            {...linkProps}
            key={index}
            form={form}
            size={size}
            view={view}
            onlyIcon={onlyIcon}
            iconLeft={getItemIcon(item)}
            label={getItemLabel(item)}
            onClick={getItemClick(item, getItemOnClick, onItemClick)}
          />
        );
      })}
    </div>
  );
};

export const ButtonMenu = forwardRef(ButtonMenuRender) as ButtonMenuComponent;

export * from './types';
