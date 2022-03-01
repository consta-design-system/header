import {
  DefaultItem,
  ButtonMenuProps,
  ButtonMenuPropGetItemHref,
  ButtonMenuPropGetItemLabel,
  ButtonMenuPropGetItemOnClick,
  ButtonMenuPropGetItemTarget,
  ButtonMenuPropGetItemIcon,
} from './types'

export const defaultGetItemLabel: ButtonMenuPropGetItemLabel<DefaultItem> = item => item.label
export const defaultGetItemHref: ButtonMenuPropGetItemHref<DefaultItem> = item => item.href
export const defaultGetItemOnClick: ButtonMenuPropGetItemOnClick<DefaultItem> = item => item.onClick
export const defaultGetItemTarget: ButtonMenuPropGetItemTarget<DefaultItem> = item => item.target
export const defaultGetItemIcon: ButtonMenuPropGetItemIcon<DefaultItem> = item => item.icon

export const getGetters = <ITEM>(props: {
  getItemLabel?: ButtonMenuPropGetItemLabel<ITEM>
  getItemHref?: ButtonMenuPropGetItemHref<ITEM>
  getItemOnClick?: ButtonMenuPropGetItemOnClick<ITEM>
  getItemTarget?: ButtonMenuPropGetItemTarget<ITEM>
  getItemIcon?: ButtonMenuPropGetItemIcon<ITEM>
}) => {
  return {
    getItemLabel: props.getItemLabel || defaultGetItemLabel,
    getItemHref: props.getItemHref || defaultGetItemHref,
    getItemOnClick: props.getItemOnClick || defaultGetItemOnClick,
    getItemTarget: props.getItemTarget || defaultGetItemTarget,
    getItemIcon: props.getItemIcon || defaultGetItemIcon,
  }
}

export function withDefaultGetters<ITEM>(props: ButtonMenuProps<ITEM>) {
  return {
    ...props,
    ...getGetters(props),
  }
}
