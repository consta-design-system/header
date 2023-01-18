import { PropsWithAsAttributes } from '@consta/uikit/__internal__/src/utils/types/PropsWithAsAttributes';
import React from 'react';

import { PropsWithHTMLAttributesAndRef } from '##/utils/types/PropsWithHTMLAttributes';

export type BannerBarDefaultItem = {
  onClick?: React.MouseEventHandler;
  label: string;
  description?: string;
  image?: string;
  as?: keyof JSX.IntrinsicElements;
  attributes?: JSX.IntrinsicElements[keyof JSX.IntrinsicElements];
};

export type BannerBarPropView = 'vertical' | 'horizontal';

export type BannerBarPropGetItemLabel<ITEM> = (item: ITEM) => string;
export type BannerBarPropGetItemDescription<ITEM> = (
  item: ITEM,
) => string | undefined;
export type BannerBarPropGetItemImage<ITEM> = (
  item: ITEM,
) => string | undefined;
export type BannerBarPropGetItemOnClick<ITEM> = (
  item: ITEM,
) => React.MouseEventHandler | undefined;
export type BannerBarPropGetItemAs<ITEM> = (
  item: ITEM,
) => keyof JSX.IntrinsicElements | undefined;
export type BannerBarPropGetItemAttributes<ITEM> = (
  item: ITEM,
) => JSX.IntrinsicElements[keyof JSX.IntrinsicElements] | undefined;

export type BannerBarPropOnItemClick<ITEM> = (params: {
  e: React.MouseEvent;
  item: ITEM;
}) => void;

export type BannerBarProps<ITEM = BannerBarDefaultItem> =
  PropsWithHTMLAttributesAndRef<
    {
      items: ITEM[];
      getItemLabel?: BannerBarPropGetItemLabel<ITEM>;
      getItemDescription?: BannerBarPropGetItemDescription<ITEM>;
      getItemImage?: BannerBarPropGetItemImage<ITEM>;
      getItemOnClick?: BannerBarPropGetItemOnClick<ITEM>;
      getItemAs?: BannerBarPropGetItemAs<ITEM>;
      getItemAttributes?: BannerBarPropGetItemAttributes<ITEM>;
      onItemClick?: BannerBarPropOnItemClick<ITEM>;
      view?: BannerBarPropView;
    },
    HTMLDivElement
  >;

export type BannerBarComponent = <ITEM = BannerBarDefaultItem>(
  props: BannerBarProps<ITEM>,
  ref: React.Ref<HTMLDivElement>,
) => React.ReactElement | null;

export type BannerBarItemProps<AS extends keyof JSX.IntrinsicElements = 'div'> =
  PropsWithAsAttributes<
    {
      label: string;
      description?: string;
      image?: string;
      onClick?: React.MouseEventHandler;
      view?: BannerBarPropView;
    },
    AS
  >;

export type BannerBarItemComponent = <
  AS extends keyof JSX.IntrinsicElements = 'div',
>(
  props: BannerBarItemProps<AS>,
  ref: React.Ref<HTMLElement>,
) => React.ReactElement | null;
