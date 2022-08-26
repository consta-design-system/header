import {
  ButtonMenuDefaultItem,
  ButtonMenuPropGetItemHref,
  ButtonMenuPropGetItemIcon,
  ButtonMenuPropGetItemLabel,
  ButtonMenuPropGetItemOnClick,
  ButtonMenuPropGetItemTarget,
  ButtonMenuProps,
} from './types';

export const defaultGetItemLabel: ButtonMenuPropGetItemLabel<
  ButtonMenuDefaultItem
> = (item) => item.label;
export const defaultGetItemHref: ButtonMenuPropGetItemHref<
  ButtonMenuDefaultItem
> = (item) => item.href;
export const defaultGetItemOnClick: ButtonMenuPropGetItemOnClick<
  ButtonMenuDefaultItem
> = (item) => item.onClick;
export const defaultGetItemTarget: ButtonMenuPropGetItemTarget<
  ButtonMenuDefaultItem
> = (item) => item.target;
export const defaultGetItemIcon: ButtonMenuPropGetItemIcon<
  ButtonMenuDefaultItem
> = (item) => item.icon;

export const getGetters = <ITEM>(props: {
  getItemLabel?: ButtonMenuPropGetItemLabel<ITEM>;
  getItemHref?: ButtonMenuPropGetItemHref<ITEM>;
  getItemOnClick?: ButtonMenuPropGetItemOnClick<ITEM>;
  getItemTarget?: ButtonMenuPropGetItemTarget<ITEM>;
  getItemIcon?: ButtonMenuPropGetItemIcon<ITEM>;
}) => {
  return {
    getItemLabel: props.getItemLabel || defaultGetItemLabel,
    getItemHref: props.getItemHref || defaultGetItemHref,
    getItemOnClick: props.getItemOnClick || defaultGetItemOnClick,
    getItemTarget: props.getItemTarget || defaultGetItemTarget,
    getItemIcon: props.getItemIcon || defaultGetItemIcon,
  };
};

export function withDefaultGetters<ITEM>(props: ButtonMenuProps<ITEM>) {
  return {
    ...props,
    ...getGetters(props),
  };
}
