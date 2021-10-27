import {
  DefaultItem,
  VerticalMenuProps,
  VerticalMenuPropGetItemActive,
  VerticalMenuPropGetItemHref,
  VerticalMenuPropGetItemLabel,
  VerticalMenuPropGetItemOnClick,
  VerticalMenuPropGetItemSubMenu,
  VerticalMenuPropGetItemTarget,
  VerticalMenuPropOnItemClick,
} from './types'

export const defaultGetItemLabel: VerticalMenuPropGetItemLabel<DefaultItem> = item => item.label
export const defaultGetItemActive: VerticalMenuPropGetItemActive<DefaultItem> = item => item.active
export const defaultGetItemHref: VerticalMenuPropGetItemHref<DefaultItem> = item => item.href
export const defaultGetItemOnClick: VerticalMenuPropGetItemOnClick<DefaultItem> = item =>
  item.onClick
export const defaultGetItemTarget: VerticalMenuPropGetItemTarget<DefaultItem> = item => item.target
export const defaultGetItemSubMenu: VerticalMenuPropGetItemSubMenu<DefaultItem> = item =>
  item.subMenu

export function withDefaultGetters<ITEM>(props: VerticalMenuProps<ITEM>) {
  return {
    ...props,
    getItemLabel: props.getItemLabel || defaultGetItemLabel,
    getItemActive: props.getItemActive || defaultGetItemActive,
    getItemHref: props.getItemHref || defaultGetItemHref,
    getItemOnClick: props.getItemOnClick || defaultGetItemOnClick,
    getItemTarget: props.getItemTarget || defaultGetItemTarget,
    getItemSubMenu: props.getItemSubMenu || defaultGetItemSubMenu,
  }
}

export function getItemClick<ITEM>(
  item: ITEM,
  getItemOnClick: VerticalMenuPropGetItemOnClick<ITEM>,
  onItemClick?: VerticalMenuPropOnItemClick<ITEM>
): React.MouseEventHandler {
  return e => {
    onItemClick?.({ e, item })
    getItemOnClick(item)?.(e)
  }
}
