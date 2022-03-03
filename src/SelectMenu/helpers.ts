import {
  SelectMenuDefaultItem,
  SelectMenuProps,
  SelectMenuPropGetItemHref,
  SelectMenuPropGetItemLabel,
  SelectMenuPropGetItemOnClick,
  SelectMenuPropGetItemTarget,
  SelectMenuPropGetItemSubMenu,
} from './types'

export const defaultGetItemLabel: SelectMenuPropGetItemLabel<SelectMenuDefaultItem> = item =>
  item.label
export const defaultGetItemHref: SelectMenuPropGetItemHref<SelectMenuDefaultItem> = item =>
  item.href
export const defaultGetItemOnClick: SelectMenuPropGetItemOnClick<SelectMenuDefaultItem> = item =>
  item.onClick
export const defaultGetItemTarget: SelectMenuPropGetItemTarget<SelectMenuDefaultItem> = item =>
  item.target
export const defaultGetItemSubMenu: SelectMenuPropGetItemSubMenu<SelectMenuDefaultItem> = item =>
  item.subMenu

export const getGetters = <ITEM>(props: {
  getItemLabel?: SelectMenuPropGetItemLabel<ITEM>
  getItemHref?: SelectMenuPropGetItemHref<ITEM>
  getItemOnClick?: SelectMenuPropGetItemOnClick<ITEM>
  getItemTarget?: SelectMenuPropGetItemTarget<ITEM>
  getItemSubMenu?: SelectMenuPropGetItemSubMenu<ITEM>
}) => {
  return {
    getItemLabel: props.getItemLabel || defaultGetItemLabel,
    getItemHref: props.getItemHref || defaultGetItemHref,
    getItemOnClick: props.getItemOnClick || defaultGetItemOnClick,
    getItemTarget: props.getItemTarget || defaultGetItemTarget,
    getItemSubMenu: props.getItemSubMenu || defaultGetItemSubMenu,
  }
}

export function withDefaultGetters<ITEM>(props: SelectMenuProps<ITEM>) {
  return {
    ...props,
    ...getGetters(props),
  }
}
