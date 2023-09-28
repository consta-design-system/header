import {
  AsAttributes,
  AsTags,
} from '@consta/uikit/__internal__/src/utils/types/AsTags';
import { PropsWithAsAttributes } from '@consta/uikit/__internal__/src/utils/types/PropsWithAsAttributes';
import React from 'react';

import { PropsWithHTMLAttributesAndRef } from '##/utils/types/PropsWithHTMLAttributes';

export type MegaMenuGlobalDefaultItem = {
  as?: AsTags;
  attributes?: AsAttributes;
  onClick?: React.MouseEventHandler;
  label: string;
  groupId?: string | number;
};

export type MegaMenuGlobalDefaultGroup = {
  label: string;
  id?: string | number;
  onClick?: React.MouseEventHandler;
};

export type MegaMenuGlobalPropGetItemAs<ITEM> = (
  item: ITEM,
) => AsTags | undefined;
export type MegaMenuGlobalPropGetItemAttributes<ITEM> = (
  item: ITEM,
) => AsAttributes | undefined;
export type MegaMenuGlobalPropGetItemOnClick<ITEM> = (
  item: ITEM,
) => React.MouseEventHandler | undefined;
export type MegaMenuGlobalPropGetItemLabel<ITEM> = (item: ITEM) => string;
export type MegaMenuGlobalPropGetItemGroupId<ITEM> = (
  item: ITEM,
) => string | number | undefined;

export type MegaMenuGlobalPropGetGroupId<ITEM> = (
  item: ITEM,
) => number | string | undefined;
export type MegaMenuGlobalPropGetGroupLabel<ITEM> = (item: ITEM) => string;
export type MegaMenuGlobalPropGetGroupOnClick<ITEM> = (
  item: ITEM,
) => React.MouseEventHandler | undefined;

export type MegaMenuGlobalPropOnItemClick<ITEM> = (params: {
  e: React.MouseEvent;
  item: ITEM;
}) => void;

export type MegaMenuGlobalPropOnGroupClick<GROUP> = (params: {
  e: React.MouseEvent;
  group: GROUP;
}) => void;

export type MappersItem<ITEM = MegaMenuGlobalDefaultItem> = {
  getItemLabel?: MegaMenuGlobalPropGetItemLabel<ITEM>;
  getItemAs?: MegaMenuGlobalPropGetItemAs<ITEM>;
  getItemGroupId?: MegaMenuGlobalPropGetItemGroupId<ITEM>;
  getItemAttributes?: MegaMenuGlobalPropGetItemAttributes<ITEM>;
  getItemOnClick?: MegaMenuGlobalPropGetItemOnClick<ITEM>;
};

export type MegaMenuGlobalProps<
  ITEM = MegaMenuGlobalDefaultItem,
  GROUP = MegaMenuGlobalDefaultGroup,
> = PropsWithHTMLAttributesAndRef<
  {
    items: ITEM[];
    groups?: GROUP[];
    getGroupKey?: MegaMenuGlobalPropGetGroupId<GROUP>;
    getGroupLabel?: MegaMenuGlobalPropGetGroupLabel<GROUP>;
    getGroupOnClick?: MegaMenuGlobalPropGetGroupOnClick<GROUP>;
    maxElements?: number;
    onGroupClick?: MegaMenuGlobalPropOnGroupClick<GROUP>;
    onItemClick?: MegaMenuGlobalPropOnItemClick<ITEM>;
    columns?: number;
    title?: string;
    showButtonText?: string;
    hideButtonText?: string;
  } & MappersItem<ITEM> &
    (ITEM extends { label: string }
      ? {}
      : {
          getItemLabel: MegaMenuGlobalPropGetItemLabel<ITEM>;
        }) &
    (GROUP extends { label: string | unknown }
      ? {}
      : {
          getGroupLabel: MegaMenuGlobalPropGetGroupLabel<GROUP>;
        }),
  HTMLDivElement
>;

export type MegaMenuGlobalComponent = <
  ITEM = MegaMenuGlobalDefaultItem,
  GROUP = MegaMenuGlobalDefaultGroup,
>(
  props: MegaMenuGlobalProps<ITEM, GROUP>,
  ref: React.Ref<HTMLDivElement>,
) => React.ReactElement | null;

export type MegaMenuGlobalGroupProps<ITEM = MegaMenuGlobalDefaultItem> =
  PropsWithHTMLAttributesAndRef<
    {
      items: ITEM[];
      title?: string;
      maxElements?: number;
      onItemClick?: MegaMenuGlobalPropOnItemClick<ITEM>;
      showButtonText?: string;
      hideButtonText?: string;
    } & Required<MappersItem<ITEM>>,
    HTMLDivElement
  >;

export type MegaMenuGlobalGroupComponent = <ITEM = MegaMenuGlobalDefaultItem>(
  props: MegaMenuGlobalGroupProps<ITEM>,
  ref: React.Ref<HTMLDivElement>,
) => React.ReactElement | null;

export type MegaMenuGlobalItemProps<AS extends AsTags = 'div'> =
  PropsWithAsAttributes<
    {
      label: string;
      onClick?: React.MouseEventHandler;
    },
    AS
  >;

export type MegaMenuGlobalItemComponent = <AS extends AsTags = 'div'>(
  props: MegaMenuGlobalItemProps<AS>,
  ref: React.Ref<HTMLElement>,
) => React.ReactElement | null;
