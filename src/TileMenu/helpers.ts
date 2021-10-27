import {
  TileMenuPropGetItemDescription,
  TileMenuPropGetItemImage,
  TileMenuPropGetItemTitle,
  DefaultItem,
  TileMenuListProps,
  TileMenuPropGetItemHref,
  TileMenuPropGetItemOnClick,
} from './types'

export const defaultGetItemImage: TileMenuPropGetItemImage<DefaultItem> = item => item.image
export const defaultGetItemTitle: TileMenuPropGetItemTitle<DefaultItem> = item => item.title
export const defaultGetItemHref: TileMenuPropGetItemHref<DefaultItem> = item => item.href
export const defaultGetItemOnClick: TileMenuPropGetItemOnClick<DefaultItem> = item => item.onClick
export const defaultGetItemDescription: TileMenuPropGetItemDescription<DefaultItem> = item =>
  item.description

export function withDefaultGetters<ITEM>(props: TileMenuListProps<ITEM>) {
  return {
    ...props,
    getItemDescription: props.getItemDescription || defaultGetItemDescription,
    getItemTitle: props.getItemTitle || defaultGetItemTitle,
    getItemImage: props.getItemImage || defaultGetItemImage,
    getItemHref: props.getItemHref || defaultGetItemHref,
    getItemOnClick: props.getItemOnClick || defaultGetItemOnClick,
  }
}
