import { IconComponent } from '@consta/icons/Icon';
import { Group } from '@consta/uikit/__internal__/src/utils/getGroups';
import {
  AsAttributes,
  AsTags,
} from '@consta/uikit/__internal__/src/utils/types/AsTags';
import { PropsWithHTMLAttributesAndRef } from '@consta/uikit/__internal__/src/utils/types/PropsWithHTMLAttributes';
import { BadgePropStatus } from '@consta/uikit/Badge';
import { TooltipProps } from '@consta/uikit/Tooltip';
import React from 'react';

export const navbarPropSize = ['s', 'm'] as const;
export type NavbarPropSize = (typeof navbarPropSize)[number];
export const defaultNavbarPropSize: NavbarPropSize = 'm';

export const navbarPropForm = ['default', 'brick', 'round'] as const;
export type NavbarPropForm = (typeof navbarPropForm)[number];
export const defaultNavbarPropForm = navbarPropForm[0];

export type DefaultNavbarGroup = {
  id: string | number;
  label?: string;
  rightSide?: React.ReactNode;
};

export type DefaultNavbarItem = {
  label: string;
  status?: BadgePropStatus;
  groupId?: string | number;
  icon?: IconComponent;
  rightSide?: React.ReactNode;
  active?: boolean;
  subMenu?: DefaultNavbarItem[];
};

export type DefaultNavbarRailItem = {
  label: string;
  icon: IconComponent;
  status?: BadgePropStatus;
  active?: boolean;
  tooltip?: React.ReactNode;
};

export type NavbarPropOnItemClick<ITEM> = (
  item: ITEM,
  params: {
    e: React.MouseEvent;
  },
) => void;

// ITEMS

export type NavbarPropGetItemLabel<ITEM> = (item: ITEM) => string;
export type NavbarRailPropGetItemLabel<ITEM> = (
  item: ITEM,
) => string | undefined;

export type NavbarPropGetItemAdditionalClassName<ITEM> = (item: ITEM) => string;

export type NavbarPropGetItemDisabled<ITEM> = (
  item: ITEM,
) => boolean | undefined;

export type NavbarPropGetItemActive<ITEM> = (item: ITEM) => boolean | undefined;

export type NavbarPropGetItemGroupId<ITEM> = (
  item: ITEM,
) => string | number | undefined;

export type NavbarPropGetItemLeftSide<ITEM> = (
  item: ITEM,
) => React.ReactNode | undefined;

export type NavbarPropGetItemIcon<ITEM> = (
  item: ITEM,
) => IconComponent | undefined;

export type NavbarRailPropGetItemIcon<ITEM> = (item: ITEM) => IconComponent;

export type NavbarPropGetItemRightSide<ITEM> = (
  item: ITEM,
) => React.ReactNode | undefined;

export type NavbarPropGetItemRightIcon<ITEM> = (
  item: ITEM,
) => IconComponent | undefined;

export type NavbarPropGetItemAs<ITEM> = (item: ITEM) => AsTags | undefined;

export type NavbarPropGetItemAttributes<ITEM> = (
  item: ITEM,
) => AsAttributes | undefined;

export type NavbarPropSortGroup<ITEM, GROUP> = (
  a: Group<ITEM, GROUP>,
  b: Group<ITEM, GROUP>,
) => number;

// GROUPS
export type NavbarPropGetGroupKey<GROUP> = (
  item: GROUP,
) => string | number | undefined;

export type NavbarPropGetGroupAdditionalClassName<GROUP> = (
  item: GROUP,
) => string;

export type NavbarPropGetGroupLabel<GROUP> = (
  item: GROUP,
) => string | undefined;
export type NavbarPropGetGroupRightSide<GROUP> = (
  item: GROUP,
) => React.ReactNode | undefined;

export type NavbarPropGetItemRef<ITEM> = (
  item: ITEM,
) => React.RefObject<HTMLElement> | undefined;

export type NavbarPropGetItemStatus<ITEM> = (
  item: ITEM,
) => BadgePropStatus | undefined;

export type NavbarPropGetItemSubMenu<ITEM> = (item: ITEM) => ITEM[] | undefined;
export type NavbarRailPropGetItemTooltip<ITEM> = (
  item: ITEM,
) => React.ReactNode | undefined;

export type NavbarProps<
  ITEM = DefaultNavbarItem,
  GROUP = DefaultNavbarGroup,
