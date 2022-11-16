import { PropsWithHTMLAttributesAndRef } from '##/utils/types/PropsWithHTMLAttributes';

export type MenuDefaultItem = {
  label: string;
  href?: string;
  target?: string;
  active?: boolean;
  onClick?: React.EventHandler<React.MouseEvent>;
  subMenu?: MenuDefaultItem[];
};

export type MenuPropGetItemLabel<ITEM> = (item: ITEM) => string;
export type MenuPropGetItemHref<ITEM> = (item: ITEM) => string | undefined;
export type MenuPropGetItemTarget<ITEM> = (item: ITEM) => string | undefined;
export type MenuPropGetItemActive<ITEM> = (item: ITEM) => boolean | undefined;
export type MenuPropGetItemSubMenu<ITEM> = (item: ITEM) => ITEM[] | undefined;
export type MenuPropGetItemOnClick<ITEM> = (
  item: ITEM,
) => React.EventHandler<React.MouseEvent> | undefined;
export type MenuPropOnItemClick<ITEM> = (props: {
  e: React.MouseEvent;
  item: ITEM;
}) => void;

export type MenuProps<ITEM = MenuDefaultItem> = PropsWithHTMLAttributesAndRef<
  {
    items: ITEM[];
    width?: 'full';
    onItemClick?: MenuPropOnItemClick<ITEM>;
    getItemHref?: MenuPropGetItemHref<ITEM>;
    getItemLabel?: MenuPropGetItemLabel<ITEM>;
    getItemTarget?: MenuPropGetItemTarget<ITEM>;
    getItemActive?: MenuPropGetItemActive<ITEM>;
    getItemOnClick?: MenuPropGetItemOnClick<ITEM>;
    getItemSubMenu?: MenuPropGetItemSubMenu<ITEM>;
  },
  HTMLDivElement
> &
  (ITEM extends { label: MenuDefaultItem['label'] }
    ? {}
    : { getItemLabel: MenuPropGetItemLabel<ITEM> });

export type MenuComponent = <ITEM = MenuDefaultItem>(
  props: MenuProps<ITEM>,
) => React.ReactElement | null;
