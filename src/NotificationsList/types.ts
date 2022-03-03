import { BadgePropStatus } from '@consta/uikit/Badge'
import { IconProps } from '@consta/uikit/Icon'

import { PropsWithHTMLAttributesAndRef } from '@/__private__/utils/types/PropsWithHTMLAttributes'

export type NotificationsDefaultAction = {
  label: string
  onClick?: React.EventHandler<React.MouseEvent>
  icon?: React.FC<IconProps>
}

export type Badge = {
  label: string
  status?: BadgePropStatus
}

export type NotificationsDefaultGroup = {
  label: string
  id: string
}

export type NotificationsDefaultItem = {
  label: string
  description?: string
  image?: string
  read?: boolean
  date?: Date
  badges?: Badge[]
  actions?: NotificationsDefaultAction[]
  onClick?: React.EventHandler<React.MouseEvent>
  group?: string
  view?: 'default' | 'user'
}

export type NotificationsListPropGetItemLabel<ITEM> = (item: ITEM) => string
export type NotificationsListPropGetItemDescription<ITEM> = (item: ITEM) => string | undefined
export type NotificationsListPropGetItemImage<ITEM> = (item: ITEM) => string | undefined
export type NotificationsListPropGetItemRead<ITEM> = (item: ITEM) => boolean | undefined
export type NotificationsListPropGetItemDate<ITEM> = (item: ITEM) => Date | undefined
export type NotificationsListPropGetItemBadges<ITEM> = (item: ITEM) => Badge[] | undefined
export type NotificationsListPropGetItemActions<ITEM> = (
  item: ITEM
) => NotificationsDefaultAction[] | undefined
export type NotificationsListPropGetItemGroup<ITEM> = (item: ITEM) => string | undefined
export type NotificationsListPropGetItemView<ITEM> = (item: ITEM) => 'default' | 'user' | undefined
export type NotificationsListPropItemDateFormat = (date: Date) => string

export type NotificationsListPropGetActionLabel<ACTION> = (action: ACTION) => string
export type NotificationsListPropGetActionIcon<ACTION> = (
  action: ACTION
) => React.FC<IconProps> | undefined
export type NotificationsListPropGetActionOnClick<ACTION> = (
  action: ACTION
) => React.EventHandler<React.MouseEvent> | undefined

export type NotificationsListPropGetGroupLabel<GROUP> = (group: GROUP) => string
export type NotificationsListPropGetGroupId<GROUP> = (group: GROUP) => string | number

export type NotificationsListPropGroupLabelFormat<GROUP_BY_DAY> = GROUP_BY_DAY extends true
  ? (timestamp: number) => string
  : never

export type Props<ITEM, GROUP, ACTION, GROUP_BY_DAY extends boolean> = {
  children?: never
  items: ITEM[]
  itemDateFormat?: NotificationsListPropItemDateFormat
  title?: string
  actions?: ACTION[]
  getItemLabel?: NotificationsListPropGetItemLabel<ITEM>
  getItemDescription?: NotificationsListPropGetItemDescription<ITEM>
  getItemImage?: NotificationsListPropGetItemImage<ITEM>
  getItemRead?: NotificationsListPropGetItemRead<ITEM>
  getItemDate?: NotificationsListPropGetItemDate<ITEM>
  getItemBadges?: NotificationsListPropGetItemBadges<ITEM>
  getItemActions?: NotificationsListPropGetItemActions<ITEM>
  getItemGroup?: NotificationsListPropGetItemGroup<ITEM>
  getItemView?: NotificationsListPropGetItemView<ITEM>
  getActionLabel?: NotificationsListPropGetActionLabel<ACTION>
  getActionIcon?: NotificationsListPropGetActionIcon<ACTION>
  getActionOnClick?: NotificationsListPropGetActionOnClick<ACTION>
  getGroupLabel?: NotificationsListPropGetGroupLabel<GROUP>
  getGroupId?: NotificationsListPropGetGroupId<GROUP>
  groupByDay?: GROUP_BY_DAY
  groupLabelFormat?: NotificationsListPropGroupLabelFormat<GROUP_BY_DAY>
  groups?: GROUP_BY_DAY extends true ? never : GROUP[]
  onClose?: React.EventHandler<React.MouseEvent>
} & (ACTION extends { label: NotificationsDefaultAction['label'] }
  ? {}
  : { getActionLabel: NotificationsListPropGetItemActions<ACTION> }) &
  (GROUP extends { label: NotificationsDefaultGroup['label'] }
    ? {}
    : { getGroupLabel: NotificationsListPropGetGroupLabel<GROUP> }) &
  (GROUP extends { id: NotificationsDefaultGroup['id'] }
    ? {}
    : { getGroupId: NotificationsListPropGetGroupId<GROUP> }) &
  (ITEM extends { label: NotificationsDefaultItem['label'] }
    ? {}
    : { getItemLabel: NotificationsListPropGetItemLabel<ITEM> })

export type NotificationsListProps<
  ITEM = NotificationsDefaultItem,
  GROUP = NotificationsDefaultGroup,
  ACTION = NotificationsDefaultAction,
  GROUP_BY_DAY extends boolean = false
> = PropsWithHTMLAttributesAndRef<Props<ITEM, GROUP, ACTION, GROUP_BY_DAY>, HTMLDivElement>

export type NotificationsListComponent = <
  ITEM = NotificationsDefaultItem,
  GROUP = NotificationsDefaultGroup,
  ACTION = NotificationsDefaultAction,
  GROUP_BY_DAY extends boolean = false
>(
  props: NotificationsListProps<ITEM, GROUP, ACTION, GROUP_BY_DAY>
) => React.ReactElement | null
