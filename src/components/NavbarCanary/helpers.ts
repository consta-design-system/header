import {
  DefaultNavbarGroup,
  DefaultNavbarItem,
  DefaultNavbarRailItem,
  NavbarPropGetGroupKey,
  NavbarPropGetGroupLabel,
  NavbarPropGetGroupRightSide,
  NavbarPropGetItemActive,
  NavbarPropGetItemGroupId,
  NavbarPropGetItemIcon,
  NavbarPropGetItemLabel,
  NavbarPropGetItemRightSide,
  NavbarPropGetItemStatus,
  NavbarPropGetItemSubMenu,
  NavbarProps,
  NavbarRailPropGetItemTooltip,
  NavbarRailProps,
} from './types';

const defaultGetItemLabel: NavbarPropGetItemLabel<DefaultNavbarItem> = (item) =>
  item.label;

const defaultGetItemActive: NavbarPropGetItemActive<DefaultNavbarItem> = (
  item,
) => item.active;

const defaultGetItemGroupKey: NavbarPropGetItemGroupId<DefaultNavbarItem> = (
  item,
) => item.groupId;

const defaultGetItemIcon: NavbarPropGetItemIcon<DefaultNavbarItem> = (item) =>
  item.icon;
const defaultGetItemRightSide: NavbarPropGetItemRightSide<DefaultNavbarItem> = (
  item,
) => item.rightSide;

const defaultGetGroupKey: NavbarPropGetGroupKey<DefaultNavbarGroup> = (group) =>
  group.id;

const defaultGetItemSubMenu: NavbarPropGetItemSubMenu<DefaultNavbarItem> = (
  item,
) => item.subMenu;
const defaultGetGroupLabel: NavbarPropGetGroupLabel<DefaultNavbarGroup> = (
  group,
) => group.label;
const defaultGetGroupRightSide: NavbarPropGetGroupRightSide<
  DefaultNavbarGroup
> = (group) => group.rightSide;

const defaultGetItemStatus: NavbarPropGetItemStatus<DefaultNavbarItem> = (
  item,
) => item.status;

const defaultGetItemTooltip: NavbarRailPropGetItemTooltip<
  DefaultNavbarRailItem
> = (item) => item.tooltip;

export function withDefaultGetters<
  ITEM = DefaultNavbarItem,
  GROUP = DefaultNavbarGroup,
>(props: NavbarProps<ITEM, GROUP>) {
  return {
    ...props,
    getItemLabel: props.getItemLabel || defaultGetItemLabel,
    getItemGroupKey: props.getItemGroupKey || defaultGetItemGroupKey,
    getItemActive: props.getItemActive || defaultGetItemActive,
    getItemIcon: props.getItemIcon || defaultGetItemIcon,
    getItemRightSide: props.getItemRightSide || defaultGetItemRightSide,
    getGroupLabel: props.getGroupLabel || defaultGetGroupLabel,
    getGroupKey: props.getGroupKey || defaultGetGroupKey,
    getGroupRightSide: props.getGroupRightSide || defaultGetGroupRightSide,
    getItemSubMenu: props.getItemSubMenu || defaultGetItemSubMenu,
    getItemStatus: props.getItemStatus || defaultGetItemStatus,
  };
}

export function withDefaultRailGetters<ITEM = NavbarRailProps>(
  props: NavbarRailProps<ITEM>,
) {
  return {
    ...props,
    getItemLabel: props.getItemLabel || defaultGetItemLabel,
    getItemActive: props.getItemActive || defaultGetItemActive,
    getItemIcon: props.getItemIcon || defaultGetItemIcon,
    getItemStatus: props.getItemStatus || defaultGetItemStatus,
    getItemTooltip: props.getItemTooltip || defaultGetItemTooltip,
  };
}
