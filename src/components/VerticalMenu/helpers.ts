import {
  DefaultItem,
  VerticalMenuPropGetItemActive,
  VerticalMenuPropGetItemGroup,
  VerticalMenuPropGetItemHref,
  VerticalMenuPropGetItemLabel,
  VerticalMenuPropGetItemOnClick,
  VerticalMenuPropGetItemSubMenu,
  VerticalMenuPropGetItemTarget,
  VerticalMenuProps,
} from './types';

export const defaultGetItemLabel: VerticalMenuPropGetItemLabel<DefaultItem> = (
  item,
) => item.label;
export const defaultGetItemActive: VerticalMenuPropGetItemActive<
  DefaultItem
> = (item) => item.active;
export const defaultGetItemHref: VerticalMenuPropGetItemHref<DefaultItem> = (
  item,
) => item.href;
export const defaultGetItemOnClick: VerticalMenuPropGetItemOnClick<
  DefaultItem
> = (item) => item.onClick;
export const defaultGetItemTarget: VerticalMenuPropGetItemTarget<
  DefaultItem
> = (item) => item.target;
export const defaultGetItemSubMenu: VerticalMenuPropGetItemSubMenu<
  DefaultItem
> = (item) => item.subMenu;
export const defaultGetItemGroup: VerticalMenuPropGetItemGroup<DefaultItem> = (
  item,
) => item.groupId;

export function withDefaultGetters<ITEM>(props: VerticalMenuProps<ITEM>) {
  return {
    ...props,
    getItemLabel: props.getItemLabel || defaultGetItemLabel,
    getItemActive: props.getItemActive || defaultGetItemActive,
    getItemHref: props.getItemHref || defaultGetItemHref,
    getItemOnClick: props.getItemOnClick || defaultGetItemOnClick,
    getItemTarget: props.getItemTarget || defaultGetItemTarget,
    getItemSubMenu: props.getItemSubMenu || defaultGetItemSubMenu,
    getItemGroup: props.getItemGroup || defaultGetItemGroup,
  };
}
