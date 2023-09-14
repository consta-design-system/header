import { IconComponent } from '@consta/icons/Icon';
import { Group } from '@consta/uikit/__internal__/src/utils/getGroups';
import { PropsWithHTMLAttributesAndRef } from '@consta/uikit/__internal__/src/utils/types/PropsWithHTMLAttributes';
import React from 'react';

export const navbarPropSize = ['s', 'm'] as const;
export type NavbarPropSize = (typeof navbarPropSize)[number];
export const defaultNavbarPropSize: NavbarPropSize = 'm';

export const navbarPropStatus = ['alert', 'success', 'warning'] as const;
export type NavbarPropStatus = (typeof navbarPropStatus)[number];

export type DefaultNavbarGroup = {
  id: string | number;
  label?: string;
  rightSide?: React.ReactNode;
};

export type DefaultNavbarItem = {
  label: React.ReactNode;
  status?: NavbarPropStatus;
  groupId?: string | number;
  icon?: IconComponent;
  rightSide?: React.ReactNode;
  active?: boolean;
};

export type NavbarPropOnItemClick<ITEM> = (
  item: ITEM,
  params: {
    e: React.MouseEvent;
  },
) => void;

// ITEMS

export type NavbarPropGetItemLabel<ITEM> = (item: ITEM) => React.ReactNode;

export type NavbarPropGetItemAdditionalClassName<ITEM> = (item: ITEM) => string;

export type NavbarPropGetItemDisabled<ITEM> = (
  item: ITEM,
) => boolean | undefined;

export type NavbarPropGetItemActive<ITEM> = (item: ITEM) => boolean | undefined;

export type NavbarPropGetItemChecked<ITEM> = (
  item: ITEM,
) => boolean | undefined;

export type NavbarPropGetItemStatus<ITEM> = (
  item: ITEM,
) => NavbarPropStatus | undefined;

export type NavbarPropGetItemGroupId<ITEM> = (
  item: ITEM,
) => string | number | undefined;

export type NavbarPropGetItemLeftSide<ITEM> = (
  item: ITEM,
) => React.ReactNode | undefined;

export type NavbarPropGetItemIcon<ITEM> = (
  item: ITEM,
) => IconComponent | undefined;

export type NavbarPropGetItemRightSide<ITEM> = (
  item: ITEM,
) => React.ReactNode | undefined;

export type NavbarPropGetItemRightIcon<ITEM> = (
  item: ITEM,
) => IconComponent | undefined;

export type NavbarPropGetItemAs<ITEM> = (
  item: ITEM,
) => keyof JSX.IntrinsicElements | undefined;

export type NavbarPropGetItemAttributes<ITEM> = (
  item: ITEM,
) => JSX.IntrinsicElements[keyof JSX.IntrinsicElements] | undefined;

export type NavbarPropSortGroup<ITEM, GROUP> = (
  a: Group<ITEM, GROUP>,
  b: Group<ITEM, GROUP>,
) => number;

// GROUPS
export type NavbarPropGetGroupKey<GROUP> = (item: GROUP) => string | number;
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

export type NavbarPropGetItemSubMenu<ITEM> = (item: ITEM) => ITEM[] | undefined;

export type NavbarProps<
  ITEM = DefaultNavbarItem,
  GROUP = DefaultNavbarGroup,
> = PropsWithHTMLAttributesAndRef<
  {
    size?: NavbarPropSize;
    items: ITEM[];
    onItemClick?: NavbarPropOnItemClick<ITEM>;
    getItemLabel?: NavbarPropGetItemLabel<ITEM>;
    getItemIcon?: NavbarPropGetItemIcon<ITEM>;
    getItemActive?: NavbarPropGetItemActive<ITEM>;
    getItemRightSide?: NavbarPropGetItemRightSide<ITEM>;
    getItemGroupKey?: NavbarPropGetItemGroupId<ITEM>;
    getItemStatus?: NavbarPropGetItemStatus<ITEM>;
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

export type NavbarItemProps<ITEM = DefaultNavbarItem> =
  PropsWithHTMLAttributesAndRef<
    {
      size?: NavbarPropSize;
      item: ITEM;
      onItemClick?: NavbarPropOnItemClick<ITEM>;
      getItemLabel: NavbarPropGetItemLabel<ITEM>;
      getItemIcon?: NavbarPropGetItemIcon<ITEM>;
      getItemActive?: NavbarPropGetItemActive<ITEM>;
      getItemRightSide?: NavbarPropGetItemRightSide<ITEM>;
      getItemStatus?: NavbarPropGetItemStatus<ITEM>;
      getItemAs?: NavbarPropGetItemAs<ITEM>;
      getItemAttributes?: NavbarPropGetItemAttributes<ITEM>;
      getItemRef?: NavbarPropGetItemRef<ITEM>;
      getItemSubMenu?: NavbarPropGetItemSubMenu<ITEM>;
      getItemAdditionalClassName?: NavbarPropGetItemAdditionalClassName<ITEM>;
      level?: number;
    },
    HTMLDivElement
  >;

export type NavbarItemComponent = <ITEM = DefaultNavbarItem>(
  props: NavbarItemProps<ITEM>,
) => React.ReactElement | null;
