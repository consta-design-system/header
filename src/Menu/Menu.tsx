import React, { forwardRef, useState, useRef, useCallback, useEffect } from 'react'

import { IconSelect } from '@consta/uikit/IconSelect'
import { Button } from '@consta/uikit/Button'
import { IconMeatball } from '@consta/uikit/IconMeatball'
import { useMutableRef } from '@consta/uikit/useMutableRef'
import { useDebounce } from '@consta/uikit/useDebounce'
import { useFlag } from '@consta/uikit/useFlag'

import { AnimatedContextMenu } from '@/__private__/AnimatedContextMenu/AnimatedContextMenu'

import { cn } from '@/__private__/utils/bem'
import { useHideElementsInLine } from '@consta/uikit/useHideElementsInLine'

import { animateTimeout } from '@consta/uikit/MixPopoverAnimate'

import { withDefaultGetters } from './helpers'

import { getItemClick } from '@/__private__/helpers/getItemClick'
import { MenuComponent, MenuProps } from './types'
import './Menu.css'

export const cnMenu = cn('Menu')

const MenuRender = (props: MenuProps, ref: React.Ref<HTMLDivElement>) => {
  const {
    items,
    className,
    getItemActive,
    getItemHref,
    getItemLabel,
    getItemOnClick,
    getItemTarget,
    getItemSubMenu,
    onItemClick,
    ...otherProps
  } = withDefaultGetters(props)

  const [openedSubMenu, setOpenedSubMenu] = useState<number | 'more' | undefined>()
  const [mouseOnMenu, setMouseOnMenu] = useFlag()

  const { visibleItems, itemsRefs, wrapperRef, hiddenItems, moreRef } = useHideElementsInLine<
    typeof items[number],
    HTMLLIElement,
    HTMLUListElement
  >(items)

  const moreButtonRef = useRef<HTMLButtonElement>(null)

  const getItemHrefRef = useMutableRef(getItemHref)
  const getItemTargetRef = useMutableRef(getItemTarget)

  const getItemAs = useCallback((item: typeof items[number]) => {
    if (!!getItemHrefRef.current(item)) {
      return 'a'
    }
    return 'span'
  }, [])

  const getItemHTMLAttributes = useCallback((item: typeof items[number]) => {
    const href = getItemHrefRef.current(item)
    const target = getItemTargetRef.current(item)

    return {
      ...(href && { href: getItemHrefRef.current(item) }),
      ...(target && { href: getItemTargetRef.current(item) }),
    }
  }, [])

  const elementZIndex = typeof props.style?.zIndex === 'number' ? props.style.zIndex + 1 : undefined

  useEffect(
    useDebounce(() => {
      if (!mouseOnMenu) {
        setOpenedSubMenu(undefined)
      }
    }, animateTimeout),
    [mouseOnMenu]
  )

  return (
    <nav
      {...otherProps}
      className={cnMenu(null, [className])}
      onMouseLeave={setMouseOnMenu.off}
      onMouseEnter={setMouseOnMenu.on}
      ref={ref}
    >
      <ul className={cnMenu('List')} ref={wrapperRef}>
        {items.map((item, index) => {
          const label = getItemLabel(item)
          const href = getItemHref(item)
          const target = href ? getItemTarget(item) : undefined
          const active = getItemActive(item)
          const Tag = href ? 'a' : 'span'
          const subItems = getItemSubMenu(item)
          const opened = openedSubMenu === index
          const hidden = !visibleItems[index]
          return (
            <li
              className={cnMenu('Item', { hidden, active, opened })}
              key={cnMenu('Item', { index })}
              ref={itemsRefs[index]}
              onMouseEnter={() => setOpenedSubMenu(index)}
            >
              <Tag
                className={cnMenu('Link')}
                href={href}
                target={target}
                onClick={getItemClick(item, getItemOnClick, onItemClick)}
              >
                {label}
              </Tag>
              {subItems && <IconSelect size="s" className={cnMenu('Arrow')} />}
              <AnimatedContextMenu
                isOpen={subItems && subItems.length > 0 && opened}
                items={subItems || []}
                getLabel={getItemLabel}
                getSubItems={getItemSubMenu}
                anchorRef={itemsRefs[index]}
                getOnClick={contextMenuItem =>
                  getItemClick(contextMenuItem, getItemOnClick, onItemClick)
                }
                direction="downStartLeft"
                possibleDirections={[
                  'upStartLeft',
                  'downStartRight',
                  'downStartLeft',
                  'upStartRight',
                ]}
                spareDirection="downStartLeft"
                getItemAs={getItemAs}
                getItemHTMLAttributes={getItemHTMLAttributes}
                style={{ zIndex: elementZIndex }}
              />
            </li>
          )
        })}
        {hiddenItems.length > 0 && (
          <li
            className={cnMenu('Item')}
            key={cnMenu('Item', { more: true })}
            ref={moreRef}
            onMouseEnter={() => setOpenedSubMenu('more')}
          >
            <Button iconLeft={IconMeatball} ref={moreButtonRef} size="xs" view="clear" />
            <AnimatedContextMenu
              isOpen={openedSubMenu === 'more'}
              items={hiddenItems}
              getLabel={getItemLabel}
              getSubItems={getItemSubMenu}
              anchorRef={moreButtonRef}
              getOnClick={contextMenuItem =>
                getItemClick(contextMenuItem, getItemOnClick, onItemClick)
              }
              direction="downStartLeft"
              possibleDirections={[
                'upStartLeft',
                'downStartRight',
                'downStartLeft',
                'upStartRight',
              ]}
              spareDirection="downStartRight"
              getItemAs={getItemAs}
              getItemHTMLAttributes={getItemHTMLAttributes}
              style={{ zIndex: elementZIndex }}
              offset={8}
            />
          </li>
        )}
      </ul>
    </nav>
  )
}

export const Menu = forwardRef(MenuRender) as MenuComponent

export * from './types'
