import React from 'react'
import { IconComponent } from '@consta/uikit/Icon'

import {
  MenuDefaultItem,
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
  NotificationsDefaultAction,
  NotificationsDefaultGroup,
  NotificationsDefaultItem,
  NotificationsListPropItemDateFormat,
} from '@/NotificationsList'

import {
  TileMenuPropGetItemImage,
  TileMenuPropGetItemDescription,
  TileMenuPropGetItemHref,
  TileMenuPropGetItemOnClick,
  TileMenuPropGetItemLabel,
  TileMenuOnItemClick,
  TileMenuPropView,
  TileMenuDefaultItem,
} from '@/TileMenu'

import { PropsWithHTMLAttributesAndRef } from '@/__private__/utils/types/PropsWithHTMLAttributes'

import {
  BreadcrumbsPropGetItemLabel,
  BreadcrumbsPropGetItemHref,
  BreadcrumbsPropGetItemOnClick,
  BreadcrumbsPropGetItemIcon,
  BreadcrumbsPropOnItemClick,
  BreadcrumbPropFitMode,
  DefaultItem as BreadcrumbsDefaultItem,
} from '@consta/uikit/BreadcrumbsCanary'

import { HeaderSearchProps } from './HeaderSearch'

import {
  SelectMenuPropGetItemHref,
  SelectMenuPropGetItemLabel,
  SelectMenuPropGetItemOnClick,
  SelectMenuPropGetItemSubMenu,
  SelectMenuPropGetItemTarget,
  SelectMenuPropOnItemClick,
  SelectMenuDefaultItem,
} from '@/SelectMenu'

import {
  ButtonMenuPropGetItemHref,
  ButtonMenuPropGetItemIcon,
  ButtonMenuPropGetItemLabel,
  ButtonMenuPropGetItemOnClick,
  ButtonMenuPropGetItemTarget,
  ButtonMenuPropOnItemClick,
  ButtonMenuDefaultItem,
} from '@/ButtonMenu'

import { LanguagesDefaultItem } from '@/Languages'

export type HeaderDefaultSocialMediaItem = ButtonMenuDefaultItem & { icon: IconComponent }
export type HeaderDefaultAdditionalButtonsItem = ButtonMenuDefaultItem
export type HeaderDefaultMenuItem = MenuDefaultItem
export type HeaderDefaultNotificationAction = NotificationsDefaultAction
export type HeaderDefaultNotificationGroup = NotificationsDefaultGroup
export type HeaderDefaultNotificationItem = NotificationsDefaultItem
export type HeaderDefaultTileMenuItem = TileMenuDefaultItem
export type HeaderDefaultBreadcrumbsItem = BreadcrumbsDefaultItem
export type HeaderDefaultSelectMenuItem = SelectMenuDefaultItem
export type HeaderDefaultLanguagesItem = LanguagesDefaultItem

export type HeaderProps<
  // Menu
  MENU_ITEM = HeaderDefaultMenuItem,
  // Notifications
  NOTIFICATION_ITEM = HeaderDefaultNotificationItem,
  NOTIFICATION_GROUP = HeaderDefaultNotificationGroup,
  NOTIFICATION_ACTION = HeaderDefaultNotificationAction,
  NOTIFICATION_GROUP_BY_DAY extends boolean = false,
  // TileMenu
  TILE_MENU_ITEM = HeaderDefaultTileMenuItem,
  // Breadcrumbs
  BREADCRUMBS_ITEM = HeaderDefaultBreadcrumbsItem,
  // SecondaryMenu
  SECONDARY_MENU_ITEM = HeaderDefaultSelectMenuItem,
  // ButtonMenu
  SOCIAL_MEDIA_ITEM = HeaderDefaultSocialMediaItem,
  // Languages
  LANGUAGES_ITEM = HeaderDefaultLanguagesItem,
  // AdditionalButtons
  ADDITIONAL_BUTTONS_ITEM = HeaderDefaultAdditionalButtonsItem
