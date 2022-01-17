import {
  PropsWithHTMLAttributesAndRef,
  PropsWithHTMLAttributes,
} from '@/__private__/utils/types/PropsWithHTMLAttributes'

export const tileMenuPropView = ['lines', 'twoLines', 'cards'] as const
export type TileMenuPropView = typeof tileMenuPropView[number]
export const tileMenuPropViewDefault = tileMenuPropView[0]

export type DefaultItem = {
  title: string
  image?: string
  description?: string
  href?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export type TileMenuPropGetItemImage<ITEM> = (item: ITEM) => string | React.FC | undefined
export type TileMenuPropGetItemTitle<ITEM> = (item: ITEM) => string
export type TileMenuPropGetItemDescription<ITEM> = (item: ITEM) => string | undefined
export type TileMenuPropGetItemHref<ITEM> = (item: ITEM) => string | undefined
export type TileMenuPropGetItemOnClick<ITEM> = (
  item: ITEM
) => React.MouseEventHandler<HTMLAnchorElement> | undefined
export type TileMenuPropOnItemClick<ITEM> = (props: {
  e: React.MouseEvent<HTMLAnchorElement>
  item: ITEM
}) => void
export type TileMenuOnItemClick<ITEM> = (props: {
  e: React.MouseEvent<HTMLAnchorElement>
  item: ITEM
}) => void

type CommonProps<ITEM> = {
  view?: TileMenuPropView
  items: ITEM[]
  isMobile?: boolean
  onItemClick?: TileMenuOnItemClick<ITEM>
  getItemImage?: TileMenuPropGetItemImage<ITEM>
  getItemTitle?: TileMenuPropGetItemTitle<ITEM>
  getItemDescription?: TileMenuPropGetItemDescription<ITEM>
  getItemHref?: TileMenuPropGetItemHref<ITEM>
  getItemOnClick?: TileMenuPropGetItemOnClick<ITEM>
}

export type TileMenuProps<ITEM = DefaultItem> = PropsWithHTMLAttributesAndRef<
  CommonProps<ITEM> & { listClassName?: string; title?: string },
  HTMLButtonElement
> &
  (ITEM extends { title: DefaultItem['title'] }
    ? {}
    : { getItemTitle: TileMenuPropGetItemTitle<ITEM> })

export type TileMenuListProps<ITEM = DefaultItem> = PropsWithHTMLAttributes<
  CommonProps<ITEM>,
  HTMLDivElement
>

export type TileMenuListComponent = <ITEM = DefaultItem>(
  props: TileMenuListProps<ITEM>
) => React.ReactElement | null

export type TileMenuComponent = <ITEM = DefaultItem>(
  props: TileMenuProps<ITEM>
) => React.ReactElement | null
