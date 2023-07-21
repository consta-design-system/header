import {
  TileMenuListDefaultItem,
  TileMenuListPropGetItemDescription,
  TileMenuListPropGetItemHref,
  TileMenuListPropGetItemImage,
  TileMenuListPropGetItemLabel,
  TileMenuListPropGetItemOnClick,
  TileMenuListProps,
} from './types';

export const defaultGetItemImage: TileMenuListPropGetItemImage<
  TileMenuListDefaultItem
> = (item) => item.image;
export const defaultGetItemLabel: TileMenuListPropGetItemLabel<
  TileMenuListDefaultItem
> = (item) => item.label;
export const defaultGetItemHref: TileMenuListPropGetItemHref<
  TileMenuListDefaultItem
> = (item) => item.href;
export const defaultGetItemOnClick: TileMenuListPropGetItemOnClick<
  TileMenuListDefaultItem
> = (item) => item.onClick;
export const defaultGetItemDescription: TileMenuListPropGetItemDescription<
  TileMenuListDefaultItem
> = (item) => item.description;

export function withDefaultGetters<ITEM>(props: TileMenuListProps<ITEM>) {
  return {
    ...props,
    getItemDescription: props.getItemDescription || defaultGetItemDescription,
    getItemLabel: props.getItemLabel || defaultGetItemLabel,
    getItemImage: props.getItemImage || defaultGetItemImage,
    getItemHref: props.getItemHref || defaultGetItemHref,
    getItemOnClick: props.getItemOnClick || defaultGetItemOnClick,
  };
}