> = PropsWithHTMLAttributesAndRef<
  {
    fixed?: boolean

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
    getTileMenuItemLabel?: TileMenuPropGetItemLabel<TILE_MENU_ITEM>
    getTileMenuItemDescription?: TileMenuPropGetItemDescription<TILE_MENU_ITEM>
    getTileMenuItemHref?: TileMenuPropGetItemHref<TILE_MENU_ITEM>
    getTileMenuItemOnClick?: TileMenuPropGetItemOnClick<TILE_MENU_ITEM>

    // Breadcrumbs
    breadcrumbs?: BREADCRUMBS_ITEM[]
    getBreadcrumbsItemLabel?: BreadcrumbsPropGetItemLabel<BREADCRUMBS_ITEM>
    getBreadcrumbsItemHref?: BreadcrumbsPropGetItemHref<BREADCRUMBS_ITEM>
    getBreadcrumbsItemIcon?: BreadcrumbsPropGetItemIcon<BREADCRUMBS_ITEM>
    getBreadcrumbsItemOnClick?: BreadcrumbsPropGetItemOnClick<BREADCRUMBS_ITEM>
    onBreadcrumbsItemClick?: BreadcrumbsPropOnItemClick<BREADCRUMBS_ITEM>
    breadcrumbsOnlyIconRoot?: boolean
    breadcrumbsLastItemIsLink?: boolean
    breadcrumbsFitMode?: BreadcrumbPropFitMode

    // Search
    searchValue?: HeaderSearchProps['value']
    searchOnChange?: HeaderSearchProps['onChange']
    searchOnSubmit?: HeaderSearchProps['onSubmit']
    searchPlaceholder?: HeaderSearchProps['placeholder']

    // SecondaryMenu
    secondaryMenu?: SECONDARY_MENU_ITEM[]
    onSecondaryMenuItemClick?: SelectMenuPropOnItemClick<SECONDARY_MENU_ITEM>
    getSecondaryMenuItemHref?: SelectMenuPropGetItemHref<SECONDARY_MENU_ITEM>
    getSecondaryMenuItemLabel?: SelectMenuPropGetItemLabel<SECONDARY_MENU_ITEM>
    getSecondaryMenuItemTarget?: SelectMenuPropGetItemTarget<SECONDARY_MENU_ITEM>
    getSecondaryMenuItemOnClick?: SelectMenuPropGetItemOnClick<SECONDARY_MENU_ITEM>
    getSecondaryMenuItemSubMenu?: SelectMenuPropGetItemSubMenu<SECONDARY_MENU_ITEM>
    secondaryMenuLabel?: string

    // SocialMedia
    socialMedia?: SOCIAL_MEDIA_ITEM[]
    onSocialMediaItemClick?: ButtonMenuPropOnItemClick<SOCIAL_MEDIA_ITEM>
    getSocialMediaItemHref?: ButtonMenuPropGetItemHref<SOCIAL_MEDIA_ITEM>
    getSocialMediaItemLabel?: ButtonMenuPropGetItemLabel<SOCIAL_MEDIA_ITEM>
    getSocialMediaItemTarget?: ButtonMenuPropGetItemTarget<SOCIAL_MEDIA_ITEM>
    getSocialMediaItemOnClick?: ButtonMenuPropGetItemOnClick<SOCIAL_MEDIA_ITEM>
    getSocialMediaItemIcon?: ButtonMenuPropGetItemIcon<SOCIAL_MEDIA_ITEM>

    // Languages

    languages?: LANGUAGES_ITEM[]
    languagesLabel?: string
    languageValue?: LANGUAGES_ITEM
    onLanguageChange?: SelectMenuPropOnItemClick<LANGUAGES_ITEM>
    getLanguagesItemHref?: SelectMenuPropGetItemHref<LANGUAGES_ITEM>
    getLanguagesItemLabel?: SelectMenuPropGetItemLabel<LANGUAGES_ITEM>
    getLanguagesItemTarget?: SelectMenuPropGetItemTarget<LANGUAGES_ITEM>
    getLanguagesItemOnClick?: SelectMenuPropGetItemOnClick<LANGUAGES_ITEM>

    // AdditionalButtons
    additionalButtons?: ADDITIONAL_BUTTONS_ITEM[]
    onAdditionalButtonsItemClick?: ButtonMenuPropOnItemClick<ADDITIONAL_BUTTONS_ITEM>
    getAdditionalButtonsItemHref?: ButtonMenuPropGetItemHref<ADDITIONAL_BUTTONS_ITEM>
    getAdditionalButtonsItemLabel?: ButtonMenuPropGetItemLabel<ADDITIONAL_BUTTONS_ITEM>
    getAdditionalButtonsItemTarget?: ButtonMenuPropGetItemTarget<ADDITIONAL_BUTTONS_ITEM>
    getAdditionalButtonsItemOnClick?: ButtonMenuPropGetItemOnClick<ADDITIONAL_BUTTONS_ITEM>
    getAdditionalButtonsItemIcon?: ButtonMenuPropGetItemIcon<ADDITIONAL_BUTTONS_ITEM>
  },
  HTMLDivElement
