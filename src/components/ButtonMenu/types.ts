import { IconComponent } from '@consta/icons/Icon';
import {
  ButtonPropForm,
  ButtonPropSize,
  ButtonPropView,
} from '@consta/uikit/Button';

import { PropsWithHTMLAttributesAndRef } from '##/utils/types/PropsWithHTMLAttributes';

export type ButtonMenuDefaultItem = {
  label: string;
  href?: string;
  target?: string;
  icon?: IconComponent;
  onClick?: React.EventHandler<React.MouseEvent>;
};

export type ButtonMenuPropGetItemLabel<ITEM> = (item: ITEM) => string;
export type ButtonMenuPropGetItemHref<ITEM> = (
  item: ITEM,
) => string | undefined;
export type ButtonMenuPropGetItemTarget<ITEM> = (
  item: ITEM,
) => string | undefined;
export type ButtonMenuPropGetItemIcon<ITEM> = (
  item: ITEM,
) => IconComponent | undefined;
export type ButtonMenuPropGetItemOnClick<ITEM> = (
  item: ITEM,
) => React.EventHandler<React.MouseEvent> | undefined;
export type ButtonMenuPropOnItemClick<ITEM> = (
  item: ITEM,
  props: {
    e: React.MouseEvent;
  },
) => void;

export type ButtonMenuProps<ITEM = ButtonMenuDefaultItem> =
  PropsWithHTMLAttributesAndRef<
    {
      items: ITEM[];
      onItemClick?: ButtonMenuPropOnItemClick<ITEM>;
      getItemHref?: ButtonMenuPropGetItemHref<ITEM>;
      getItemLabel?: ButtonMenuPropGetItemLabel<ITEM>;
      getItemTarget?: ButtonMenuPropGetItemTarget<ITEM>;
      getItemOnClick?: ButtonMenuPropGetItemOnClick<ITEM>;
      getItemIcon?: ButtonMenuPropGetItemIcon<ITEM>;
      form?: ButtonPropForm;
      size?: ButtonPropSize;
      view?: ButtonPropView;
      onlyIcon?: boolean;
    },
    HTMLDivElement
  > &
    (ITEM extends { label: ButtonMenuDefaultItem['label'] }
      ? {}
      : { getItemLabel: ButtonMenuPropGetItemLabel<ITEM> });

export type ButtonMenuComponent = <ITEM = ButtonMenuDefaultItem>(
  props: ButtonMenuProps<ITEM>,
) => React.ReactElement | null;
