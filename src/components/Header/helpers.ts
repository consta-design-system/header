import { getGetters as getGettersForButtonMenu } from '##/components/ButtonMenu/helpers';
import { getGetters as getGettersForMenu } from '##/components/Menu/helpers';
import { DefaultItem } from '##/components/MobileMenu';
import { SelectMenuPropOnItemClick } from '##/components/SelectMenu';
import { getGetters as getGettersForSelectMenu } from '##/components/SelectMenu/helpers';
import { getItemClick } from '##/helpers/getItemClick';

import { HeaderDefaultLanguagesItem, HeaderProps } from './types';

type HeaderState = {
  languagesValue: HeaderDefaultLanguagesItem | undefined;
  setLanguagesValue: React.Dispatch<
    React.SetStateAction<HeaderDefaultLanguagesItem | undefined>
  >;
};

const getMenu = (props: HeaderProps): DefaultItem[] => {
  if (!props.menu?.length) {
    return [];
  }

  const getters = getGettersForMenu({
    getItemLabel: props.getMenuItemLabel,
    getItemActive: props.getMenuItemActive,
    getItemHref: props.getMenuItemHref,
    getItemOnClick: props.getMenuItemOnClick,
    getItemTarget: props.getMenuItemTarget,
    getItemSubMenu: props.getMenuItemSubMenu,
  });

  return props.menu.map((item) => ({
    label: getters.getItemLabel(item),
    href: getters.getItemHref(item),
    target: getters.getItemTarget(item),
    active: getters.getItemActive(item),
    onClick: getItemClick(item, getters.getItemOnClick, props.onMenuItemClick),
    subMenu: getters.getItemSubMenu(item),
    groupId: '1',
  }));
};

const getSecondaryMenu = (props: HeaderProps): DefaultItem[] => {
  if (!props.secondaryMenu?.length || !props.secondaryMenuLabel) {
    return [];
  }

  const getters = getGettersForSelectMenu({
    getItemLabel: props.getSecondaryMenuItemLabel,
    getItemHref: props.getSecondaryMenuItemHref,
    getItemOnClick: props.getSecondaryMenuItemOnClick,
    getItemTarget: props.getSecondaryMenuItemTarget,
    getItemSubMenu: props.getSecondaryMenuItemSubMenu,
  });

  return [
    {
      label: props.secondaryMenuLabel,
      groupId: '2',
      subMenu: props.secondaryMenu.map((item) => ({
        label: getters.getItemLabel(item),
        href: getters.getItemHref(item),
        target: getters.getItemTarget(item),
        onClick: getItemClick(
          item,
          getters.getItemOnClick,
          props.onSecondaryMenuItemClick,
        ),
        subMenu: getters.getItemSubMenu(item),
      })),
    },
  ];
};

const getAdditionalButtons = (props: HeaderProps): DefaultItem[] => {
  if (!props.additionalButtons?.length) {
    return [];
  }

  const getters = getGettersForButtonMenu({
    getItemLabel: props.getAdditionalButtonsItemLabel,
    getItemHref: props.getAdditionalButtonsItemHref,
    getItemOnClick: props.getAdditionalButtonsItemOnClick,
    getItemTarget: props.getAdditionalButtonsItemTarget,
  });

  return props.additionalButtons.map((item) => ({
    label: getters.getItemLabel(item),
    href: getters.getItemHref(item),
    target: getters.getItemTarget(item),
    onClick: getItemClick(
      item,
      getters.getItemOnClick,
      props.onAdditionalButtonsItemClick,
    ),
    groupId: '2',
  }));
};

const getLanguages = (
  props: HeaderProps,
  state: HeaderState,
): DefaultItem[] => {
  if (!props.languages?.length) {
    return [];
  }

  const onLanguageChange: SelectMenuPropOnItemClick<
    HeaderDefaultLanguagesItem
  > = (params) => {
    state.setLanguagesValue(params.item);
    props.onLanguageChange?.(params);
  };

  const getters = getGettersForSelectMenu({
    getItemLabel: props.getAdditionalButtonsItemLabel,
    getItemHref: props.getAdditionalButtonsItemHref,
    getItemOnClick: props.getAdditionalButtonsItemOnClick,
    getItemTarget: props.getAdditionalButtonsItemTarget,
  });

  const getActive = (item: DefaultItem): boolean => {
    if (!state.languagesValue) {
      return false;
    }

    return (
      getters.getItemLabel(item) === getters.getItemLabel(state.languagesValue)
    );
  };

  return [
    {
      label: props.languagesLabel || 'Сменить язык',
      groupId: '2',
      subMenu: props.languages.map((item) => ({
        label: getters.getItemLabel(item),
        href: getters.getItemHref(item),
        target: getters.getItemTarget(item),
        onClick: getItemClick(item, getters.getItemOnClick, onLanguageChange),
        subMenu: getters.getItemSubMenu(item),
        active: getActive(item),
      })),
    },
  ];
};

export const getMobileMenu = (
  props: HeaderProps,
  state: HeaderState,
): DefaultItem[] => [
  ...getMenu(props),
  ...getSecondaryMenu(props),
  ...getAdditionalButtons(props),
  ...getLanguages(props, state),
];
