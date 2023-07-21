import { PropsWithHTMLAttributesAndRef } from '##/utils/types/PropsWithHTMLAttributes';

import {
  TileMenuListCommonProps,
  TileMenuListDefaultItem,
  TileMenuListPropGetItemLabel,
} from './TileMenuList';

export type TileMenuProps<ITEM = TileMenuListDefaultItem> =
  PropsWithHTMLAttributesAndRef<
    TileMenuListCommonProps<ITEM> & {
      listClassName?: string;
      title?: string;
      isMobile?: boolean;
    },
    HTMLButtonElement
  > &
    (ITEM extends { label: TileMenuListDefaultItem['label'] }
      ? {}
      : { getItemLabel: TileMenuListPropGetItemLabel<ITEM> });

export type TileMenuComponent = <ITEM = TileMenuListDefaultItem>(
  props: TileMenuProps<ITEM>,
) => React.ReactElement | null;
