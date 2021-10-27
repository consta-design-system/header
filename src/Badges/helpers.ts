import {
  BadgesPropGetItemIcon,
  BadgesPropGetItemLabel,
  BadgesPropGetItemStatus,
  DefaultItem,
  BadgesProps,
} from './types'

const defaultGetItemIcon: BadgesPropGetItemIcon<DefaultItem> = item => item.icon
const defaultGetItemLabel: BadgesPropGetItemLabel<DefaultItem> = item => item.label
const defaultGetItemStatus: BadgesPropGetItemStatus<DefaultItem> = item => item.status

export const withDefaultGetters = <ITEM>(props: BadgesProps<ITEM>) => {
  return {
    ...props,
    getItemLabel: props.getItemLabel || defaultGetItemLabel,
    getItemIcon: props.getItemIcon || defaultGetItemIcon,
    getItemStatus: props.getItemStatus || defaultGetItemStatus,
  }
}
