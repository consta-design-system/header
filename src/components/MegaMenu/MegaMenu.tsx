import './MegaMenu.css';

import { IconArrowRight } from '@consta/icons/IconArrowRight';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { cn } from '##/utils/bem';

import {
  getItemsDepth,
  separateItemsByDepth,
  withDefaultGetters,
} from './helper';
import { MegaMenuBannerBar } from './MegaMenuBannerBar';
import { MegaMenuGlobal } from './MegaMenuGlobal';
import { MegaMenuNavBar } from './MegaMenuNavBar';
import { MegaMenuProps } from './types';

const cnMegaMenu = cn('MegaMenu');

export const MegaMenu = (props: MegaMenuProps) => {
  const {
    // GlobalMenu
    items: itemsProp,
    menuHideButtonText = 'Скрыть',
    menuMaxElements,
    menuShowButtonText = 'Ещё',
    menuTitle,
    onItemClick: onItemClickProp,
    getItemAs,
    getItemKey,
    getItemAttributes,
    getItemSubMenu,
    getItemIconLeft,
    getItemLabel,
    getItemOnClick,
    // BannerBar
    banners,
    bannerPosition = 'right',
    onBannerClick,
    getBannerAs,
    getBannerAttributes,
    getBannerDescription,
    getBannerImage,
    getBannerLabel,
    getBannerOnClick,
    // Others
    className,
    ...otherProps
  } = withDefaultGetters(props);
  type ITEM = (typeof itemsProp)[number];

  const [activeItem, setActiveItem] = useState<ITEM | undefined>();

  const getItemActive = useCallback(
    (item: ITEM) =>
      activeItem ? getItemKey(activeItem) === getItemKey(item) : false,
    [activeItem],
  );

  const depth = useMemo(
    () => getItemsDepth(itemsProp, getItemSubMenu),
    [itemsProp],
  );

  const [firstLevel, secondLevel, thirdLevel] = useMemo(
    () =>
      separateItemsByDepth({
        items: itemsProp,
        getItemKey,
        getItemSubMenu,
        getItemActive,
        depth,
      }),
    [itemsProp, activeItem],
  );

  const { navItems, items, groups } = useMemo(() => {
    return {
      navItems: depth < 2 || depth > 2 ? firstLevel : undefined,
      groups: depth < 3 ? firstLevel : secondLevel,
      items: depth < 3 ? secondLevel : thirdLevel,
    };
  }, [depth, firstLevel, secondLevel, thirdLevel]);

  const handleNavBarClick = (e: React.MouseEvent, item: ITEM) => {
    onItemClickProp?.({ e, item });
    if (getItemSubMenu(item)) {
      setActiveItem(item);
    }
  };

  const handleNavBarMouseEnter = (
    e: React.MouseEvent<HTMLDivElement>,
    item: ITEM,
  ) => {
    const onMouseEnter = getItemAttributes(item)
      ?.onMouseEnter as JSX.IntrinsicElements['div']['onMouseEnter'];
    onMouseEnter?.(e);
    if (getItemSubMenu(item)) {
      setActiveItem(item);
    }
  };

  useEffect(() => {
    if (depth > 2 && getItemSubMenu(itemsProp[0])) {
      setActiveItem(itemsProp[0]);
    }
  }, [depth]);

  return (
    <div
      className={cnMegaMenu(
        {
          withGlobalMenu: depth > 1,
          withBannersBar: (banners ?? []).length > 0,
          withNavBar: depth !== 2,
          bannerPosition,
        },
        [className],
      )}
      {...otherProps}
    >
      {navItems && (
        <MegaMenuNavBar
          items={navItems}
          className={cnMegaMenu('NavBar')}
          getItemActive={({ item }) => getItemActive(item)}
          getItemAs={({ item }) => getItemAs(item)}
          getItemAttributes={({ item }) =>
            ({
              ...getItemAttributes(item),
              onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) =>
                handleNavBarMouseEnter(e, item),
            } as JSX.IntrinsicElements['div'])
          }
          getItemIconLeft={({ item }) => getItemIconLeft(item)}
          getItemLabel={({ item }) => getItemLabel(item)}
          getItemOnClick={({ item }) => getItemOnClick(item)}
          onItemClick={({ e, item: { item } }) => handleNavBarClick(e, item)}
          getItemIconRight={({ item }) =>
            getItemSubMenu(item) ? IconArrowRight : undefined
          }
        />
      )}
      <div className={cnMegaMenu('Wrapper')}>
        {depth >= 2 && (
          <MegaMenuGlobal
            className={cnMegaMenu('GlobalMenu')}
            items={items}
            groups={groups}
            title={
              menuTitle ?? (activeItem ? getItemLabel(activeItem) : undefined)
            }
            getGroupKey={({ item }) => getItemKey(item)}
            getGroupLabel={({ item }) => getItemLabel(item)}
            getItemAs={({ item }) => getItemAs(item)}
            getItemAttributes={({ item }) => getItemAttributes(item)}
            getItemGroupId={({ groupId }) => groupId}
            getItemLabel={({ item }) => getItemLabel(item)}
            getItemOnClick={({ item }) => getItemOnClick(item)}
            getGroupOnClick={({ item }) => getItemOnClick(item)}
            onGroupClick={
              onItemClickProp
                ? ({ e, group: { item } }) => {
                    onItemClickProp?.({ e, item });
                  }
                : undefined
            }
            onItemClick={
              onItemClickProp
                ? ({ e, item: { item } }) => onItemClickProp?.({ e, item })
                : undefined
            }
            maxElements={menuMaxElements}
            showButtonText={menuShowButtonText}
            hideButtonText={menuHideButtonText}
          />
        )}
        {banners && (
          <MegaMenuBannerBar
            className={cnMegaMenu('BannerBar')}
            items={banners}
            view={bannerPosition === 'right' ? 'vertical' : 'horizontal'}
            onItemClick={onBannerClick}
            getItemAs={getBannerAs}
            getItemAttributes={getBannerAttributes}
            getItemDescription={getBannerDescription}
            getItemImage={getBannerImage}
            getItemLabel={getBannerLabel}
            getItemOnClick={getBannerOnClick}
          />
        )}
      </div>
    </div>
  );
};

export * from './types';
