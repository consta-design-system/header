import {
  DefaultNavbarGroup,
  DefaultNavbarItem,
  NavbarPropGetGroupKey,
  NavbarPropGetGroupLabel,
  NavbarPropGetGroupRightSide,
  NavbarPropGetItemActive,
  NavbarPropGetItemGroupId,
  NavbarPropGetItemIcon,
  NavbarPropGetItemLabel,
  NavbarPropGetItemRightSide,
  NavbarPropGetItemStatus,
  NavbarProps,
} from './types';

const defaultGetItemLabel: NavbarPropGetItemLabel<DefaultNavbarItem> = (item) =>
  item.label;

const defaultGetItemActive: NavbarPropGetItemActive<DefaultNavbarItem> = (
  item,
) => item.active;

const defaultGetItemStatus: NavbarPropGetItemStatus<DefaultNavbarItem> = (
  item,
) => item.status;
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
const defaultGetGroupLabel: NavbarPropGetGroupLabel<DefaultNavbarGroup> = (
  group,
) => group.label;
const defaultGetGroupRightSide: NavbarPropGetGroupRightSide<
  DefaultNavbarGroup
> = (group) => group.rightSide;

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
    getItemStatus: props.getItemStatus || defaultGetItemStatus,
    getGroupLabel: props.getGroupLabel || defaultGetGroupLabel,
    getGroupKey: props.getGroupKey || defaultGetGroupKey,
    getGroupRightSide: props.getGroupRightSide || defaultGetGroupRightSide,
  };
}
