import {
  MenuDefaultItem,
  MenuPropGetItemActive,
  MenuPropGetItemHref,
  MenuPropGetItemLabel,
  MenuPropGetItemOnClick,
  MenuPropGetItemSubMenu,
  MenuPropGetItemTarget,
  MenuProps,
} from './types';

export const defaultGetItemLabel: MenuPropGetItemLabel<MenuDefaultItem> = (
  item,
) => item.label;
export const defaultGetItemActive: MenuPropGetItemActive<MenuDefaultItem> = (
  item,
) => item.active;
export const defaultGetItemHref: MenuPropGetItemHref<MenuDefaultItem> = (
  item,
) => item.href;
export const defaultGetItemOnClick: MenuPropGetItemOnClick<MenuDefaultItem> = (
  item,
) => item.onClick;
export const defaultGetItemTarget: MenuPropGetItemTarget<MenuDefaultItem> = (
  item,
) => item.target;
export const defaultGetItemSubMenu: MenuPropGetItemSubMenu<MenuDefaultItem> = (
  item,
) => item.subMenu;

export const getGetters = <ITEM>(props: {
  getItemLabel?: MenuPropGetItemLabel<ITEM>;
  getItemActive?: MenuPropGetItemActive<ITEM>;
  getItemHref?: MenuPropGetItemHref<ITEM>;
  getItemOnClick?: MenuPropGetItemOnClick<ITEM>;
  getItemTarget?: MenuPropGetItemTarget<ITEM>;
  getItemSubMenu?: MenuPropGetItemSubMenu<ITEM>;
}) => {
  return {
    getItemLabel: props?.getItemLabel || defaultGetItemLabel,
    getItemActive: props?.getItemActive || defaultGetItemActive,
    getItemHref: props?.getItemHref || defaultGetItemHref,
    getItemOnClick: props?.getItemOnClick || defaultGetItemOnClick,
    getItemTarget: props?.getItemTarget || defaultGetItemTarget,
    getItemSubMenu: props?.getItemSubMenu || defaultGetItemSubMenu,
  };
};

export function withDefaultGetters<ITEM>(props: MenuProps<ITEM>) {
  return {
    ...props,
    ...getGetters(props),
  };
}
