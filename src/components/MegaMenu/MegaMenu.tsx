import './MegaMenu.css';

import { IconArrowRight } from '@consta/uikit/IconArrowRight';
import {
  PortalWithTheme,
  usePortalContext,
} from '@consta/uikit/PortalWithTheme';
import { useTheme } from '@consta/uikit/Theme';
import { useClickOutside } from '@consta/uikit/useClickOutside';
import { useComponentBreakpoints } from '@consta/uikit/useComponentBreakpoints';
import { useComponentSize } from '@consta/uikit/useComponentSize';
import { useGlobalKeys } from '@consta/uikit/useGlobalKeys';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';

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

const ContextConsumer: React.FC<{
  onClickOutside?: (event: MouseEvent) => void;
  ignoreClicksInsideRefs?: ReadonlyArray<React.RefObject<HTMLElement>>;
  children: React.ReactNode;
}> = ({ onClickOutside, children, ignoreClicksInsideRefs }) => {
  const { refs } = usePortalContext();

  useClickOutside({
    isActive: !!onClickOutside,
    ignoreClicksInsideRefs: [
      ...(ignoreClicksInsideRefs || []),
      ...(refs || []),
    ],
    handler: onClickOutside,
  });

  return children as React.ReactElement;
};

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
    onBannerClick,
    getBannerAs,
    getBannerAttributes,
    getBannerDescription,
    getBannerImage,
    getBannerLabel,
    getBannerOnClick,
    // Others
    isOpen,
    onClickOutside,
    onEsc,
    className,
    style,
    offset = 0,
    view = 'vertical',
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
  const menuRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { theme } = useTheme();

  const depth = useMemo(
    () => getItemsDepth(itemsProp, getItemSubMenu),
    [itemsProp],
  );

  const { two, three } = useComponentBreakpoints(globalMenuRef, {
    two: 600,
    three: 1000,
  });

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

  const { height: globalMenuHeight } = useComponentSize(globalMenuRef);

  const { navItems, items, groups } = useMemo(() => {
    return {
      navItems: depth < 2 || depth > 2 ? firstLevel : undefined,
      groups: depth < 3 ? firstLevel : secondLevel,
      items: depth < 3 ? secondLevel : thirdLevel,
    };
  }, [depth, firstLevel, secondLevel, thirdLevel]);

  const columns = useMemo(() => {
    if (three) return 3;
    if (two) return 2;
    return 1;
  }, [two, three]);

  useEffect(() => {
    if (depth > 2 && getItemSubMenu(itemsProp[0])) {
      setActiveItem(itemsProp[0]);
    }
  }, [depth]);

  useGlobalKeys({
    Escape: (e) => isOpen && onEsc?.(e),
  });

  const handleNavBarClick = (e: React.MouseEvent, item: ITEM) => {
    onItemClickProp?.({ e, item });
    if (getItemSubMenu(item)) {
      setActiveItem(item);
    }
  };

  return (
    <Transition in={isOpen} unmountOnExit timeout={240} nodeRef={containerRef}>
      {(animate) => (
        <PortalWithTheme
          preset={theme}
          style={{
            ['--mega-menu-offset' as string]: `${offset}px`,
            ...style,
          }}
          className={cnMegaMenu(
            {
              view,
              withGlobalMenu: depth > 1,
              withBannersBar: (banners ?? []).length > 0,
              withNavBar: depth !== 2,
            },
            [className],
          )}
          ref={containerRef}
          {...otherProps}
        >
          <div className={cnMegaMenu('Overlay', { animate })} />
          <ContextConsumer
            onClickOutside={onClickOutside}
            ignoreClicksInsideRefs={[menuRef]}
          >
            <div
              ref={menuRef}
              className={cnMegaMenu('Window', { animate, view })}
            >
              {navItems && (
                <NavBar
                  items={navItems}
                  className={cnMegaMenu('NavBar')}
                  getItemActive={({ item }) => getItemActive(item)}
                  getItemAs={({ item }) => getItemAs(item)}
                  getItemAttributes={({ item }) => getItemAttributes(item)}
                  getItemIconLeft={({ item }) => getItemIconLeft(item)}
                  getItemLabel={({ item }) => getItemLabel(item)}
                  getItemOnClick={({ item }) => getItemOnClick(item)}
                  onItemClick={({ e, item: { item } }) =>
                    handleNavBarClick(e, item)
                  }
                  getItemIconRight={({ item }) =>
                    getItemSubMenu(item) ? IconArrowRight : undefined
                  }
                />
              )}
              <div className={cnMegaMenu('Wrapper')}>
                {depth >= 2 && (
                  <GlobalMenu
                    ref={globalMenuRef}
                    className={cnMegaMenu('GlobalMenu')}
                    items={items}
                    columns={columns}
                    groups={groups}
                    title={
                      menuTitle ??
                      (activeItem ? getItemLabel(activeItem) : undefined)
                    }
                    getGroupKey={({ item }) => getItemKey(item)}
                    getGroupLabel={({ item }) => getItemLabel(item)}
                    getItemAs={({ item }) => getItemAs(item)}
                    getItemAttributes={({ item }) => getItemAttributes(item)}
                    getItemGroupId={({ groupId }) => groupId}
                    getItemLabel={({ item }) => getItemLabel(item)}
                    getItemOnClick={({ item }) => getItemOnClick(item)}
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
                    style={{
                      ['--mega-menu-banners-height' as string]: globalMenuHeight
                        ? `${globalMenuHeight}px`
                        : 'auto',
                    }}
                    view={view}
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
          </ContextConsumer>
        </PortalWithTheme>
      )}
    </Transition>
  );
};

export * from './types';
