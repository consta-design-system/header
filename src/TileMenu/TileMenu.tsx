import React, { forwardRef, useRef, useState } from 'react'

import { cn } from '@/__private__/utils/bem'
import { IconBento } from '@consta/uikit/IconBento'
import { Button } from '@consta/uikit/Button'
import { Transition } from 'react-transition-group'
import { useFlag } from '@consta/uikit/useFlag'
import { useForkRef } from '@consta/uikit/useForkRef'
import { Popover, Direction } from '@consta/uikit/Popover'
import { cnMixPopoverArrow } from '@/__private__/mixs/MixPopoverArrow/MixPopoverArrow'
import { Sidebar } from '@/__private__/components/Sidebar'
import { TileMenuProps, tileMenuPropViewDefault, TileMenuComponent } from './types'
import { cnMixPopoverAnimate, animateTimeout } from '@consta/uikit/MixPopoverAnimate'

import { TileMenuList } from './TileMenuList/TileMenuList'

import './TileMenu.css'

export const cnTileMenu = cn('TileMenu')

const ARROW_SIZE = 6
const ARROW_OFFSET = 10

function TileMenuRender(props: TileMenuProps, ref: React.Ref<HTMLButtonElement>) {
  const {
    view = tileMenuPropViewDefault,
    items,
    isMobile,
    className,
    children,
    listClassName,
    getItemDescription,
    getItemHref,
    getItemImage,
    getItemOnClick,
    getItemLabel,
    title,
    onItemClick,
    ...otherProps
  } = props

  const buttonRef = useRef<HTMLButtonElement>(null)

  const [direction, setDirection] = useState<Direction | undefined>(undefined)

  const [visibleMenu, { toogle, off }] = useFlag()

  const listProps = {
    className: listClassName,
    getItemDescription,
    getItemHref,
    getItemImage,
    getItemOnClick,
    getItemLabel,
    items,
    view,
    onItemClick,
  }

  const elementZIndex = typeof props.style?.zIndex === 'number' ? props.style.zIndex + 1 : undefined

  return (
    <>
      <Button
        {...otherProps}
        size="s"
        view="clear"
        className={cnTileMenu(null, [className])}
        iconLeft={IconBento}
        ref={useForkRef([ref, buttonRef])}
        onClick={toogle}
      />
      {isMobile ? (
        <Sidebar
          isOpen={visibleMenu}
          onClickOutside={off}
          onClose={off}
          title={title}
          style={{ zIndex: elementZIndex }}
        >
          <TileMenuList {...listProps} />
        </Sidebar>
      ) : (
        <Transition timeout={animateTimeout} unmountOnExit in={visibleMenu}>
          {animate => (
            <Popover
              className={cnTileMenu('Popover', { view }, [
                cnMixPopoverAnimate({ animate, direction }),
              ])}
              anchorRef={buttonRef}
              arrowOffset={ARROW_OFFSET + ARROW_SIZE}
              offset={ARROW_SIZE + 4}
              onSetDirection={setDirection}
              style={{
                ['--popover-arrow-size' as string]: `${ARROW_SIZE}px`,
                ['--popover-arrow-offset' as string]: `${ARROW_OFFSET}px`,
                zIndex: elementZIndex,
              }}
              onClickOutside={off}
            >
              <div className={cnMixPopoverArrow({ direction })} />
              <div className={cnTileMenu('ListWrapper')}>
                <TileMenuList {...listProps} />
              </div>
            </Popover>
          )}
        </Transition>
      )}
    </>
  )
}

export const TileMenu = forwardRef(TileMenuRender) as TileMenuComponent

export * from './types'
