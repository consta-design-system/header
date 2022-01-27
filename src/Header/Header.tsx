import React, { forwardRef } from 'react'

import { cn } from '@/__private__/utils/bem'
import { HeaderProps, HeaderComponent } from './types'
import { Layout } from '@/Layout'
import { Menu } from '@/Menu'
import { HeaderLogo } from './HeaderLogo'
import { HeaderLogin } from './HeaderLogin'
import { Notifications } from '@/Notifications'
import { TileMenu } from '@/TileMenu'
import { useBreakpoints } from '@consta/uikit/useBreakpoints'
import { MobileMenu } from '@/MobileMenu'

import './Header.css'

export const cnHeader = cn('Header')

const HeaderRender = (props: HeaderProps, ref: React.Ref<HTMLDivElement>) => {
  const {
    className,
    fixed,

    // Logo
    logo,
    onLogoClick,
    logoHref,

    // Menu
    menu,
    getMenuItemActive,
    getMenuItemHref,
    getMenuItemLabel,
    getMenuItemOnClick,
    getMenuItemSubMenu,
    getMenuItemTarget,
    onMenuItemClick,

    // Login
    userName,
    userAvatar,
    userInfo,
    userLogined,
    onLoginButtonClick,
    loginButtonLabel,

    // Notifications
    notifications,
    notificationsDateFormat,
    notificationsTitle,
    notificationsActions,
    notificationsGroupByDay,
    notificationsGroupLabelFormat,
    notificationsGroups,
    getNotificationsItemLabel,
    getNotificationsItemDescription,
    getNotificationsItemImage,
    getNotificationsItemRead,
    getNotificationsItemDate,
    getNotificationsItemBadges,
    getNotificationsItemActions,
    getNotificationsItemGroup,
    getNotificationsItemView,
    getNotificationsActionLabel,
    getNotificationsActionIcon,
    getNotificationsActionOnClick,
    getNotificationsGroupLabel,
    getNotificationsGroupId,

    // TileMenu
    tileMenu,
    tileMenuView,
    onTileMenuItemClick,
    getTileMenuItemDescription,
    getTileMenuItemHref,
    getTileMenuItemImage,
    getTileMenuItemOnClick,
    getTileMenuItemTitle,
    tileMenuTitle,
    ...otherProps
  } = props

  const breakpoints = useBreakpoints({ s: 800, m: 1200 })

  const elementZIndex = typeof props.style?.zIndex === 'number' ? props.style.zIndex : undefined

  if (breakpoints.m) {
    return (
      <Layout
        {...otherProps}
        ref={ref}
        className={cnHeader({ fixed }, [className])}
        rowCenter={{
          left: (
            <div className={cnHeader('RowCenterLeft', { breakpoint: 'm' })}>
              <HeaderLogo className={cnHeader('Logo')} logo={logo} href={logoHref} />
              {menu && (
                <Menu
                  className={cnHeader('Menu')}
                  items={menu}
                  getItemActive={getMenuItemActive}
                  getItemHref={getMenuItemHref}
                  getItemLabel={getMenuItemLabel}
                  getItemOnClick={getMenuItemOnClick}
                  getItemSubMenu={getMenuItemSubMenu}
                  getItemTarget={getMenuItemTarget}
                  onItemClick={onMenuItemClick}
                  style={{ zIndex: elementZIndex }}
                />
              )}
            </div>
          ),
          right: (
            <div className={cnHeader('RowCenterRight')}>
              <HeaderLogin
                userName={userName}
                userAvatar={userAvatar}
                userInfo={userInfo}
                userLogined={userLogined}
                onLoginButtonClick={onLoginButtonClick}
                loginButtonLabel={loginButtonLabel}
              />
              {tileMenu?.length && (
                <TileMenu
                  items={tileMenu}
                  view={tileMenuView}
                  onItemClick={onTileMenuItemClick}
                  getItemDescription={getTileMenuItemDescription}
                  getItemHref={getTileMenuItemHref}
                  getItemImage={getTileMenuItemImage}
                  getItemOnClick={getTileMenuItemOnClick}
                  getItemTitle={getTileMenuItemTitle}
                  listClassName={cnHeader('TileMenuList', { breakpoint: 'm' })}
                  title={tileMenuTitle}
                  style={{ zIndex: elementZIndex }}
                />
              )}
              {notifications?.length && (
                <Notifications
                  listClassName={cnHeader('NotificationsList', { breakpoint: 'm' })}
                  items={notifications}
                  itemDateFormat={notificationsDateFormat}
                  title={notificationsTitle}
                  actions={notificationsActions}
                  groupByDay={notificationsGroupByDay}
                  groupLabelFormat={notificationsGroupLabelFormat}
                  groups={notificationsGroups}
                  getItemLabel={getNotificationsItemLabel}
                  getItemDescription={getNotificationsItemDescription}
                  getItemImage={getNotificationsItemImage}
                  getItemRead={getNotificationsItemRead}
                  getItemDate={getNotificationsItemDate}
                  getItemBadges={getNotificationsItemBadges}
                  getItemActions={getNotificationsItemActions}
                  getItemGroup={getNotificationsItemGroup}
                  getItemView={getNotificationsItemView}
                  getActionLabel={getNotificationsActionLabel}
                  getActionIcon={getNotificationsActionIcon}
                  getActionOnClick={getNotificationsActionOnClick}
                  getGroupLabel={getNotificationsGroupLabel}
                  getGroupId={getNotificationsGroupId}
                  style={{ zIndex: elementZIndex }}
                />
              )}
            </div>
          ),
        }}
      />
    )
  }

  if (breakpoints.s) {
    return (
      <Layout
        {...otherProps}
        ref={ref}
        className={cnHeader(null, [className])}
        rowCenter={{
          left: (
            <div className={cnHeader('RowCenterLeft')}>
              {menu && (
                <MobileMenu
                  className={cnHeader('Menu')}
                  items={menu}
                  getItemActive={getMenuItemActive}
                  getItemHref={getMenuItemHref}
                  getItemLabel={getMenuItemLabel}
                  getItemOnClick={getMenuItemOnClick}
                  getItemSubMenu={getMenuItemSubMenu}
                  getItemTarget={getMenuItemTarget}
                  onItemClick={onMenuItemClick}
                  style={{ zIndex: elementZIndex }}
                />
              )}
              <HeaderLogo className={cnHeader('Logo')} logo={logo} href={logoHref} />
            </div>
          ),
          right: (
            <div className={cnHeader('RowCenterRight')}>
              <HeaderLogin
                userName={userName}
                userAvatar={userAvatar}
                userInfo={userInfo}
                userLogined={userLogined}
                onLoginButtonClick={onLoginButtonClick}
                loginButtonLabel={loginButtonLabel}
              />
              {tileMenu?.length && (
                <TileMenu
                  items={tileMenu}
                  view={tileMenuView}
                  onItemClick={onTileMenuItemClick}
                  getItemDescription={getTileMenuItemDescription}
                  getItemHref={getTileMenuItemHref}
                  getItemImage={getTileMenuItemImage}
                  getItemOnClick={getTileMenuItemOnClick}
                  getItemTitle={getTileMenuItemTitle}
                  listClassName={cnHeader('TileMenuList')}
                  title={tileMenuTitle}
                  isMobile
                  style={{ zIndex: elementZIndex }}
                />
              )}
              {notifications?.length && (
                <Notifications
                  listClassName={cnHeader('NotificationsList')}
                  items={notifications}
                  itemDateFormat={notificationsDateFormat}
                  title={notificationsTitle}
                  actions={notificationsActions}
                  groupByDay={notificationsGroupByDay}
                  groupLabelFormat={notificationsGroupLabelFormat}
                  groups={notificationsGroups}
                  getItemLabel={getNotificationsItemLabel}
                  getItemDescription={getNotificationsItemDescription}
                  getItemImage={getNotificationsItemImage}
                  getItemRead={getNotificationsItemRead}
                  getItemDate={getNotificationsItemDate}
                  getItemBadges={getNotificationsItemBadges}
                  getItemActions={getNotificationsItemActions}
                  getItemGroup={getNotificationsItemGroup}
                  getItemView={getNotificationsItemView}
                  getActionLabel={getNotificationsActionLabel}
                  getActionIcon={getNotificationsActionIcon}
                  getActionOnClick={getNotificationsActionOnClick}
                  getGroupLabel={getNotificationsGroupLabel}
                  getGroupId={getNotificationsGroupId}
                  isMobile
                  style={{ zIndex: elementZIndex }}
                />
              )}
            </div>
          ),
        }}
      />
    )
  }

  return (
    <Layout
      {...otherProps}
      ref={ref}
      className={cnHeader(null, [className])}
      rowCenter={{
        left: (
          <div className={cnHeader('RowCenterLeft')}>
            {menu && (
              <MobileMenu
                className={cnHeader('Menu')}
                items={menu}
                getItemActive={getMenuItemActive}
                getItemHref={getMenuItemHref}
                getItemLabel={getMenuItemLabel}
                getItemOnClick={getMenuItemOnClick}
                getItemSubMenu={getMenuItemSubMenu}
                getItemTarget={getMenuItemTarget}
                onItemClick={onMenuItemClick}
                style={{ zIndex: elementZIndex }}
                header={
                  <div className={cnHeader('MobileMenuHeader')}>
                    <div>
                      <HeaderLogin
                        userName={userName}
                        userAvatar={userAvatar}
                        userInfo={userInfo}
                        userLogined={userLogined}
                        onLoginButtonClick={onLoginButtonClick}
                        loginButtonLabel={loginButtonLabel}
                      />
                    </div>
                    {tileMenu?.length && notifications?.length && (
                      <div>
                        {tileMenu?.length && (
                          <TileMenu
                            items={tileMenu}
                            view={tileMenuView}
                            onItemClick={onTileMenuItemClick}
                            getItemDescription={getTileMenuItemDescription}
                            getItemHref={getTileMenuItemHref}
                            getItemImage={getTileMenuItemImage}
                            getItemOnClick={getTileMenuItemOnClick}
                            getItemTitle={getTileMenuItemTitle}
                            listClassName={cnHeader('TileMenuList')}
                            title={tileMenuTitle}
                            isMobile
                            style={{ zIndex: elementZIndex }}
                          />
                        )}
                        {notifications?.length && (
                          <Notifications
                            listClassName={cnHeader('NotificationsList')}
                            items={notifications}
                            itemDateFormat={notificationsDateFormat}
                            title={notificationsTitle}
                            actions={notificationsActions}
                            groupByDay={notificationsGroupByDay}
                            groupLabelFormat={notificationsGroupLabelFormat}
                            groups={notificationsGroups}
                            getItemLabel={getNotificationsItemLabel}
                            getItemDescription={getNotificationsItemDescription}
                            getItemImage={getNotificationsItemImage}
                            getItemRead={getNotificationsItemRead}
                            getItemDate={getNotificationsItemDate}
                            getItemBadges={getNotificationsItemBadges}
                            getItemActions={getNotificationsItemActions}
                            getItemGroup={getNotificationsItemGroup}
                            getItemView={getNotificationsItemView}
                            getActionLabel={getNotificationsActionLabel}
                            getActionIcon={getNotificationsActionIcon}
                            getActionOnClick={getNotificationsActionOnClick}
                            getGroupLabel={getNotificationsGroupLabel}
                            getGroupId={getNotificationsGroupId}
                            isMobile
                            style={{ zIndex: elementZIndex }}
                          />
                        )}
                      </div>
                    )}
                  </div>
                }
              />
            )}
            <HeaderLogo className={cnHeader('Logo')} logo={logo} href={logoHref} />
          </div>
        ),
      }}
    />
  )
}

export const Header = forwardRef(HeaderRender) as HeaderComponent

export * from './types'
