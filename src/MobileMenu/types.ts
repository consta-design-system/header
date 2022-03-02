import {
  DefaultItem,
  VerticalMenuPropGetItemHref,
  VerticalMenuPropGetItemLabel,
  VerticalMenuPropGetItemActive,
  VerticalMenuPropGetItemOnClick,
  VerticalMenuPropOnItemClick,
  VerticalMenuPropGetItemTarget,
  VerticalMenuPropGetItemSubMenu,
  VerticalMenuPropGetItemGroup,
} from '@/VerticalMenu'

import { PropsWithHTMLAttributesAndRef } from '@/__private__/utils/types/PropsWithHTMLAttributes'
import React from 'react'

export type MobileMenuProps<ITEM = DefaultItem> = PropsWithHTMLAttributesAndRef<
  {
    items: ITEM[]
    getItemHref?: VerticalMenuPropGetItemHref<ITEM>
    getItemLabel?: VerticalMenuPropGetItemLabel<ITEM>
    getItemTarget?: VerticalMenuPropGetItemTarget<ITEM>
    getItemActive?: VerticalMenuPropGetItemActive<ITEM>
    getItemOnClick?: VerticalMenuPropGetItemOnClick<ITEM>
    getItemSubMenu?: VerticalMenuPropGetItemSubMenu<ITEM>
    getItemGroup?: VerticalMenuPropGetItemGroup<ITEM>
    onItemClick?: VerticalMenuPropOnItemClick<ITEM>
    header?: React.ReactNode
    sidebarClassName?: string
    children?: never
    footer?: React.ReactNode
  },
  HTMLButtonElement
> &
  (ITEM extends { label: DefaultItem['label'] }
    ? {}
    : { getItemLabel: VerticalMenuPropGetItemLabel<ITEM> })

export type MobileMenuComponent = <ITEM = DefaultItem>(
  props: MobileMenuProps<ITEM>
) => React.ReactElement | null

export { DefaultItem }
