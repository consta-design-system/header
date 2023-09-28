import { AsTags } from '@consta/uikit/__internal__/src/utils/types/AsTags';
import { PropsWithAsAttributes } from '@consta/uikit/__internal__/src/utils/types/PropsWithAsAttributes';
import React from 'react';

import { PropsWithHTMLAttributesAndRef } from '##/utils/types/PropsWithHTMLAttributes';

export type MegaMenuBannerBarDefaultItem = {
  onClick?: React.MouseEventHandler;
  label: string;
  description?: string;
  image?: string;
  as?: AsTags;
  attributes?: JSX.IntrinsicElements[AsTags];
};

export type MegaMenuBannerBarPropView = 'vertical' | 'horizontal';

export type MegaMenuBannerBarPropGetItemLabel<ITEM> = (item: ITEM) => string;
export type MegaMenuBannerBarPropGetItemDescription<ITEM> = (
  item: ITEM,
) => string | undefined;
export type MegaMenuBannerBarPropGetItemImage<ITEM> = (
  item: ITEM,
) => string | undefined;
export type MegaMenuBannerBarPropGetItemOnClick<ITEM> = (
  item: ITEM,
) => React.MouseEventHandler | undefined;
export type MegaMenuBannerBarPropGetItemAs<ITEM> = (
  item: ITEM,
) => AsTags | undefined;
export type MegaMenuBannerBarPropGetItemAttributes<ITEM> = (
  item: ITEM,
) => JSX.IntrinsicElements[AsTags] | undefined;

export type MegaMenuBannerBarPropOnItemClick<ITEM> = (params: {
  e: React.MouseEvent;
  item: ITEM;
}) => void;

export type MegaMenuBannerBarProps<ITEM = MegaMenuBannerBarDefaultItem> =
  PropsWithHTMLAttributesAndRef<
    {
      items: ITEM[];
      getItemLabel?: MegaMenuBannerBarPropGetItemLabel<ITEM>;
      getItemDescription?: MegaMenuBannerBarPropGetItemDescription<ITEM>;
      getItemImage?: MegaMenuBannerBarPropGetItemImage<ITEM>;
      getItemOnClick?: MegaMenuBannerBarPropGetItemOnClick<ITEM>;
      getItemAs?: MegaMenuBannerBarPropGetItemAs<ITEM>;
      getItemAttributes?: MegaMenuBannerBarPropGetItemAttributes<ITEM>;
      onItemClick?: MegaMenuBannerBarPropOnItemClick<ITEM>;
      view?: MegaMenuBannerBarPropView;
    },
    HTMLDivElement
  >;

export type MegaMenuBannerBarComponent = <ITEM = MegaMenuBannerBarDefaultItem>(
  props: MegaMenuBannerBarProps<ITEM>,
  ref: React.Ref<HTMLDivElement>,
) => React.ReactElement | null;

export type MegaMenuBannerBarItemProps<AS extends AsTags = 'div'> =
  PropsWithAsAttributes<
    {
      label: string;
      description?: string;
      image?: string;
      onClick?: React.MouseEventHandler;
      view?: MegaMenuBannerBarPropView;
    },
    AS
  >;

export type MegaMenuBannerBarItemComponent = <AS extends AsTags = 'div'>(
  props: MegaMenuBannerBarItemProps<AS>,
  ref: React.Ref<HTMLElement>,
) => React.ReactElement | null;
