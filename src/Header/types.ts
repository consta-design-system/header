import React from 'react'

import {
  DefaultItem as DefaultMenuItem,
  MenuPropOnItemClick,
  MenuPropGetItemHref,
  MenuPropGetItemLabel,
  MenuPropGetItemTarget,
  MenuPropGetItemActive,
  MenuPropGetItemOnClick,
  MenuPropGetItemSubMenu,
} from '@/Menu'

import {
  NotificationsListPropGetItemLabel,
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
  NotificationsListPropGetItemRead,
  NotificationsListPropGetItemView,
  NotificationsListPropGroupLabelFormat,
  DefaultAction as DefaultNotificationAction,
  DefaultGroup as DefaultNotificationGroup,
  DefaultItem as DefaultNotificationItem,
  NotificationsListPropItemDateFormat,
} from '@/NotificationsList'

import {
  TileMenuPropGetItemImage,
  TileMenuPropGetItemDescription,
  TileMenuPropGetItemHref,
  TileMenuPropGetItemOnClick,
  TileMenuPropGetItemTitle,
  TileMenuOnItemClick,
  TileMenuPropView,
  DefaultItem as DefaultTileMenuItem,
} from '@/TileMenu'

import { PropsWithHTMLAttributesAndRef } from '@/__private__/utils/types/PropsWithHTMLAttributes'

export type HeaderProps<
  // Menu
  MENU_ITEM = DefaultMenuItem,
  // Notifications
  NOTIFICATION_ITEM = DefaultNotificationItem,
  NOTIFICATION_GROUP = DefaultNotificationGroup,
  NOTIFICATION_ACTION = DefaultNotificationAction,
  NOTIFICATION_GROUP_BY_DAY extends boolean = false,
  // TileMenu
  TILE_MENU_ITEM = DefaultTileMenuItem
> = PropsWithHTMLAttributesAndRef<
  {
    // Logo
    logo?: React.ReactNode
    onLogoClick?: React.MouseEventHandler
    logoHref?: string

    // Menu
    menu?: MENU_ITEM[]
    onMenuItemClick?: MenuPropOnItemClick<MENU_ITEM>
    getMenuItemHref?: MenuPropGetItemHref<MENU_ITEM>
    getMenuItemLabel?: MenuPropGetItemLabel<MENU_ITEM>
    getMenuItemTarget?: MenuPropGetItemTarget<MENU_ITEM>
    getMenuItemActive?: MenuPropGetItemActive<MENU_ITEM>
    getMenuItemOnClick?: MenuPropGetItemOnClick<MENU_ITEM>
    getMenuItemSubMenu?: MenuPropGetItemSubMenu<MENU_ITEM>

    // Login
    userName?: string
    userAvatar?: string
    userInfo?: string
    userLogined?: boolean
    onLoginButtonClick?: React.MouseEventHandler
    onUserClick?: React.MouseEventHandler
    loginButtonLabel?: string

    // Notifications
    notifications?: NOTIFICATION_ITEM[]
    notificationsDateFormat?: NotificationsListPropItemDateFormat
    notificationsTitle?: string
    notificationsActions?: NOTIFICATION_ACTION[]
    notificationsGroupByDay?: NOTIFICATION_GROUP_BY_DAY
    notificationsGroupLabelFormat?: NotificationsListPropGroupLabelFormat<NOTIFICATION_GROUP_BY_DAY>
    notificationsGroups?: NOTIFICATION_GROUP_BY_DAY extends true ? never : NOTIFICATION_GROUP[]
    getNotificationsItemLabel?: NotificationsListPropGetItemLabel<NOTIFICATION_ITEM>
    getNotificationsItemDescription?: NotificationsListPropGetItemDescription<NOTIFICATION_ITEM>
    getNotificationsItemImage?: NotificationsListPropGetItemImage<NOTIFICATION_ITEM>
    getNotificationsItemRead?: NotificationsListPropGetItemRead<NOTIFICATION_ITEM>
    getNotificationsItemDate?: NotificationsListPropGetItemDate<NOTIFICATION_ITEM>
    getNotificationsItemBadges?: NotificationsListPropGetItemBadges<NOTIFICATION_ITEM>
    getNotificationsItemActions?: NotificationsListPropGetItemActions<NOTIFICATION_ITEM>
    getNotificationsItemGroup?: NotificationsListPropGetItemGroup<NOTIFICATION_ITEM>
    getNotificationsItemView?: NotificationsListPropGetItemView<NOTIFICATION_ITEM>
    getNotificationsActionLabel?: NotificationsListPropGetActionLabel<NOTIFICATION_ACTION>
    getNotificationsActionIcon?: NotificationsListPropGetActionIcon<NOTIFICATION_ACTION>
    getNotificationsActionOnClick?: NotificationsListPropGetActionOnClick<NOTIFICATION_ACTION>
    getNotificationsGroupLabel?: NotificationsListPropGetGroupLabel<NOTIFICATION_GROUP>
    getNotificationsGroupId?: NotificationsListPropGetGroupId<NOTIFICATION_GROUP>

    // TileMenu
    tileMenu?: TILE_MENU_ITEM[]
    tileMenuTitle?: string
    tileMenuView?: TileMenuPropView
    onTileMenuItemClick?: TileMenuOnItemClick<TILE_MENU_ITEM>
    getTileMenuItemImage?: TileMenuPropGetItemImage<TILE_MENU_ITEM>
    getTileMenuItemTitle?: TileMenuPropGetItemTitle<TILE_MENU_ITEM>
    getTileMenuItemDescription?: TileMenuPropGetItemDescription<TILE_MENU_ITEM>
    getTileMenuItemHref?: TileMenuPropGetItemHref<TILE_MENU_ITEM>
    getTileMenuItemOnClick?: TileMenuPropGetItemOnClick<TILE_MENU_ITEM>
  },
  HTMLDivElement
