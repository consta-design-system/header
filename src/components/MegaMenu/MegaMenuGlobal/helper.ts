import {
  MegaMenuGlobalDefaultGroup,
  MegaMenuGlobalDefaultItem,
  MegaMenuGlobalPropGetGroupId,
  MegaMenuGlobalPropGetGroupLabel,
  MegaMenuGlobalPropGetGroupOnClick,
  MegaMenuGlobalPropGetItemAs,
  MegaMenuGlobalPropGetItemAttributes,
  MegaMenuGlobalPropGetItemGroupId,
  MegaMenuGlobalPropGetItemLabel,
  MegaMenuGlobalPropGetItemOnClick,
  MegaMenuGlobalProps,
} from './types';

const defaultGetItemLabel: MegaMenuGlobalPropGetItemLabel<
  MegaMenuGlobalDefaultItem
> = (item) => item.label;
const defaultGetItemOnClick: MegaMenuGlobalPropGetItemOnClick<
  MegaMenuGlobalDefaultItem
> = (item) => item.onClick;
const defaultGetItemAs: MegaMenuGlobalPropGetItemAs<
  MegaMenuGlobalDefaultItem
> = (item) => item.as;
const defaultGetItemAttributes: MegaMenuGlobalPropGetItemAttributes<
  MegaMenuGlobalDefaultItem
> = (item) => item.attributes;
const defaultGetItemGroupId: MegaMenuGlobalPropGetItemGroupId<
  MegaMenuGlobalDefaultItem
> = (item) => item.groupId;

const defaultGetGroupId: MegaMenuGlobalPropGetGroupId<
  MegaMenuGlobalDefaultGroup
> = (group) => group.id;
const defaultGetGroupLabel: MegaMenuGlobalPropGetGroupLabel<
  MegaMenuGlobalDefaultGroup
> = (group) => group.label;
const defaultGetGroupOnClick: MegaMenuGlobalPropGetGroupOnClick<
  MegaMenuGlobalDefaultGroup
> = (group) => group.onClick;

export const withDefaultGetters = (props: MegaMenuGlobalProps) => {
  return {
    ...props,
    getItemLabel: props.getItemLabel || defaultGetItemLabel,
    getItemGroupId: props.getItemGroupId || defaultGetItemGroupId,
    getItemOnClick: props.getItemOnClick || defaultGetItemOnClick,
    getItemAs: props.getItemAs || defaultGetItemAs,
    getItemAttributes: props.getItemAttributes || defaultGetItemAttributes,
    getGroupKey: props.getGroupKey || defaultGetGroupId,
    getGroupLabel: props.getGroupLabel || defaultGetGroupLabel,
    getGroupOnClick: props.getGroupOnClick || defaultGetGroupOnClick,
  };
};
