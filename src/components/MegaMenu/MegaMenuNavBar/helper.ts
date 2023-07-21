import {
  MegaMenuNavBarDefaultItem,
  MegaMenuNavBarPropGetItemActive,
  MegaMenuNavBarPropGetItemAs,
  MegaMenuNavBarPropGetItemAttributes,
  MegaMenuNavBarPropGetItemIconLeft,
  MegaMenuNavBarPropGetItemIconRight,
  MegaMenuNavBarPropGetItemLabel,
  MegaMenuNavBarPropGetItemOnClick,
  MegaMenuNavBarProps,
} from './types';

const defaultGetItemLabel: MegaMenuNavBarPropGetItemLabel<
  MegaMenuNavBarDefaultItem
> = (item) => item.label;
const defaultGetItemActive: MegaMenuNavBarPropGetItemActive<
  MegaMenuNavBarDefaultItem
> = (item) => item.active;
const defaultGetItemOnClick: MegaMenuNavBarPropGetItemOnClick<
  MegaMenuNavBarDefaultItem
> = (item) => item.onClick;
const defaultGetItemIconLeft: MegaMenuNavBarPropGetItemIconLeft<
  MegaMenuNavBarDefaultItem
> = (item) => item.iconLeft;
const defaultGetItemIconRight: MegaMenuNavBarPropGetItemIconRight<
  MegaMenuNavBarDefaultItem
> = (item) => item.iconRight;
const defaultGetItemAs: MegaMenuNavBarPropGetItemAs<
  MegaMenuNavBarDefaultItem
> = (item) => item.as;
const defaultGetItemAttributes: MegaMenuNavBarPropGetItemAttributes<
  MegaMenuNavBarDefaultItem
> = (item) => item.attributes;

export const withDefaultGetters = <ITEM>(props: MegaMenuNavBarProps<ITEM>) => {
  return {
    ...props,
    getItemLabel: props.getItemLabel || defaultGetItemLabel,
    getItemActive: props.getItemActive || defaultGetItemActive,
    getItemOnClick: props.getItemOnClick || defaultGetItemOnClick,
    getItemIconLeft: props.getItemIconLeft || defaultGetItemIconLeft,
    getItemIconRight: props.getItemIconRight || defaultGetItemIconRight,
    getItemAs: props.getItemAs || defaultGetItemAs,
    getItemAttributes: props.getItemAttributes || defaultGetItemAttributes,
  };
};
