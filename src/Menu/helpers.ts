import {
  DefaultItem,
  MenuProps,
  MenuPropGetItemActive,
  MenuPropGetItemHref,
  MenuPropGetItemLabel,
  MenuPropGetItemOnClick,
  MenuPropGetItemSubMenu,
  MenuPropGetItemTarget,
} from './types'

export const defaultGetItemLabel: MenuPropGetItemLabel<DefaultItem> = item => item.label
export const defaultGetItemActive: MenuPropGetItemActive<DefaultItem> = item => item.active
export const defaultGetItemHref: MenuPropGetItemHref<DefaultItem> = item => item.href
export const defaultGetItemOnClick: MenuPropGetItemOnClick<DefaultItem> = item => item.onClick
export const defaultGetItemTarget: MenuPropGetItemTarget<DefaultItem> = item => item.target
export const defaultGetItemSubMenu: MenuPropGetItemSubMenu<DefaultItem> = item => item.subMenu

export const getGetters = <ITEM>(props: {
  getItemLabel?: MenuPropGetItemLabel<ITEM>
  getItemActive?: MenuPropGetItemActive<ITEM>
  getItemHref?: MenuPropGetItemHref<ITEM>
  getItemOnClick?: MenuPropGetItemOnClick<ITEM>
  getItemTarget?: MenuPropGetItemTarget<ITEM>
  getItemSubMenu?: MenuPropGetItemSubMenu<ITEM>
}) => {
  return {
    getItemLabel: props?.getItemLabel || defaultGetItemLabel,
    getItemActive: props?.getItemActive || defaultGetItemActive,
    getItemHref: props?.getItemHref || defaultGetItemHref,
    getItemOnClick: props?.getItemOnClick || defaultGetItemOnClick,
    getItemTarget: props?.getItemTarget || defaultGetItemTarget,
    getItemSubMenu: props?.getItemSubMenu || defaultGetItemSubMenu,
  }
}

export function withDefaultGetters<ITEM>(props: MenuProps<ITEM>) {
  return {
    ...props,
    ...getGetters(props),
  }
}
