import React, { forwardRef } from 'react'

import { cn } from '@/__private__/utils/bem'

import { MobileMenuProps, MobileMenuComponent } from './types'

import { VerticalMenu } from '@/VerticalMenu'
import { Sidebar } from '@consta/uikit/Sidebar'

import { Button } from '@consta/uikit/Button'

import { IconHamburger } from '@consta/uikit/IconHamburger'
import { useFlag } from '@consta/uikit/useFlag'

import './MobileMenu.css'

export const cnMobileMenu = cn('MobileMenu')

const MobileMenuRender = (props: MobileMenuProps, ref: React.Ref<HTMLButtonElement>) => {
  const {
    items,
    className,
    getItemActive,
    getItemHref,
    getItemLabel,
    getItemOnClick,
    getItemTarget,
    getItemSubMenu,
    header,
    onItemClick,
    sidebarClassName,
    footer,
    ...otherProps
  } = props

  const [visibleMenu, { toogle, off }] = useFlag()

  const elementZIndex = typeof props.style?.zIndex === 'number' ? props.style.zIndex + 1 : undefined

  return (
    <>
      <Button
        {...otherProps}
        size="s"
        view="clear"
        className={cnMobileMenu(null, [className])}
        iconLeft={IconHamburger}
        ref={ref}
        onClick={toogle}
      />
      <Sidebar
        className={cnMobileMenu('Sidebar', [sidebarClassName])}
        position="left"
        isOpen={visibleMenu}
        onClickOutside={off}
        size="m"
        style={{ zIndex: elementZIndex }}
      >
        <VerticalMenu
          className={cnMobileMenu('Menu')}
          items={items}
          getItemActive={getItemActive}
          getItemHref={getItemHref}
          getItemLabel={getItemLabel}
          getItemOnClick={getItemOnClick}
          getItemTarget={getItemTarget}
          getItemSubMenu={getItemSubMenu}
          onItemClick={onItemClick}
          header={header}
          footer={footer}
        />
      </Sidebar>
    </>
  )
}

export const MobileMenu = forwardRef(MobileMenuRender) as MobileMenuComponent

export * from './types'
