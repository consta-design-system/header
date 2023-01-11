import { PropsWithAsAttributes } from '@consta/uikit/__internal__/src/utils/types/PropsWithAsAttributes';
import React from 'react';

import { PropsWithHTMLAttributesAndRef } from '##/utils/types/PropsWithHTMLAttributes';

export type GlobalMenuDefaultItem = {
  as?: keyof JSX.IntrinsicElements;
  attributes?: JSX.IntrinsicElements[keyof JSX.IntrinsicElements];
  onClick?: React.MouseEventHandler;
  label: string;
  groupId?: string | number;
};

export type GlobalMenuDefaultGroup = {
  label: string;
  id?: string | number;
};

export type GlobalMenuPropGetItemAs<ITEM> = (
  item: ITEM,
) => keyof JSX.IntrinsicElements | undefined;
export type GlobalMenuPropGetItemAttributes<ITEM> = (
  item: ITEM,
) => JSX.IntrinsicElements[keyof JSX.IntrinsicElements] | undefined;
export type GlobalMenuPropGetItemOnClick<ITEM> = (
  item: ITEM,
) => React.MouseEventHandler | undefined;
export type GlobalMenuPropGetItemLabel<ITEM> = (item: ITEM) => string;
export type GlobalMenuPropGetItemGroupId<ITEM> = (
  item: ITEM,
) => string | number | undefined;

export type GlobalMenuPropGetGroupId<ITEM> = (
  item: ITEM,
) => number | string | undefined;
export type GlobalMenuPropGetGroupLabel<ITEM> = (item: ITEM) => string;

export type GlobalMenuPropOnItemClick<ITEM> = (params: {
  e: React.MouseEvent;
  item: ITEM;
}) => void;

export type MappersItem<ITEM = GlobalMenuDefaultItem> = {
  getItemLabel?: GlobalMenuPropGetItemLabel<ITEM>;
  getItemAs?: GlobalMenuPropGetItemAs<ITEM>;
  getItemGroupId?: GlobalMenuPropGetItemGroupId<ITEM>;
  getItemAttributes?: GlobalMenuPropGetItemAttributes<ITEM>;
  getItemOnClick?: GlobalMenuPropGetItemOnClick<ITEM>;
};

export type GlobalMenuProps<
  ITEM = GlobalMenuDefaultItem,
  GROUP = GlobalMenuDefaultGroup,
> = PropsWithHTMLAttributesAndRef<
  {
    items: ITEM[];
    groups?: GROUP[];
    getGroupKey?: GlobalMenuPropGetGroupId<GROUP>;
    getGroupLabel?: GlobalMenuPropGetGroupLabel<GROUP>;
    maxElements?: number;
    onItemClick?: GlobalMenuPropOnItemClick<ITEM>;
    columns?: number;
    title?: string;
    showButtonText?: string;
    hideButtonText?: string;
  } & MappersItem<ITEM> &
    (ITEM extends { label: string }
      ? {}
      : {
          getItemLabel: GlobalMenuPropGetItemLabel<ITEM>;
        }) &
    (GROUP extends { label: string | unknown }
      ? {}
      : {
          getGroupLabel: GlobalMenuPropGetGroupLabel<GROUP>;
        }),
  HTMLDivElement
>;

export type GlobalMenuComponent = <
  ITEM = GlobalMenuDefaultItem,
  GROUP = GlobalMenuDefaultGroup,
>(
  props: GlobalMenuProps<ITEM, GROUP>,
  ref: React.Ref<HTMLDivElement>,
) => React.ReactElement | null;

export type GlobalMenuGroupProps<ITEM = GlobalMenuDefaultItem> =
  PropsWithHTMLAttributesAndRef<
    {
      items: ITEM[];
      title?: string;
      maxElements?: number;
      onItemClick?: GlobalMenuPropOnItemClick<ITEM>;
      showButtonText?: string;
      hideButtonText?: string;
    } & Required<MappersItem<ITEM>>,
    HTMLDivElement
  >;

export type GlobalMenuGroupComponent = <ITEM = GlobalMenuDefaultItem>(
  props: GlobalMenuGroupProps<ITEM>,
  ref: React.Ref<HTMLDivElement>,
) => React.ReactElement | null;

export type GlobalMenuItemProps<
  AS extends keyof JSX.IntrinsicElements = 'div',
> = PropsWithAsAttributes<
  {
    label: string;
    onClick?: React.MouseEventHandler;
  },
  AS
>;

export type GlobalMenuItemComponent = <
  AS extends keyof JSX.IntrinsicElements = 'div',
>(
  props: GlobalMenuItemProps<AS>,
  ref: React.Ref<HTMLElement>,
) => React.ReactElement | null;
