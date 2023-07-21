import {
  VerticalMenuDefaultItem,
  VerticalMenuPropGetItemActive,
  VerticalMenuPropGetItemGroup,
  VerticalMenuPropGetItemHref,
  VerticalMenuPropGetItemLabel,
  VerticalMenuPropGetItemOnClick,
  VerticalMenuPropGetItemSubMenu,
  VerticalMenuPropGetItemTarget,
  VerticalMenuProps,
} from './types';

export const defaultGetItemLabel: VerticalMenuPropGetItemLabel<
  VerticalMenuDefaultItem
> = (item) => item.label;
export const defaultGetItemActive: VerticalMenuPropGetItemActive<
  VerticalMenuDefaultItem
> = (item) => item.active;
export const defaultGetItemHref: VerticalMenuPropGetItemHref<
  VerticalMenuDefaultItem
> = (item) => item.href;
export const defaultGetItemOnClick: VerticalMenuPropGetItemOnClick<
  VerticalMenuDefaultItem
> = (item) => item.onClick;
export const defaultGetItemTarget: VerticalMenuPropGetItemTarget<
  VerticalMenuDefaultItem
> = (item) => item.target;
export const defaultGetItemSubMenu: VerticalMenuPropGetItemSubMenu<
  VerticalMenuDefaultItem
> = (item) => item.subMenu;
export const defaultGetItemGroup: VerticalMenuPropGetItemGroup<
  VerticalMenuDefaultItem
> = (item) => item.groupId;

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