> &
  // Menu
  (MENU_ITEM extends { label: HeaderDefaultMenuItem['label'] | unknown }
    ? {}
    : { getMenuItemLabel: MenuPropGetItemLabel<MENU_ITEM> }) &
  // Notifications
  (NOTIFICATION_ACTION extends { label: HeaderDefaultNotificationAction['label'] | unknown }
    ? {}
    : { getNotificationsActionLabel: NotificationsListPropGetItemActions<NOTIFICATION_ACTION> }) &
  (NOTIFICATION_GROUP extends { label: HeaderDefaultNotificationGroup['label'] | unknown }
    ? {}
    : { getNotificationsGroupLabel: NotificationsListPropGetGroupLabel<NOTIFICATION_GROUP> }) &
  (NOTIFICATION_GROUP extends { id: HeaderDefaultNotificationGroup['id'] | unknown }
    ? {}
    : { getNotificationsGroupId: NotificationsListPropGetGroupId<NOTIFICATION_GROUP> }) &
  (NOTIFICATION_ITEM extends { label: HeaderDefaultNotificationItem['label'] | unknown }
    ? {}
    : { getNotificationsItemLabel: NotificationsListPropGetItemLabel<NOTIFICATION_ITEM> }) &
  // TileMenu
  (TILE_MENU_ITEM extends { label: HeaderDefaultTileMenuItem['label'] | unknown }
    ? {}
    : { getTileMenuItemLabel: TileMenuPropGetItemLabel<TILE_MENU_ITEM> }) &
  // Breadcrumbs
  (BREADCRUMBS_ITEM extends { label: HeaderDefaultBreadcrumbsItem['label'] | unknown }
    ? {}
    : { getBreadcrumbsItemLabel: BreadcrumbsPropGetItemLabel<BREADCRUMBS_ITEM> }) &
  // SecondaryMenu
  (SECONDARY_MENU_ITEM extends { label: HeaderDefaultSelectMenuItem['label'] | unknown }
    ? {}
    : { getSecondaryMenuItemLabel: SelectMenuPropGetItemLabel<SECONDARY_MENU_ITEM> }) &
  // SocialMedia
  (SOCIAL_MEDIA_ITEM extends { label: HeaderDefaultSocialMediaItem['label'] | unknown }
    ? {}
    : { getSocialMediaItemLabel: ButtonMenuPropGetItemLabel<SOCIAL_MEDIA_ITEM> }) &
  (SOCIAL_MEDIA_ITEM extends { icon: HeaderDefaultSocialMediaItem['icon'] | unknown }
    ? {}
    : { getSocialMediaItemIcon: ButtonMenuPropGetItemIcon<SOCIAL_MEDIA_ITEM> }) &
  (LANGUAGES_ITEM extends { label: HeaderDefaultLanguagesItem['label'] | unknown }
    ? {}
    : { getLanguagesItemLabel: SelectMenuPropGetItemLabel<LANGUAGES_ITEM> }) &
  // AdditionalButtons
  (ADDITIONAL_BUTTONS_ITEM extends { label: HeaderDefaultAdditionalButtonsItem['label'] | unknown }
    ? {}
    : { getAdditionalButtonsItemLabel: ButtonMenuPropGetItemLabel<ADDITIONAL_BUTTONS_ITEM> })

export type HeaderComponent = <
  MENU_ITEM = MenuDefaultItem,
  NOTIFICATION_ITEM = HeaderDefaultNotificationItem,
  NOTIFICATION_GROUP = HeaderDefaultNotificationGroup,
  NOTIFICATION_ACTION = HeaderDefaultNotificationAction,
  NOTIFICATION_GROUP_BY_DAY extends boolean = false,
  TILE_MENU_ITEM = HeaderDefaultTileMenuItem,
  BREADCRUMBS_ITEM = HeaderDefaultBreadcrumbsItem
>(
  props: HeaderProps<
    MENU_ITEM,
    NOTIFICATION_ITEM,
    NOTIFICATION_GROUP,
    NOTIFICATION_ACTION,
    NOTIFICATION_GROUP_BY_DAY,
    TILE_MENU_ITEM,
    BREADCRUMBS_ITEM
  >
) => React.ReactElement | null
