import React from 'react';

import {
  VerticalMenuDefaultItem,
  VerticalMenuPropGetItemActive,
  VerticalMenuPropGetItemGroup,
  VerticalMenuPropGetItemHref,
  VerticalMenuPropGetItemLabel,
  VerticalMenuPropGetItemOnClick,
  VerticalMenuPropGetItemSubMenu,
  VerticalMenuPropGetItemTarget,
  VerticalMenuPropOnItemClick,
} from '##/components/VerticalMenu';
import { PropsWithHTMLAttributesAndRef } from '##/utils/types/PropsWithHTMLAttributes';

export type MobileMenuProps<ITEM = VerticalMenuDefaultItem> =
  PropsWithHTMLAttributesAndRef<
    {
      items: ITEM[];
      getItemHref?: VerticalMenuPropGetItemHref<ITEM>;
      getItemLabel?: VerticalMenuPropGetItemLabel<ITEM>;
      getItemTarget?: VerticalMenuPropGetItemTarget<ITEM>;
      getItemActive?: VerticalMenuPropGetItemActive<ITEM>;
      getItemOnClick?: VerticalMenuPropGetItemOnClick<ITEM>;
      getItemSubMenu?: VerticalMenuPropGetItemSubMenu<ITEM>;
      getItemGroup?: VerticalMenuPropGetItemGroup<ITEM>;
      onItemClick?: VerticalMenuPropOnItemClick<ITEM>;
      header?: React.ReactNode;
      sidebarClassName?: string;
      children?: never;
      footer?: React.ReactNode;
    },
    HTMLButtonElement
  > &
    (ITEM extends { label: VerticalMenuDefaultItem['label'] }
      ? {}
      : { getItemLabel: VerticalMenuPropGetItemLabel<ITEM> });

export type MobileMenuComponent = <ITEM = VerticalMenuDefaultItem>(
  props: MobileMenuProps<ITEM>,
) => React.ReactElement | null;

export type { VerticalMenuDefaultItem };
