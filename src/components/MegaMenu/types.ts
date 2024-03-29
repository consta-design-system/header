import { IconComponent } from '@consta/icons/Icon';
import {
  AsAttributes,
  AsTags,
} from '@consta/uikit/__internal__/src/utils/types/AsTags';
import React from 'react';

import { PropsWithHTMLAttributesAndRef } from '##/utils/types/PropsWithHTMLAttributes';

import {
  MegaMenuBannerBarDefaultItem,
  MegaMenuBannerBarPropGetItemAs,
  MegaMenuBannerBarPropGetItemAttributes,
  MegaMenuBannerBarPropGetItemDescription,
  MegaMenuBannerBarPropGetItemImage,
  MegaMenuBannerBarPropGetItemLabel,
  MegaMenuBannerBarPropGetItemOnClick,
} from './MegaMenuBannerBar';

export type MegaMenuPropOnItemClick<ITEM> = (
  item: ITEM,
  props: {
    e: React.MouseEvent;
  },
) => void;

export type MegaMenuDefaultItem = {
  key: string | number;
  label: string;
  iconLeft?: IconComponent;
  as?: AsTags;
  attributes?: AsAttributes;
  subMenu?: MegaMenuDefaultItem[];
  onClick?: React.MouseEventHandler;
};

export type MegaMenuPropGetItemKey<ITEM> = (item: ITEM) => string | number;
export type MegaMenuPropGetItemLabel<ITEM> = (item: ITEM) => string;
export type MegaMenuPropGetItemIconLeft<ITEM> = (
  item: ITEM,
) => IconComponent | undefined;
export type MegaMenuPropGetItemOnClick<ITEM> = (
  item: ITEM,
) => React.MouseEventHandler | undefined;
export type MegaMenuPropGetItemAs<ITEM> = (item: ITEM) => AsTags | undefined;
export type MegaMenuPropGetItemAttributes<ITEM> = (
  item: ITEM,
) => AsAttributes | undefined;
export type MegaMenuPropGetItemSubMenu<ITEM> = (
  item: ITEM,
) => ITEM[] | undefined;

export type ItemMappers<ITEM = MegaMenuDefaultItem> = {
  getItemKey?: MegaMenuPropGetItemKey<ITEM>;
  getItemLabel?: MegaMenuPropGetItemLabel<ITEM>;
  getItemIconLeft?: MegaMenuPropGetItemIconLeft<ITEM>;
  getItemOnClick?: MegaMenuPropGetItemOnClick<ITEM>;
  getItemAs?: MegaMenuPropGetItemAs<ITEM>;
  getItemAttributes?: MegaMenuPropGetItemAttributes<ITEM>;
  getItemSubMenu?: MegaMenuPropGetItemSubMenu<ITEM>;
};

export type BannerMappers<ITEM = MegaMenuBannerBarDefaultItem> = {
  getBannerLabel?: MegaMenuBannerBarPropGetItemLabel<ITEM>;
  getBannerOnClick?: MegaMenuBannerBarPropGetItemOnClick<ITEM>;
  getBannerDescription?: MegaMenuBannerBarPropGetItemDescription<ITEM>;
  getBannerImage?: MegaMenuBannerBarPropGetItemImage<ITEM>;
  getBannerAs?: MegaMenuBannerBarPropGetItemAs<ITEM>;
  getBannerAttributes?: MegaMenuBannerBarPropGetItemAttributes<ITEM>;
};

export type MegaMenuProps<
  ITEM = MegaMenuDefaultItem,
  BANNER = MegaMenuBannerBarDefaultItem,
> = PropsWithHTMLAttributesAndRef<
  {
    banners?: BANNER[];
    items: ITEM[];
    menuTitle?: string;
    menuShowButtonText?: string;
    menuHideButtonText?: string;
    menuMaxElements?: number;
    bannerPosition?: 'right' | 'bottom';
    onItemClick?: MegaMenuPropOnItemClick<ITEM>;
    onBannerClick?: MegaMenuPropOnItemClick<BANNER>;
  } & BannerMappers<BANNER> &
    ItemMappers<ITEM> &
    (ITEM extends { key: MegaMenuDefaultItem['key'] }
      ? {}
      : { getItemKey: MegaMenuPropGetItemKey<ITEM> }) &
    (ITEM extends { label: MegaMenuDefaultItem['label'] }
      ? {}
      : { getItemLabel: MegaMenuPropGetItemLabel<ITEM> }) &
    (BANNER extends { label: MegaMenuBannerBarDefaultItem['label'] | unknown }
      ? {}
      : { getBannerLabel: MegaMenuBannerBarPropGetItemLabel<ITEM> }),
  HTMLDivElement
>;

export type MegaMenuComponent = <
  ITEM = MegaMenuDefaultItem,
  BANNER = MegaMenuBannerBarDefaultItem,
>(
  props: MegaMenuProps<ITEM, BANNER>,
  ref: React.Ref<HTMLDivElement>,
) => React.ReactElement | null;
