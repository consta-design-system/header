import { PropsWithHTMLAttributesAndRef } from '##/utils/types/PropsWithHTMLAttributes';

export type TileMenuPropView = 'lines' | 'twoLines' | 'cards';

export type TileMenuPropItem = {
  title: string;
  description?: string;
  image?: string;
} & (
  | {
      href: string;
      onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    }
  | { href: undefined; onClick?: React.MouseEventHandler<HTMLDivElement> }
);

export type DefaultItem = {
  image?: string | React.FC;
  title: string;
  description?: string;
};

type GetItemImage<ITEM> = (item: ITEM) => string | React.FC | undefined;
type GetItemTitle<ITEM> = (item: ITEM) => string;
type GetItemDescription<ITEM> = (item: ITEM) => string;

export type TileMenuListProps<ITEM> = PropsWithHTMLAttributesAndRef<
  {
    view?: TileMenuPropView;
    items: ITEM[];
    isMobile?: boolean;
    getItemImage: GetItemImage<ITEM>;
    getItemTitle: GetItemTitle<ITEM>;
    getItemDescription: GetItemDescription<ITEM>;
  },
  HTMLDivElement
>;

export type TileMenuListComponent = <ITEM = DefaultItem>(
  props: TileMenuListProps<ITEM>,
) => React.ReactElement | null;
