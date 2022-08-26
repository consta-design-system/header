import { getGroups as constaGetGroups } from '@consta/uikit/__internal__/src/utils/getGroups';
import { format, isToday, isYesterday, startOfDay } from 'date-fns';

import {
  NotificationsDefaultAction,
  NotificationsDefaultGroup,
  NotificationsDefaultItem,
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
  NotificationsListPropGroupLabelFormat,
  NotificationsListProps,
} from './types';

const defaultGetActionIcon: NotificationsListPropGetActionIcon<
  NotificationsDefaultAction
> = (action) => action.icon;
const defaultGetActionLabel: NotificationsListPropGetActionLabel<
  NotificationsDefaultAction
> = (action) => action.label;
const defaultGetActionOnClick: NotificationsListPropGetActionOnClick<
  NotificationsDefaultAction
> = (action) => action.onClick;
const defaultGetGroupId: NotificationsListPropGetGroupId<
  NotificationsDefaultGroup
> = (group) => group.id;
const defaultGetGroupLabel: NotificationsListPropGetGroupLabel<
  NotificationsDefaultGroup
> = (group) => group.label;
const defaultGetItemActions: NotificationsListPropGetItemActions<
  NotificationsDefaultItem
> = (item) => item.actions;
const defaultGetItemBadges: NotificationsListPropGetItemBadges<
  NotificationsDefaultItem
> = (item) => item.badges;
const defaultGetItemDate: NotificationsListPropGetItemDate<
  NotificationsDefaultItem
> = (item) => item.date;
const defaultGetItemDescription: NotificationsListPropGetItemDescription<
  NotificationsDefaultItem
> = (item) => item.description;
const defaultGetItemGroup: NotificationsListPropGetItemGroup<
  NotificationsDefaultItem
> = (item) => item.group;
const defaultGetItemImage: NotificationsListPropGetItemImage<
  NotificationsDefaultItem
> = (item) => item.image;
const defaultGetItemLabel: NotificationsListPropGetItemLabel<
  NotificationsDefaultItem
> = (item) => item.label;
const defaultGetItemRead: NotificationsListPropGetItemRead<
  NotificationsDefaultItem
> = (item) => item.read;
const defaultGetItemView: NotificationsListPropGetItemView<
  NotificationsDefaultItem
> = (item) => item.view;

export function withDefaultGetters<ITEM, GROUP, ACTION>(
  props: NotificationsListProps<ITEM, GROUP, ACTION>,
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
  };
}

type ReturnedGroup<ITEM, GROUP> = {
  items: ITEM[];
  key: string | number;
  group?: GROUP;
  groupIndex: number;
};

export const noGroupKey = 'no-group';

export const defaultGroupLabelFormat: NotificationsListPropGroupLabelFormat<
  true
> = (timestamp) => {
  if (isToday(timestamp)) {
    return 'Сегодня';
  }
  if (isYesterday(timestamp)) {
    return 'Вчера';
  }
  return format(timestamp, 'dd.MM.yyyy');
};

const sortGroup = (
  a: { key: string | number },
  b: { key: string | number },
) => {
  if (a.key < b.key) {
    return 1;
  }
  if (a.key > b.key) {
    return -1;
  }
  return 0;
};

export const getGroups = <ITEM, GROUP>(
  items: ITEM[],
  groups: GROUP[] | undefined,
  groupByDay: boolean,
  getItemGroup: NotificationsListPropGetItemGroup<ITEM>,
  getItemDate: NotificationsListPropGetItemDate<ITEM>,
  getGroupId: NotificationsListPropGetGroupId<GROUP>,
): Array<ReturnedGroup<ITEM, GROUP>> => {
  if (groupByDay) {
    const getItemGroupByDate = (item: ITEM) => {
      const date = getItemDate(item);
      return date ? startOfDay(date).getTime() : undefined;
    };

    return constaGetGroups<ITEM, GROUP>(
      items,
      getItemGroupByDate,
      undefined,
      undefined,
      sortGroup,
      noGroupKey,
    );
  }
  return constaGetGroups(
    items,
    getItemGroup,
    groups,
    getGroupId,
    undefined,
    noGroupKey,
  );
};
