import React from 'react';

import {
  DefaultItem,
  NotificationsActionsPropGetItemIcon,
  NotificationsActionsPropGetItemLabel,
  NotificationsActionsPropGetItemOnClick,
  NotificationsActionsProps,
} from './types';

const defaultGetItemIcon: NotificationsActionsPropGetItemIcon<DefaultItem> = (
  item,
) => item.icon;
const defaultGetItemLabel: NotificationsActionsPropGetItemLabel<DefaultItem> = (
  item,
) => item.label;
const defaultGetItemOnClick: NotificationsActionsPropGetItemOnClick<
  DefaultItem
> = (item) => item.onClick;

export function withDefaultGetters<ITEM>(
  props: NotificationsActionsProps<ITEM>,
) {
  return {
    ...props,
    getItemIcon: props.getItemIcon || defaultGetItemIcon,
    getItemLabel: props.getItemLabel || defaultGetItemLabel,
    getItemOnClick: props.getItemOnClick || defaultGetItemOnClick,
  };
}

export function menuGetItemLeftSideBar<ITEM>(
  getIcon: NotificationsActionsPropGetItemIcon<ITEM>,
) {
  return (item: ITEM) => {
    const Icon = getIcon(item);

    if (!Icon) {
      return undefined;
    }

    return <Icon size="s" />;
  };
}
