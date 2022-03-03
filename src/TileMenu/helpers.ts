import {
  TileMenuPropGetItemDescription,
  TileMenuPropGetItemImage,
  TileMenuPropGetItemLabel,
  TileMenuDefaultItem,
  TileMenuListProps,
  TileMenuPropGetItemHref,
  TileMenuPropGetItemOnClick,
} from './types'

export const defaultGetItemImage: TileMenuPropGetItemImage<TileMenuDefaultItem> = item => item.image
export const defaultGetItemLabel: TileMenuPropGetItemLabel<TileMenuDefaultItem> = item => item.label
export const defaultGetItemHref: TileMenuPropGetItemHref<TileMenuDefaultItem> = item => item.href
export const defaultGetItemOnClick: TileMenuPropGetItemOnClick<TileMenuDefaultItem> = item =>
  item.onClick
export const defaultGetItemDescription: TileMenuPropGetItemDescription<TileMenuDefaultItem> = item =>
  item.description

export function withDefaultGetters<ITEM>(props: TileMenuListProps<ITEM>) {
  return {
    ...props,
    getItemDescription: props.getItemDescription || defaultGetItemDescription,
    getItemLabel: props.getItemLabel || defaultGetItemLabel,
    getItemImage: props.getItemImage || defaultGetItemImage,
    getItemHref: props.getItemHref || defaultGetItemHref,
    getItemOnClick: props.getItemOnClick || defaultGetItemOnClick,
  }
}
