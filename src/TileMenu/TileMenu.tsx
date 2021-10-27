import React, { forwardRef, useRef, useState, useCallback } from 'react'

import { cn } from '@/__private__/utils/bem'
import { IconBento } from '@consta/uikit/IconBento'
import { Button } from '@consta/uikit/Button'
import { CSSTransition } from 'react-transition-group'
import { useFlag } from '@consta/uikit/useFlag'
import { useForkRef } from '@consta/uikit/useForkRef'
import { Popover, Direction } from '@consta/uikit/Popover'
import { cnMixPopoverArrow } from '@/__private__/mixs/MixPopoverArrow/MixPopoverArrow'
import { cnMixPopoverAnimateForCssTransition } from '@/__private__/mixs/MixPopoverAnimate/MixPopoverAnimate'
import { Sidebar } from '@/__private__/components/Sidebar'
import { TileMenuProps, tileMenuPropViewDefault, TileMenuComponent } from './types'

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
    getItemTitle,
    title,
    ...otherProps
  } = props

  const buttonRef = useRef<HTMLButtonElement>(null)

  const [direction, setDirection] = useState<Direction | undefined>(undefined)

  const [visibleMenu, { toogle, off }] = useFlag()

  const onSetDirection = useCallback((dir: Direction) => {
    setDirection(dir)
  }, [])

  const listProps = {
    className: listClassName,
    getItemDescription,
    getItemHref,
    getItemImage,
    getItemOnClick,
    getItemTitle,
    items,
    view,
  }

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
        <Sidebar isOpen={visibleMenu} onClickOutside={off} onClose={off} title={title}>
          <TileMenuList {...listProps} />
        </Sidebar>
      ) : (
        <CSSTransition
          classNames={cnMixPopoverAnimateForCssTransition}
          timeout={200}
          unmountOnExit
          in={visibleMenu}
        >
          <Popover
            className={cnTileMenu('Popover', { view })}
            anchorRef={buttonRef}
            arrowOffset={ARROW_OFFSET + ARROW_SIZE}
            offset={ARROW_SIZE + 4}
            onSetDirection={onSetDirection}
            style={{
              ['--popover-arrow-size' as string]: `${ARROW_SIZE}px`,
              ['--popover-arrow-offset' as string]: `${ARROW_OFFSET}px`,
            }}
            onClickOutside={off}
          >
            <div className={cnMixPopoverArrow({ direction })} />
            <div className={cnTileMenu('ListWrapper')}>
              <TileMenuList {...listProps} />
            </div>
          </Popover>
        </CSSTransition>
      )}
    </>
  )
}

export const TileMenu = forwardRef(TileMenuRender) as TileMenuComponent

export * from './types'
