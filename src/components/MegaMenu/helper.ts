import {
  BannerBarDefaultItem,
  BannerBarPropGetItemAs,
  BannerBarPropGetItemAttributes,
  BannerBarPropGetItemDescription,
  BannerBarPropGetItemImage,
  BannerBarPropGetItemLabel,
  BannerBarPropGetItemOnClick,
} from '../BannerBar/types';
import {
  MegaMenuDefaultItem,
  MegaMenuPropGetItemAs,
  MegaMenuPropGetItemAttributes,
  MegaMenuPropGetItemIconLeft,
  MegaMenuPropGetItemKey,
  MegaMenuPropGetItemLabel,
  MegaMenuPropGetItemOnClick,
  MegaMenuPropGetItemSubMenu,
  MegaMenuProps,
} from './types';

// Menu
const defaultGetItemKey: MegaMenuPropGetItemKey<MegaMenuDefaultItem> = (item) =>
  item.key;
const defaultGetItemLabel: MegaMenuPropGetItemLabel<MegaMenuDefaultItem> = (
  item,
) => item.label;
const defaultGetItemIconLeft: MegaMenuPropGetItemIconLeft<
  MegaMenuDefaultItem
> = (item) => item.iconLeft;
const defaultGetItemOnClick: MegaMenuPropGetItemOnClick<MegaMenuDefaultItem> = (
  item,
) => item.onClick;
const defaultGetItemAs: MegaMenuPropGetItemAs<MegaMenuDefaultItem> = (item) =>
  item.as;
const defaultGetItemAttributes: MegaMenuPropGetItemAttributes<
  MegaMenuDefaultItem
> = (item) => item.attributes;
const defaultGetItemSubMenu: MegaMenuPropGetItemSubMenu<MegaMenuDefaultItem> = (
  item,
) => item.subMenu;

// BannerBar
const defaultGetBannerLabel: BannerBarPropGetItemLabel<BannerBarDefaultItem> = (
  item,
) => item.label;
const defaultGetBannerOnClick: BannerBarPropGetItemOnClick<
  BannerBarDefaultItem
> = (item) => item.onClick;
const defaultGetBannerDescription: BannerBarPropGetItemDescription<
  BannerBarDefaultItem
> = (item) => item.description;
const defaultGetBannerImage: BannerBarPropGetItemImage<BannerBarDefaultItem> = (
  item,
) => item.image;
const defaultGetBannerAs: BannerBarPropGetItemAs<BannerBarDefaultItem> = (
  item,
) => item.as;
const defaultGetBannerAttributees: BannerBarPropGetItemAttributes<
  BannerBarDefaultItem
> = (item) => item.attributes;

export const withDefaultGetters = (props: MegaMenuProps) => ({
  ...props,
  // Menu
  getItemKey: props.getItemKey || defaultGetItemKey,
  getItemAs: props.getItemAs || defaultGetItemAs,
  getItemAttributes: props.getItemAttributes || defaultGetItemAttributes,
  getItemLabel: props.getItemLabel || defaultGetItemLabel,
  getItemOnClick: props.getItemOnClick || defaultGetItemOnClick,
  getItemIconLeft: props.getItemIconLeft || defaultGetItemIconLeft,
  getItemSubMenu: props.getItemSubMenu || defaultGetItemSubMenu,
  // BannerBar
  getBannerAs: props.getBannerAs || defaultGetBannerAs,
  getBannerAttributes: props.getBannerAttributes || defaultGetBannerAttributees,
  getBannerLabel: props.getBannerLabel || defaultGetBannerLabel,
  getBannerOnClick: props.getBannerOnClick || defaultGetBannerOnClick,
  getBannerImage: props.getBannerImage || defaultGetBannerImage,
  getBannerDescription:
    props.getBannerDescription || defaultGetBannerDescription,
});

type Level<ITEM> = Array<{ groupId?: string | number; item: ITEM }>;

export const getItemsDepth = <ITEM>(
  items: ITEM[],
  getItemSubMenu: MegaMenuPropGetItemSubMenu<ITEM>,
) => {
  let depth = 1;
  items.forEach((item) => {
    const secondArr = getItemSubMenu(item);
    if (secondArr) {
      if (depth === 1) {
        depth += 1;
      }
      secondArr.forEach((el) => {
        const thirdArr = getItemSubMenu(el);
        if (depth === 2 && thirdArr) {
          depth += 1;
        }
      });
    }
  });
  return depth;
};

export const separateItemsByDepth = <ITEM>(params: {
  getItemKey: MegaMenuPropGetItemKey<ITEM>;
  items: ITEM[];
  getItemSubMenu: MegaMenuPropGetItemSubMenu<ITEM>;
  getItemActive: (item: ITEM) => boolean;
  depth?: number;
}): [Level<ITEM>, Level<ITEM>, Level<ITEM>] => {
  const {
    items,
    getItemKey,
    getItemSubMenu,
    getItemActive,
    depth = 3,
  } = params;
  const firstLevel: Level<ITEM> = [];
  const secondLevel: Level<ITEM> = [];
  const thirdLevel: Level<ITEM> = [];
  items.forEach((item) => {
    const secondArr = getItemSubMenu(item);
    const firstLevelItemKey = getItemKey(item);
    firstLevel.push({ item });
    if (secondArr) {
      secondArr.forEach((el) => {
        const thirdArr = getItemSubMenu(el);
        const secondLevelItemKey = getItemKey(el);
        if (getItemActive(item) || depth === 2) {
          secondLevel.push({ groupId: firstLevelItemKey, item: el });
          if (thirdArr) {
            thirdArr.forEach((subItem) => {
              thirdLevel.push({ groupId: secondLevelItemKey, item: subItem });
            });
          }
        }
      });
    }
  });
  return [firstLevel, secondLevel, thirdLevel];
};
