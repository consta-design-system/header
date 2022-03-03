import { PropsWithHTMLAttributesAndRef } from '@/__private__/utils/types/PropsWithHTMLAttributes'

export type SelectMenuDefaultItem = {
  label: string
  href?: string
  target?: string
  onClick?: React.EventHandler<React.MouseEvent>
  subMenu?: SelectMenuDefaultItem[]
}

export type SelectMenuPropGetItemLabel<ITEM> = (item: ITEM) => string
export type SelectMenuPropGetItemHref<ITEM> = (item: ITEM) => string | undefined
export type SelectMenuPropGetItemTarget<ITEM> = (item: ITEM) => string | undefined
export type SelectMenuPropGetItemOnClick<ITEM> = (
  item: ITEM
) => React.EventHandler<React.MouseEvent> | undefined
export type SelectMenuPropOnItemClick<ITEM> = (props: { e: React.MouseEvent; item: ITEM }) => void
export type SelectMenuPropGetItemSubMenu<ITEM> = (item: ITEM) => ITEM[] | undefined

export type SelectMenuProps<ITEM = SelectMenuDefaultItem> = PropsWithHTMLAttributesAndRef<
  {
    items: ITEM[]
    onItemClick?: SelectMenuPropOnItemClick<ITEM>
    getItemHref?: SelectMenuPropGetItemHref<ITEM>
    getItemLabel?: SelectMenuPropGetItemLabel<ITEM>
    getItemTarget?: SelectMenuPropGetItemTarget<ITEM>
    getItemOnClick?: SelectMenuPropGetItemOnClick<ITEM>
    getItemSubMenu?: SelectMenuPropGetItemSubMenu<ITEM>
    label: string
  },
  HTMLDivElement
> &
  (ITEM extends { label: SelectMenuDefaultItem['label'] }
    ? {}
    : { getItemLabel: SelectMenuPropGetItemLabel<ITEM> })

export type SelectMenuComponent = <ITEM = SelectMenuDefaultItem>(
  props: SelectMenuProps<ITEM>
) => React.ReactElement | null