> = PropsWithHTMLAttributesAndRef<
  {
    items: ITEM[];
    size?: NavbarPropSize;
    form?: NavbarPropForm;
    onItemClick?: NavbarPropOnItemClick<ITEM>;
    getItemLabel?: NavbarPropGetItemLabel<ITEM>;
    getItemIcon?: NavbarPropGetItemIcon<ITEM>;
    getItemActive?: NavbarPropGetItemActive<ITEM>;
    getItemRightSide?: NavbarPropGetItemRightSide<ITEM>;
    getItemStatus?: NavbarPropGetItemStatus<ITEM>;
    getItemGroupKey?: NavbarPropGetItemGroupId<ITEM>;
    getItemAs?: NavbarPropGetItemAs<ITEM>;
    getItemAttributes?: NavbarPropGetItemAttributes<ITEM>;
    getItemRef?: NavbarPropGetItemRef<ITEM>;
    getItemSubMenu?: NavbarPropGetItemSubMenu<ITEM>;
    getItemAdditionalClassName?: NavbarPropGetItemAdditionalClassName<ITEM>;
    groups?: GROUP[];
    getGroupKey?: NavbarPropGetGroupKey<GROUP>;
    getGroupLabel?: NavbarPropGetGroupLabel<GROUP>;
    getGroupRightSide?: NavbarPropGetGroupRightSide<GROUP>;
    sortGroup?: NavbarPropSortGroup<ITEM, GROUP>;
    getGroupAdditionalClassName?: NavbarPropGetGroupAdditionalClassName<GROUP>;
  },
  HTMLDivElement
> &
  (ITEM extends { label: DefaultNavbarItem['label'] }
    ? {}
    : { getItemLabel: NavbarPropGetItemLabel<ITEM> }) &
  (GROUP extends { id: DefaultNavbarGroup['id'] }
    ? {}
    : { getGroupKey: NavbarPropGetGroupKey<GROUP> });

export type NavbarComponent = <
  ITEM = DefaultNavbarItem,
  GROUP = DefaultNavbarGroup,
>(
  props: NavbarProps<ITEM, GROUP>,
) => React.ReactElement | null;

export type NavbarRailProps<ITEM = DefaultNavbarRailItem> =
  PropsWithHTMLAttributesAndRef<
    {
      items: ITEM[];
      size?: NavbarPropSize;
      form?: NavbarPropForm;
      onItemClick?: NavbarPropOnItemClick<ITEM>;
      getItemLabel?: NavbarRailPropGetItemLabel<ITEM>;
      getItemIcon?: NavbarRailPropGetItemIcon<ITEM>;
      getItemActive?: NavbarPropGetItemActive<ITEM>;
      getItemStatus?: NavbarPropGetItemStatus<ITEM>;
      getItemAs?: NavbarPropGetItemAs<ITEM>;
      getItemAttributes?: NavbarPropGetItemAttributes<ITEM>;
      getItemRef?: NavbarPropGetItemRef<ITEM>;
      getItemAdditionalClassName?: NavbarPropGetItemAdditionalClassName<ITEM>;
      getItemTooltip?: NavbarRailPropGetItemTooltip<ITEM>;
      tooltipProps?: Omit<
        TooltipProps,
        'children' | 'position' | 'equalAnchorWidth' | 'anchorRef'
      >;
    },
    HTMLDivElement
  > &
    (ITEM extends { icon: DefaultNavbarRailItem['icon'] }
      ? {}
      : { getItemIcon: NavbarRailPropGetItemIcon<ITEM> });

export type NavbarRailComponent = <ITEM = DefaultNavbarRailItem>(
  props: NavbarRailProps<ITEM>,
) => React.ReactElement | null;

export type NavbarItemProps<ITEM = DefaultNavbarItem> =
  PropsWithHTMLAttributesAndRef<
    {
      size: NavbarPropSize;
      item: ITEM;
      form: NavbarPropForm;
      onItemClick: NavbarPropOnItemClick<ITEM> | undefined;
      getItemLabel: NavbarPropGetItemLabel<ITEM>;
      getItemIcon: NavbarPropGetItemIcon<ITEM>;
      getItemActive: NavbarPropGetItemActive<ITEM>;
      getItemRightSide: NavbarPropGetItemRightSide<ITEM>;
      getItemStatus: NavbarPropGetItemStatus<ITEM> | undefined;
      getItemAs: NavbarPropGetItemAs<ITEM> | undefined;
      getItemAttributes: NavbarPropGetItemAttributes<ITEM> | undefined;
      getItemRef: NavbarPropGetItemRef<ITEM> | undefined;
      getItemSubMenu: NavbarPropGetItemSubMenu<ITEM> | undefined;
      getItemAdditionalClassName:
        | NavbarPropGetItemAdditionalClassName<ITEM>
        | undefined;
      level: number;
    },
    HTMLDivElement
  >;

export type NavbarItemComponent = <ITEM = DefaultNavbarItem>(
  props: NavbarItemProps<ITEM>,
) => React.ReactElement | null;

export type NavbarRailItemProps = PropsWithHTMLAttributesAndRef<
  {
    size?: NavbarPropSize;
    form?: NavbarPropForm;
    icon?: IconComponent;
    active?: boolean;
    status?: BadgePropStatus;
    label?: string;
  },
  HTMLDivElement
>;
