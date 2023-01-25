import './MegaMenu.css';

import { IconArrowRight } from '@consta/uikit/IconArrowRight';
import {
  getLastPoint,
  useComponentBreakpoints,
} from '@consta/uikit/useComponentBreakpoints';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import { cn } from '##/utils/bem';

import { BannerBar } from '../BannerBar';
import { GlobalMenu } from '../GlobalMenu';
import { NavBar } from '../NavBar';
import {
  getItemsDepth,
  separateItemsByDepth,
  withDefaultGetters,
} from './helper';
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

  const getItemActive = (item: ITEM) => {
    if (activeItem) {
      return getItemKey(activeItem) === getItemKey(item);
    }
    return false;
  };

  const globalMenuRef = useRef<HTMLDivElement>(null);

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

  const columns = getLastPoint(
    useComponentBreakpoints(globalMenuRef, {
      1: 0,
      2: 600,
      3: 1000,
      4: 1600,
    }),
  );

  useEffect(() => {
    if (depth > 2 && getItemSubMenu(itemsProp[0])) {
      setActiveItem(itemsProp[0]);
    }
  }, [depth]);

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
        <NavBar
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
          <GlobalMenu
            className={cnMegaMenu('GlobalMenu')}
            items={items}
            ref={globalMenuRef}
            columns={Number(columns)}
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
            onGroupClick={({ e, group: { item } }) => {
              onItemClickProp?.({ e, item });
            }}
            onItemClick={({ e, item: { item } }) =>
              onItemClickProp?.({ e, item })
            }
            maxElements={menuMaxElements}
            showButtonText={menuShowButtonText}
            hideButtonText={menuHideButtonText}
          />
        )}
        {banners && (
          <BannerBar
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
