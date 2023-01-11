import { PropsWithAsAttributes } from '@consta/uikit/__internal__/src/utils/types/PropsWithAsAttributes';
import { IconComponent } from '@consta/uikit/Icon';
import React from 'react';

import { PropsWithHTMLAttributesAndRef } from '##/utils/types/PropsWithHTMLAttributes';

export type NavBarDefaultItem = {
  label: string;
  iconLeft?: IconComponent;
  iconRight?: IconComponent;
  active?: boolean;
  as?: keyof JSX.IntrinsicElements;
  attributes?: JSX.IntrinsicElements[keyof JSX.IntrinsicElements];
  onClick?: React.MouseEventHandler;
};

export type NavBarPropGetItemLabel<ITEM> = (item: ITEM) => string;
export type NavBarPropGetItemIconLeft<ITEM> = (
  item: ITEM,
) => IconComponent | undefined;
export type NavBarPropGetItemIconRight<ITEM> = (
  item: ITEM,
) => IconComponent | undefined;
export type NavBarPropGetItemActive<ITEM> = (item: ITEM) => boolean | undefined;
export type NavBarPropGetItemOnClick<ITEM> = (
  item: ITEM,
) => React.MouseEventHandler | undefined;
export type NavBarPropGetItemAs<ITEM> = (
  item: ITEM,
) => keyof JSX.IntrinsicElements | undefined;
export type NavBarPropGetItemAttributes<ITEM> = (
  item: ITEM,
) => JSX.IntrinsicElements[keyof JSX.IntrinsicElements] | undefined;

export type NavBarPropOnItemClick<ITEM> = (params: {
  e: React.MouseEvent;
  item: ITEM;
}) => void;

export type NavBarProps<ITEM = NavBarDefaultItem> =
  PropsWithHTMLAttributesAndRef<
    {
      items: ITEM[];
      getItemLabel?: NavBarPropGetItemLabel<ITEM>;
      getItemActive?: NavBarPropGetItemActive<ITEM>;
      getItemOnClick?: NavBarPropGetItemOnClick<ITEM>;
      getItemIconLeft?: NavBarPropGetItemIconLeft<ITEM>;
      getItemIconRight?: NavBarPropGetItemIconRight<ITEM>;
      getItemAs?: NavBarPropGetItemAs<ITEM>;
      getItemAttributes?: NavBarPropGetItemAttributes<ITEM>;
      onItemClick?: NavBarPropOnItemClick<ITEM>;
    } & (ITEM extends { label: string }
      ? {}
      : {
          getItemLabel: NavBarPropGetItemLabel<ITEM>;
        }),
    HTMLDivElement
  >;

export type NavBarComponent = <ITEM = NavBarDefaultItem>(
  props: NavBarProps<ITEM>,
  ref: React.Ref<HTMLDivElement>,
) => React.ReactElement | null;

export type NavBarItemProps<AS extends keyof JSX.IntrinsicElements = 'div'> =
  PropsWithAsAttributes<
    {
      label: string;
      active?: boolean;
      onClick?: React.MouseEventHandler;
      iconLeft?: IconComponent;
      iconRight?: IconComponent;
    },
    AS
  >;

export type NavBarItemComponent = <
  AS extends keyof JSX.IntrinsicElements = 'div',
>(
  props: NavBarItemProps<AS>,
  ref: React.Ref<HTMLElement>,
) => React.ReactElement | null;
