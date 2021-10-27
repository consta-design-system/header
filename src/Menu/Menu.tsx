import React, { forwardRef, useState, useRef, useCallback } from 'react'

import { ContextMenu } from '@consta/uikit/ContextMenu'
import { IconSelect } from '@consta/uikit/IconSelect'
import { Button } from '@consta/uikit/Button'
import { IconMeatball } from '@consta/uikit/IconMeatball'
import { useMutableRef } from '@consta/uikit/useMutableRef'
import { CSSTransition } from 'react-transition-group'

import { cn } from '@/__private__/utils/bem'
import { useHideElementsLine } from '@/__private__/hooks/useHideElementsLine'
import { cnMixPopoverAnimateForCssTransition } from '@/__private__/mixs/MixPopoverAnimate/MixPopoverAnimate'

import { withDefaultGetters, getItemClick, animateTimeout } from './helpers'
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

  const { visibleItems, itemsRefs, wrapperRef, hiddenItems, moreRef } = useHideElementsLine<
    HTMLLIElement,
    HTMLUListElement,
    typeof items[number]
  >(items)

  const moreButtonRef = useRef<HTMLButtonElement>(null)

  const getItemHrefRef = useMutableRef(getItemHref)

  const getItemAs = useCallback((item: typeof items[number]) => {
    if (!!getItemHrefRef.current(item)) {
      return 'a'
    }
    return 'span'
  }, [])

  const getItemHTMLAttributes = useCallback((item: typeof items[number]) => {
    if (!!getItemHrefRef.current(item)) {
      return { href: getItemHrefRef.current(item) }
    }
    return {}
  }, [])

  return (
    <nav
      {...otherProps}
      className={cnMenu(null, [className])}
      onMouseLeave={() => setOpenedSubMenu(undefined)}
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
              className={cnMenu('Item', { hidden })}
              key={cnMenu('Item', { index })}
              ref={itemsRefs[index]}
              onMouseEnter={() => setOpenedSubMenu(index)}
            >
              <Tag
                className={cnMenu('Link', { active, opened })}
                href={href}
                target={target}
                onClick={getItemClick(item, getItemOnClick, onItemClick)}
              >
                {label} {subItems && <IconSelect size="s" className={cnMenu('Arrow')} />}
              </Tag>
              <CSSTransition
                in={subItems && subItems.length > 0 && opened}
                classNames={cnMixPopoverAnimateForCssTransition}
                unmountOnExit
                timeout={animateTimeout}
              >
                <ContextMenu
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
                />
              </CSSTransition>
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
            <CSSTransition
              in={openedSubMenu === 'more'}
              classNames={cnMixPopoverAnimateForCssTransition}
              unmountOnExit
              timeout={animateTimeout}
            >
              <ContextMenu
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
              />
            </CSSTransition>
          </li>
        )}
      </ul>
    </nav>
  )
}

export const Menu = forwardRef(MenuRender) as MenuComponent

export * from './types'
