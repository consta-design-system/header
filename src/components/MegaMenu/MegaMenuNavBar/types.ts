import { IconComponent } from '@consta/icons/Icon';
import { PropsWithAsAttributes } from '@consta/uikit/__internal__/src/utils/types/PropsWithAsAttributes';
import React from 'react';

import { PropsWithHTMLAttributesAndRef } from '##/utils/types/PropsWithHTMLAttributes';

export type MegaMenuNavBarDefaultItem = {
  label: string;
  iconLeft?: IconComponent;
  iconRight?: IconComponent;
  active?: boolean;
  as?: keyof JSX.IntrinsicElements;
  attributes?: JSX.IntrinsicElements[keyof JSX.IntrinsicElements];
  onClick?: React.MouseEventHandler;
};

export type MegaMenuNavBarPropGetItemLabel<ITEM> = (item: ITEM) => string;
export type MegaMenuNavBarPropGetItemIconLeft<ITEM> = (
  item: ITEM,
) => IconComponent | undefined;
export type MegaMenuNavBarPropGetItemIconRight<ITEM> = (
  item: ITEM,
) => IconComponent | undefined;
export type MegaMenuNavBarPropGetItemActive<ITEM> = (
  item: ITEM,
) => boolean | undefined;
export type MegaMenuNavBarPropGetItemOnClick<ITEM> = (
  item: ITEM,
) => React.MouseEventHandler | undefined;
export type MegaMenuNavBarPropGetItemAs<ITEM> = (
  item: ITEM,
) => keyof JSX.IntrinsicElements | undefined;
export type MegaMenuNavBarPropGetItemAttributes<ITEM> = (
  item: ITEM,
) => JSX.IntrinsicElements[keyof JSX.IntrinsicElements] | undefined;

export type MegaMenuNavBarPropOnItemClick<ITEM> = (params: {
  e: React.MouseEvent;
  item: ITEM;
}) => void;

export type MegaMenuNavBarProps<ITEM = MegaMenuNavBarDefaultItem> =
  PropsWithHTMLAttributesAndRef<
    {
      items: ITEM[];
      getItemLabel?: MegaMenuNavBarPropGetItemLabel<ITEM>;
      getItemActive?: MegaMenuNavBarPropGetItemActive<ITEM>;
      getItemOnClick?: MegaMenuNavBarPropGetItemOnClick<ITEM>;
      getItemIconLeft?: MegaMenuNavBarPropGetItemIconLeft<ITEM>;
      getItemIconRight?: MegaMenuNavBarPropGetItemIconRight<ITEM>;
      getItemAs?: MegaMenuNavBarPropGetItemAs<ITEM>;
      getItemAttributes?: MegaMenuNavBarPropGetItemAttributes<ITEM>;
      onItemClick?: MegaMenuNavBarPropOnItemClick<ITEM>;
    } & (ITEM extends { label: string }
      ? {}
      : {
          getItemLabel: MegaMenuNavBarPropGetItemLabel<ITEM>;
        }),
    HTMLDivElement
  >;

export type MegaMenuNavBarComponent = <ITEM = MegaMenuNavBarDefaultItem>(
  props: MegaMenuNavBarProps<ITEM>,
  ref: React.Ref<HTMLDivElement>,
) => React.ReactElement | null;

export type MegaMenuNavBarItemProps<
  AS extends keyof JSX.IntrinsicElements = 'div',
> = PropsWithAsAttributes<
  {
    label: string;
    active?: boolean;
    onClick?: React.MouseEventHandler;
    iconLeft?: IconComponent;
    iconRight?: IconComponent;
  },
  AS
>;

export type MegaMenuNavBarItemComponent = <
  AS extends keyof JSX.IntrinsicElements = 'div',
>(
  props: MegaMenuNavBarItemProps<AS>,
  ref: React.Ref<HTMLElement>,
) => React.ReactElement | null;
