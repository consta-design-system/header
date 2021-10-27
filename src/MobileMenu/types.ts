import {
  DefaultItem,
  VerticalMenuPropGetItemHref,
  VerticalMenuPropGetItemLabel,
  VerticalMenuPropGetItemActive,
  VerticalMenuPropGetItemOnClick,
  VerticalMenuPropOnItemClick,
  VerticalMenuPropGetItemTarget,
  VerticalMenuPropGetItemSubMenu,
} from '@/VerticalMenu'

import { PropsWithHTMLAttributesAndRef } from '@/__private__/utils/types/PropsWithHTMLAttributes'

export type MobileMenuProps<ITEM = DefaultItem> = PropsWithHTMLAttributesAndRef<
  {
    items: ITEM[]
    getItemHref?: VerticalMenuPropGetItemHref<ITEM>
    getItemLabel?: VerticalMenuPropGetItemLabel<ITEM>
    getItemTarget?: VerticalMenuPropGetItemTarget<ITEM>
    getItemActive?: VerticalMenuPropGetItemActive<ITEM>
    getItemOnClick?: VerticalMenuPropGetItemOnClick<ITEM>
    getItemSubMenu?: VerticalMenuPropGetItemSubMenu<ITEM>
    onItemClick?: VerticalMenuPropOnItemClick<ITEM>
    header?: React.ReactNode
    sidebarClassName?: string
    children?: never
  },
  HTMLButtonElement
> &
  (ITEM extends { label: DefaultItem['label'] }
    ? {}
    : { getItemLabel: VerticalMenuPropGetItemLabel<ITEM> })

export type MobileMenuComponent = <ITEM = DefaultItem>(
  props: MobileMenuProps<ITEM>
) => React.ReactElement | null
