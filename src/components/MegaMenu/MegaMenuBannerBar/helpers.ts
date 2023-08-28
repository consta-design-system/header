import {
  MegaMenuBannerBarDefaultItem,
  MegaMenuBannerBarPropGetItemAs,
  MegaMenuBannerBarPropGetItemAttributes,
  MegaMenuBannerBarPropGetItemDescription,
  MegaMenuBannerBarPropGetItemImage,
  MegaMenuBannerBarPropGetItemLabel,
  MegaMenuBannerBarPropGetItemOnClick,
  MegaMenuBannerBarProps,
} from './types';

const defaultGetItemLabel: MegaMenuBannerBarPropGetItemLabel<
  MegaMenuBannerBarDefaultItem
> = (item) => item.label;
const defaultGetItemDescription: MegaMenuBannerBarPropGetItemDescription<
  MegaMenuBannerBarDefaultItem
> = (item) => item.description;
const defaultGetItemOnClick: MegaMenuBannerBarPropGetItemOnClick<
  MegaMenuBannerBarDefaultItem
> = (item) => item.onClick;
const defaultGetItemImage: MegaMenuBannerBarPropGetItemImage<
  MegaMenuBannerBarDefaultItem
> = (item) => item.image;
const defaultGetItemAs: MegaMenuBannerBarPropGetItemAs<
  MegaMenuBannerBarDefaultItem
> = (item) => item.as;
const defaultGetItemAttributes: MegaMenuBannerBarPropGetItemAttributes<
  MegaMenuBannerBarDefaultItem
> = (item) => item.attributes;

export const withDefaultGetters = <ITEM>(
  props: MegaMenuBannerBarProps<ITEM>,
) => {
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
