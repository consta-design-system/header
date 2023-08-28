import './TileMenu.css';

import { IconBento } from '@consta/icons/IconBento';
import React, { forwardRef } from 'react';

import { cn } from '##/utils/bem';

import { PopoverButton } from '../PopoverButton';
import { TileMenuList, tileMenuListPropViewDefault } from './TileMenuList';
import { TileMenuComponent, TileMenuProps } from './types';

export const cnTileMenu = cn('TileMenu');

function TileMenuRender(
  props: TileMenuProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  const {
    view = tileMenuListPropViewDefault,
    items,
    className,
    children,
    isMobile,
    listClassName,
    getItemDescription,
    getItemHref,
    getItemImage,
    getItemOnClick,
    getItemLabel,
    onItemClick,
    ...otherProps
  } = props;

  const listProps = {
    className: listClassName,
    getItemDescription,
    getItemHref,
    getItemImage,
    getItemOnClick,
    getItemLabel,
    items,
    view,
    onItemClick,
  };

  return (
    <PopoverButton
      ref={ref}
      iconLeft={IconBento}
      size="s"
      view="clear"
      onlyIcon
      className={cnTileMenu(null, [className])}
      isMobile={isMobile}
      {...otherProps}
    >
      {isMobile ? (
        <TileMenuList {...listProps} />
      ) : (
        <div className={cnTileMenu('ListWrapper')}>
          <TileMenuList {...listProps} />
        </div>
      )}
    </PopoverButton>
  );
}

export const TileMenu = forwardRef(TileMenuRender) as TileMenuComponent;

export * from './types';