> &
  // Menu
  (MENU_ITEM extends { label: DefaultMenuItem['label'] | unknown }
    ? {}
    : { getMenuItemLabel: MenuPropGetItemLabel<MENU_ITEM> }) &
  // Notifications
  (NOTIFICATION_ACTION extends { label: DefaultNotificationAction['label'] | unknown }
    ? {}
    : { getNotificationsActionLabel: NotificationsListPropGetItemActions<NOTIFICATION_ACTION> }) &
  (NOTIFICATION_GROUP extends { label: DefaultNotificationGroup['label'] | unknown }
    ? {}
    : { getNotificationsGroupLabel: NotificationsListPropGetGroupLabel<NOTIFICATION_GROUP> }) &
  (NOTIFICATION_GROUP extends { id: DefaultNotificationGroup['id'] | unknown }
    ? {}
    : { getNotificationsGroupId: NotificationsListPropGetGroupId<NOTIFICATION_GROUP> }) &
  (NOTIFICATION_ITEM extends { label: DefaultNotificationItem['label'] | unknown }
    ? {}
    : { getNotificationsItemLabel: NotificationsListPropGetItemLabel<NOTIFICATION_ITEM> }) &
  // TileMenu
  (TILE_MENU_ITEM extends { title: DefaultTileMenuItem['title'] | unknown }
    ? {}
    : { getTileMenuItemTitle: TileMenuPropGetItemTitle<TILE_MENU_ITEM> })

export type HeaderComponent = <
  // Menu
  MENU_ITEM = DefaultMenuItem,
  // Notifications
  NOTIFICATION_ITEM = DefaultNotificationItem,
  NOTIFICATION_GROUP = DefaultNotificationGroup,
  NOTIFICATION_ACTION = DefaultNotificationAction,
  NOTIFICATION_GROUP_BY_DAY extends boolean = false,
  // TileMenu
  TILE_MENU_ITEM = DefaultTileMenuItem
>(
  props: HeaderProps<
    MENU_ITEM,
    NOTIFICATION_ITEM,
    NOTIFICATION_GROUP,
    NOTIFICATION_ACTION,
    NOTIFICATION_GROUP_BY_DAY,
    TILE_MENU_ITEM
  >
) => React.ReactElement | null
