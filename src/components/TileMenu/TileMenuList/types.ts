import { PropsWithHTMLAttributesAndRef } from '##/utils/types/PropsWithHTMLAttributes';

export const tileMenuListPropView = ['lines', 'twoLines', 'cards'] as const;
export type TileMenuListPropView = (typeof tileMenuListPropView)[number];
export const tileMenuListPropViewDefault: TileMenuListPropView =
  tileMenuListPropView[0];

export type TileMenuListDefaultItem = {
  label: string;
  description?: string;
  image?: string;
} & (
  | {
      href: string;
      onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    }
  | { href?: undefined; onClick?: React.MouseEventHandler<HTMLDivElement> }
);

export type TileMenuListPropGetItemImage<ITEM> = (
  item: ITEM,
) => string | React.FC | undefined;
export type TileMenuListPropGetItemLabel<ITEM> = (item: ITEM) => string;
export type TileMenuListPropGetItemDescription<ITEM> = (
  item: ITEM,
) => string | undefined;
export type TileMenuListPropGetItemHref<ITEM> = (
  item: ITEM,
) => string | undefined;
export type TileMenuListPropGetItemOnClick<ITEM> = (
  item: ITEM,
) => React.MouseEventHandler | undefined;
export type TileMenuListPropOnItemClick<ITEM> = (
  item: ITEM,
  props: {
    e: React.MouseEvent;
  },
) => void;

export type TileMenuListCommonProps<ITEM> = {
  view?: TileMenuListPropView;
  items: ITEM[];
  onItemClick?: TileMenuListPropOnItemClick<ITEM>;
  getItemImage?: TileMenuListPropGetItemImage<ITEM>;
  getItemLabel?: TileMenuListPropGetItemLabel<ITEM>;
  getItemDescription?: TileMenuListPropGetItemDescription<ITEM>;
  getItemHref?: TileMenuListPropGetItemHref<ITEM>;
  getItemOnClick?: TileMenuListPropGetItemOnClick<ITEM>;
};

export type TileMenuListProps<ITEM = TileMenuListDefaultItem> =
  PropsWithHTMLAttributesAndRef<TileMenuListCommonProps<ITEM>, HTMLDivElement> &
    TileMenuListCommonProps<ITEM> &
    (ITEM extends { label: TileMenuListDefaultItem['label'] }
      ? {}
      : { getItemLabel: TileMenuListPropGetItemLabel<ITEM> });

export type TileMenuListComponent = <ITEM = TileMenuListDefaultItem>(
  props: TileMenuListProps<ITEM>,
) => React.ReactElement | null;
