import {
  BannerBarDefaultItem,
  BannerBarPropGetItemAs,
  BannerBarPropGetItemAttributes,
  BannerBarPropGetItemDescription,
  BannerBarPropGetItemImage,
  BannerBarPropGetItemLabel,
  BannerBarPropGetItemOnClick,
  BannerBarProps,
} from './types';

const defaultGetItemLabel: BannerBarPropGetItemLabel<BannerBarDefaultItem> = (
  item,
) => item.label;
const defaultGetItemDescription: BannerBarPropGetItemDescription<
  BannerBarDefaultItem
> = (item) => item.description;
const defaultGetItemOnClick: BannerBarPropGetItemOnClick<
  BannerBarDefaultItem
> = (item) => item.onClick;
const defaultGetItemImage: BannerBarPropGetItemImage<BannerBarDefaultItem> = (
  item,
) => item.image;
const defaultGetItemAs: BannerBarPropGetItemAs<BannerBarDefaultItem> = (item) =>
  item.as;
const defaultGetItemAttributes: BannerBarPropGetItemAttributes<
  BannerBarDefaultItem
> = (item) => item.attributes;

export const withDefaultGetters = <ITEM>(props: BannerBarProps<ITEM>) => {
  return {
    ...props,
    getItemLabel: props.getItemLabel || defaultGetItemLabel,
    getItemDescription: props.getItemDescription || defaultGetItemDescription,
    getItemOnClick: props.getItemOnClick || defaultGetItemOnClick,
    getItemImage: props.getItemImage || defaultGetItemImage,
    getItemAs: props.getItemAs || defaultGetItemAs,
    getItemAttributes: props.getItemAttributes || defaultGetItemAttributes,
  };
};
