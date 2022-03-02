import {
  PropsWithHTMLAttributesAndRef,
  PropsWithHTMLAttributes,
} from '@/__private__/utils/types/PropsWithHTMLAttributes'
import React from 'react'

export type DefaultItem = {
  label: string
  href?: string
  target?: string
  active?: boolean
  onClick?: React.EventHandler<React.MouseEvent>
  subMenu?: DefaultItem[]
  groupId?: string
}

export type VerticalMenuPropGetItemLabel<ITEM> = (item: ITEM) => string
export type VerticalMenuPropGetItemHref<ITEM> = (item: ITEM) => string | undefined
export type VerticalMenuPropGetItemTarget<ITEM> = (item: ITEM) => string | undefined
export type VerticalMenuPropGetItemActive<ITEM> = (item: ITEM) => boolean | undefined
export type VerticalMenuPropGetItemSubMenu<ITEM> = (item: ITEM) => ITEM[] | undefined
export type VerticalMenuPropGetItemOnClick<ITEM> = (
  item: ITEM
) => React.EventHandler<React.MouseEvent> | undefined
export type VerticalMenuPropOnItemClick<ITEM> = (props: { e: React.MouseEvent; item: ITEM }) => void
export type VerticalMenuPropGetItemGroup<ITEM> = (item: ITEM) => string | number | undefined

export type VerticalMenuProps<ITEM = DefaultItem> = PropsWithHTMLAttributes<
  {
    items: ITEM[]
    getItemHref?: VerticalMenuPropGetItemHref<ITEM>
    getItemLabel?: VerticalMenuPropGetItemLabel<ITEM>
    getItemTarget?: VerticalMenuPropGetItemTarget<ITEM>
    getItemActive?: VerticalMenuPropGetItemActive<ITEM>
    getItemOnClick?: VerticalMenuPropGetItemOnClick<ITEM>
    getItemSubMenu?: VerticalMenuPropGetItemSubMenu<ITEM>
    onItemClick?: VerticalMenuPropOnItemClick<ITEM>
    getItemGroup?: VerticalMenuPropGetItemGroup<ITEM>
    header?: React.ReactNode
    footer?: React.ReactNode
  },
  HTMLDivElement
> &
  (ITEM extends { label: DefaultItem['label'] }
    ? {}
    : { getItemLabel: VerticalMenuPropGetItemLabel<ITEM> })

export type VerticalMenuComponent = <ITEM = DefaultItem>(
  props: VerticalMenuProps<ITEM>
) => React.ReactElement | null

export type Level<ITEM> = {
  items: ITEM[]
  id: string
  label?: string
}

export type VerticalMenuLevelProps<ITEM = DefaultItem> = PropsWithHTMLAttributesAndRef<
  {
    id: string
    items: ITEM[]
    getItemHref: VerticalMenuPropGetItemHref<ITEM>
    getItemLabel: VerticalMenuPropGetItemLabel<ITEM>
    getItemTarget: VerticalMenuPropGetItemTarget<ITEM>
    getItemActive: VerticalMenuPropGetItemActive<ITEM>
    getItemOnClick: VerticalMenuPropGetItemOnClick<ITEM>
    getItemSubMenu: VerticalMenuPropGetItemSubMenu<ITEM>
    getItemGroup: VerticalMenuPropGetItemGroup<ITEM>
    addLevel: (level: Level<ITEM>) => void
    removeLevel: () => void
    label?: string
    header?: React.ReactNode
    footer?: React.ReactNode
  },
  HTMLDivElement
>

export type VerticalMenuLevelComponent = <ITEM = DefaultItem>(
  props: VerticalMenuLevelProps<ITEM>
) => React.ReactElement | null

export type VerticalMenuItemProps = PropsWithHTMLAttributes<
  {
    label: string
    href?: string
    target?: string
    active?: boolean
    onClick?: React.EventHandler<React.MouseEvent>
    withSubMenu?: boolean
  },
  HTMLSpanElement
>

export type VerticalMenuItemComponent = (props: VerticalMenuItemProps) => React.ReactElement | null
