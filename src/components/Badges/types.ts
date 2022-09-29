import {
  BadgePropForm,
  BadgePropSize,
  BadgePropStatus,
  BadgePropView,
} from '@consta/uikit/Badge';
import { IconComponent } from '@consta/uikit/Icon';

import { PropsWithHTMLAttributesAndRef } from '##/utils/types/PropsWithHTMLAttributes';

export type DefaultItem = {
  label: string;
  status?: BadgePropStatus;
  icon?: IconComponent;
};

export type BadgesPropGetItemLabel<ITEM> = (item: ITEM) => string;
export type BadgesPropGetItemStatus<ITEM> = (
  item: ITEM,
) => BadgePropStatus | undefined;
export type BadgesPropGetItemIcon<ITEM> = (
  item: ITEM,
) => IconComponent | undefined;

export type BadgesProps<ITEM = DefaultItem> = PropsWithHTMLAttributesAndRef<
  {
    items?: ITEM[];
    form?: BadgePropForm;
    size?: BadgePropSize;
    view?: BadgePropView;
    children?: never;
    getItemLabel?: BadgesPropGetItemLabel<ITEM>;
    getItemStatus?: BadgesPropGetItemStatus<ITEM>;
    getItemIcon?: BadgesPropGetItemIcon<ITEM>;
  },
  HTMLDivElement
> &
  (ITEM extends { label: DefaultItem['label'] }
    ? {}
    : { getItemLabel: BadgesPropGetItemLabel<ITEM> });

export type BadgesComponent = <ITEM = DefaultItem>(
  props: BadgesProps<ITEM>,
) => React.ReactElement | null;
