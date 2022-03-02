import React from 'react'

import { cn } from '@/__private__/utils/bem'
import { TileMenuListComponent, TileMenuListProps } from '../types'
import { withDefaultGetters } from '../helpers'

import { TileMenuItem } from '../TileMenuItem/TileMenuItem'
import { getByMap } from '@consta/uikit/__internal__/src/utils/getByMap'
import { cnMixSpace } from '@consta/uikit/MixSpace'

import './TileMenuList.css'

export const cnTileMenuList = cn('TileMenuList')

const itemViewMap = {
  lines: 'line',
  twoLines: 'line',
  cards: 'card',
} as const

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
  } = withDefaultGetters(props)

  return (
    <div {...otherProps} className={cnTileMenuList({ view }, [cnMixSpace({ p: 'xl' }), className])}>
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
            onClick={e => {
              onItemClick?.({ item, e })
              getItemOnClick(item)?.(e)
            }}
            as="a"
          />
        )
      })}
    </div>
  )
}) as TileMenuListComponent
