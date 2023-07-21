import './TileMenuList.css';

import { getByMap } from '@consta/uikit/__internal__/src/utils/getByMap';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import React from 'react';

import { getItemClick } from '##/helpers/getItemClick';
import { cn } from '##/utils/bem';

import { TileMenuItem } from '../TileMenuItem';
import { withDefaultGetters } from './helpers';
import { TileMenuListComponent, TileMenuListProps } from './types';

export const cnTileMenuList = cn('TileMenuList');

const itemViewMap = {
  lines: 'default',
  twoLines: 'default',
  cards: 'card',
} as const;

export const TileMenuList = ((props: TileMenuListProps) => {
  const {
    items,
    view = 'lines',
    className,
    children,
    getItemDescription,
    getItemImage,
    getItemLabel,
    getItemHref,
    getItemOnClick,
    onItemClick,
    ...otherProps
  } = withDefaultGetters(props);

  return (
    <div
      {...otherProps}
      className={cnTileMenuList({ view }, [cnMixSpace({ p: 'xl' }), className])}
    >
      {items.map((item, index) => {
        return (
          <TileMenuItem
            className={cnTileMenuList('Item')}
            key={cnTileMenuList('Item', { index })}
            view={getByMap(itemViewMap, view)}
            image={getItemImage(item)}
            title={getItemLabel(item)}
            description={getItemDescription(item)}
            href={getItemHref(item)}
            onClick={getItemClick(item, getItemOnClick, onItemClick)}
            as="a"
          />
        );
      })}
    </div>
  );
}) as TileMenuListComponent;

export * from './types';
