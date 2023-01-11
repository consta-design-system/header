import {
  GlobalMenuDefaultGroup,
  GlobalMenuDefaultItem,
  GlobalMenuPropGetGroupId,
  GlobalMenuPropGetGroupLabel,
  GlobalMenuPropGetItemAs,
  GlobalMenuPropGetItemAttributes,
  GlobalMenuPropGetItemGroupId,
  GlobalMenuPropGetItemLabel,
  GlobalMenuPropGetItemOnClick,
  GlobalMenuProps,
} from './types';

const defaultGetItemLabel: GlobalMenuPropGetItemLabel<GlobalMenuDefaultItem> = (
  item,
) => item.label;
const defaultGetItemOnClick: GlobalMenuPropGetItemOnClick<
  GlobalMenuDefaultItem
> = (item) => item.onClick;
const defaultGetItemAs: GlobalMenuPropGetItemAs<GlobalMenuDefaultItem> = (
  item,
) => item.as;
const defaultGetItemAttributes: GlobalMenuPropGetItemAttributes<
  GlobalMenuDefaultItem
> = (item) => item.attributes;
const defaultGetItemGroupId: GlobalMenuPropGetItemGroupId<
  GlobalMenuDefaultItem
> = (item) => item.groupId;

const defaultGetGroupId: GlobalMenuPropGetGroupId<GlobalMenuDefaultGroup> = (
  group,
) => group.id;
const defaultGetGroupLabel: GlobalMenuPropGetGroupLabel<
  GlobalMenuDefaultGroup
> = (group) => group.label;

export const withDefaultGetters = (props: GlobalMenuProps) => {
  return {
    ...props,
    getItemLabel: props.getItemLabel || defaultGetItemLabel,
    getItemGroupId: props.getItemGroupId || defaultGetItemGroupId,
    getItemOnClick: props.getItemOnClick || defaultGetItemOnClick,
    getItemAs: props.getItemAs || defaultGetItemAs,
    getItemAttributes: props.getItemAttributes || defaultGetItemAttributes,
    getGroupKey: props.getGroupKey || defaultGetGroupId,
    getGroupLabel: props.getGroupLabel || defaultGetGroupLabel,
  };
};
