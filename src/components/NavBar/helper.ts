import {
  NavBarDefaultItem,
  NavBarPropGetItemActive,
  NavBarPropGetItemAs,
  NavBarPropGetItemAttributes,
  NavBarPropGetItemIconLeft,
  NavBarPropGetItemIconRight,
  NavBarPropGetItemLabel,
  NavBarPropGetItemOnClick,
  NavBarProps,
} from './types';

const defaultGetItemLabel: NavBarPropGetItemLabel<NavBarDefaultItem> = (item) =>
  item.label;
const defaultGetItemActive: NavBarPropGetItemActive<NavBarDefaultItem> = (
  item,
) => item.active;
const defaultGetItemOnClick: NavBarPropGetItemOnClick<NavBarDefaultItem> = (
  item,
) => item.onClick;
const defaultGetItemIconLeft: NavBarPropGetItemIconLeft<NavBarDefaultItem> = (
  item,
) => item.iconLeft;
const defaultGetItemIconRight: NavBarPropGetItemIconRight<NavBarDefaultItem> = (
  item,
) => item.iconRight;
const defaultGetItemAs: NavBarPropGetItemAs<NavBarDefaultItem> = (item) =>
  item.as;
const defaultGetItemAttributes: NavBarPropGetItemAttributes<
  NavBarDefaultItem
> = (item) => item.attributes;

export const withDefaultGetters = <ITEM>(props: NavBarProps<ITEM>) => {
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
