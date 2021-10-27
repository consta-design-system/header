import {
  NotificationsListPropGetActionIcon,
  NotificationsListPropGetActionLabel,
  NotificationsListPropGetActionOnClick,
  NotificationsListPropGetGroupId,
  NotificationsListPropGetGroupLabel,
  NotificationsListPropGetItemActions,
  NotificationsListPropGetItemBadges,
  NotificationsListPropGetItemDate,
  NotificationsListPropGetItemDescription,
  NotificationsListPropGetItemGroup,
  NotificationsListPropGetItemImage,
  NotificationsListPropGetItemLabel,
  NotificationsListPropGetItemRead,
  NotificationsListPropGetItemView,
  DefaultAction,
  DefaultGroup,
  DefaultItem,
  NotificationsListProps,
  NotificationsListPropGroupLabelFormat,
} from './types'

import { getGroups as constaGetGroups } from '@consta/uikit/__internal__/src/utils/getGroups'
import { format, isToday, isYesterday, startOfDay } from 'date-fns'

const defaultGetActionIcon: NotificationsListPropGetActionIcon<DefaultAction> = action =>
  action.icon
const defaultGetActionLabel: NotificationsListPropGetActionLabel<DefaultAction> = action =>
  action.label
const defaultGetActionOnClick: NotificationsListPropGetActionOnClick<DefaultAction> = action =>
  action.onClick
const defaultGetGroupId: NotificationsListPropGetGroupId<DefaultGroup> = group => group.id
const defaultGetGroupLabel: NotificationsListPropGetGroupLabel<DefaultGroup> = group => group.label
const defaultGetItemActions: NotificationsListPropGetItemActions<DefaultItem> = item => item.actions
const defaultGetItemBadges: NotificationsListPropGetItemBadges<DefaultItem> = item => item.badges
const defaultGetItemDate: NotificationsListPropGetItemDate<DefaultItem> = item => item.date
const defaultGetItemDescription: NotificationsListPropGetItemDescription<DefaultItem> = item =>
  item.description
const defaultGetItemGroup: NotificationsListPropGetItemGroup<DefaultItem> = item => item.group
const defaultGetItemImage: NotificationsListPropGetItemImage<DefaultItem> = item => item.image
const defaultGetItemLabel: NotificationsListPropGetItemLabel<DefaultItem> = item => item.label
const defaultGetItemRead: NotificationsListPropGetItemRead<DefaultItem> = item => item.read
const defaultGetItemView: NotificationsListPropGetItemView<DefaultItem> = item => item.view

export function withDefaultGetters<ITEM, GROUP, ACTION>(
  props: NotificationsListProps<ITEM, GROUP, ACTION>
) {
  return {
    ...props,
    getActionIcon: props.getActionIcon || defaultGetActionIcon,
    getActionLabel: props.getActionLabel || defaultGetActionLabel,
    getActionOnClick: props.getActionOnClick || defaultGetActionOnClick,
    getGroupId: props.getGroupId || defaultGetGroupId,
    getGroupLabel: props.getGroupLabel || defaultGetGroupLabel,
    getItemActions: props.getItemActions || defaultGetItemActions,
    getItemBadges: props.getItemBadges || defaultGetItemBadges,
    getItemDate: props.getItemDate || defaultGetItemDate,
    getItemDescription: props.getItemDescription || defaultGetItemDescription,
    getItemGroup: props.getItemGroup || defaultGetItemGroup,
    getItemImage: props.getItemImage || defaultGetItemImage,
    getItemLabel: props.getItemLabel || defaultGetItemLabel,
    getItemRead: props.getItemRead || defaultGetItemRead,
    getItemView: props.getItemView || defaultGetItemView,
  }
}

type ReturnedGroup<ITEM, GROUP> = {
  items: ITEM[]
  key: string | number
  group?: GROUP
  groupIndex: number
}

export const noGroupKey = 'no-group'

export const defaultGroupLabelFormat: NotificationsListPropGroupLabelFormat<true> = timestamp => {
  if (isToday(timestamp)) {
    return 'Сегодня'
  }
  if (isYesterday(timestamp)) {
    return 'Вчера'
  }
  return format(timestamp, 'dd.MM.yyyy')
}

const sortGroup = (a: { key: string | number }, b: { key: string | number }) => {
  if (a.key < b.key) {
    return 1
  }
  if (a.key > b.key) {
    return -1
  }
  return 0
}

export const getGroups = <ITEM, GROUP>(
  items: ITEM[],
  groups: GROUP[] | undefined,
  groupByDay: boolean,
  getItemGroup: NotificationsListPropGetItemGroup<ITEM>,
  getItemDate: NotificationsListPropGetItemDate<ITEM>,
  getGroupId: NotificationsListPropGetGroupId<GROUP>
): Array<ReturnedGroup<ITEM, GROUP>> => {
  if (groupByDay) {
    const getItemGroupByDate = (item: ITEM) => {
      const date = getItemDate(item)
      return date ? startOfDay(date).getTime() : undefined
    }

    return constaGetGroups<ITEM, GROUP>(
      items,
      getItemGroupByDate,
      undefined,
      undefined,
      sortGroup,
      noGroupKey
    )
  }
  return constaGetGroups(items, getItemGroup, groups, getGroupId, undefined, noGroupKey)
}
