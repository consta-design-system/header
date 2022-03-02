import {
  DefaultItem,
  SelectMenuProps,
  SelectMenuPropGetItemHref,
  SelectMenuPropGetItemLabel,
  SelectMenuPropGetItemOnClick,
  SelectMenuPropGetItemTarget,
  SelectMenuPropGetItemSubMenu,
} from './types'

export const defaultGetItemLabel: SelectMenuPropGetItemLabel<DefaultItem> = item => item.label
export const defaultGetItemHref: SelectMenuPropGetItemHref<DefaultItem> = item => item.href
export const defaultGetItemOnClick: SelectMenuPropGetItemOnClick<DefaultItem> = item => item.onClick
export const defaultGetItemTarget: SelectMenuPropGetItemTarget<DefaultItem> = item => item.target
export const defaultGetItemSubMenu: SelectMenuPropGetItemSubMenu<DefaultItem> = item => item.subMenu

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
