import {
  PropsWithHTMLAttributes,
  PropsWithHTMLAttributesAndRef,
} from '##/utils/types/PropsWithHTMLAttributes';

export const tileMenuPropView = ['lines', 'twoLines', 'cards'] as const;
export type TileMenuPropView = typeof tileMenuPropView[number];
export const tileMenuPropViewDefault = tileMenuPropView[0];

export type TileMenuDefaultItem = {
  label: string;
  image?: string;
  description?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export type TileMenuPropGetItemImage<ITEM> = (
  item: ITEM,
) => string | React.FC | undefined;
export type TileMenuPropGetItemLabel<ITEM> = (item: ITEM) => string;
export type TileMenuPropGetItemDescription<ITEM> = (
  item: ITEM,
) => string | undefined;
export type TileMenuPropGetItemHref<ITEM> = (item: ITEM) => string | undefined;
export type TileMenuPropGetItemOnClick<ITEM> = (
  item: ITEM,
) => React.MouseEventHandler<HTMLAnchorElement> | undefined;
export type TileMenuPropOnItemClick<ITEM> = (props: {
  e: React.MouseEvent<HTMLAnchorElement>;
  item: ITEM;
}) => void;
export type TileMenuOnItemClick<ITEM> = (props: {
  e: React.MouseEvent<HTMLAnchorElement>;
  item: ITEM;
}) => void;

type CommonProps<ITEM> = {
  view?: TileMenuPropView;
  items: ITEM[];
  isMobile?: boolean;
  onItemClick?: TileMenuOnItemClick<ITEM>;
  getItemImage?: TileMenuPropGetItemImage<ITEM>;
  getItemLabel?: TileMenuPropGetItemLabel<ITEM>;
  getItemDescription?: TileMenuPropGetItemDescription<ITEM>;
  getItemHref?: TileMenuPropGetItemHref<ITEM>;
  getItemOnClick?: TileMenuPropGetItemOnClick<ITEM>;
};

export type TileMenuProps<ITEM = TileMenuDefaultItem> =
  PropsWithHTMLAttributesAndRef<
    CommonProps<ITEM> & { listClassName?: string; title?: string },
    HTMLButtonElement
  > &
    (ITEM extends { label: TileMenuDefaultItem['label'] }
      ? {}
      : { getItemLabel: TileMenuPropGetItemLabel<ITEM> });

export type TileMenuListProps<ITEM = TileMenuDefaultItem> =
  PropsWithHTMLAttributes<CommonProps<ITEM>, HTMLDivElement>;

export type TileMenuListComponent = <ITEM = TileMenuDefaultItem>(
  props: TileMenuListProps<ITEM>,
) => React.ReactElement | null;

export type TileMenuComponent = <ITEM = TileMenuDefaultItem>(
  props: TileMenuProps<ITEM>,
) => React.ReactElement | null;
