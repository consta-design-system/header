import React, { useState, useCallback, forwardRef, useEffect } from 'react'

import { cn } from '@/__private__/utils/bem'

import { withDefaultGetters } from './helpers'
import { getItemClick } from '@/__private__/helpers/getItemClick'
import { VerticalMenuComponent, Level, VerticalMenuProps, DefaultItem } from './types'
import './VerticalMenu.css'
import { VerticalMenuLevel } from './VerticalMenuLevel/VerticalMenuLevel'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { cnForCssTransition } from '@consta/uikit/__internal__/src/utils/cnForCssTransition'
import { useDebounce } from '@consta/uikit/useDebounce'
import { useMutableRef } from '@consta/uikit/useMutableRef'
import { useRefs } from '@consta/uikit/useRefs'

export const cnVerticalMenu = cn('VerticalMenu')

const transitionCn = cnForCssTransition(cnVerticalMenu, 'Level')

const VerticalMenuRender = (props: VerticalMenuProps, ref: React.Ref<HTMLDivElement>) => {
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
    getItemGroup,
    footer,
    ...otherProps
  } = withDefaultGetters(props)

  const [levels, setLevels] = useState<Array<Level<DefaultItem>>>([{ items, id: '0' }])
  const [animationBack, setAnimationBack] = useState<boolean>(false)

  const levelRefs = useRefs<HTMLDivElement>(levels.length)

  const disableAnimationBack = useDebounce(() => setAnimationBack(false), 250)

  const addLevel = useCallback(
    (level: Level<typeof items[number]>) =>
      setLevels(l => {
        const newLevels = Array.from(l)
        newLevels.push(level)
        return newLevels
      }),
    []
  )

  const removeLevel = useCallback(() => {
    setAnimationBack(true)
    setLevels(l => {
      const newLevels = Array.from(l)
      newLevels.pop()
      return newLevels
    })
    disableAnimationBack()
  }, [])

  const getItemSubMenuRef = useMutableRef(getItemSubMenu)
  const getItemLabelRef = useMutableRef(getItemLabel)

  useEffect(() => {
    // обновляем оровни при смене items
    const keys = levels[levels.length - 1].id.split('-').slice(1)

    let id = '0'

    const newLevels: Array<Level<DefaultItem>> = [{ items, id }]

    keys.forEach(index => {
      const item = newLevels[newLevels.length - 1].items[Number(index)]

      if (!item) {
        return
      }

      const levelItems = getItemSubMenuRef.current(item)
      const levelLabel = getItemLabelRef.current(item)
      id = `${id}-${index}`

      if (!levelItems) {
        return
      }

      newLevels.push({ items: levelItems, label: levelLabel, id })
    })

    setLevels(newLevels)
  }, [items])

  return (
    <div {...otherProps} className={cnVerticalMenu({ animationBack }, [className])} ref={ref}>
      <TransitionGroup enter exit className={cnVerticalMenu('Levels')}>
        {levels.map((level, index) => {
          const levelNum = index + 1
          if (levelNum >= levels.length) {
            return (
              <CSSTransition
                classNames={transitionCn}
                key={levelNum}
                timeout={250}
                nodeRef={levelRefs[index]}
              >
                <VerticalMenuLevel
                  ref={levelRefs[index]}
                  id={level.id}
                  items={level.items}
                  label={level.label}
                  addLevel={addLevel}
                  removeLevel={removeLevel}
                  className={cnVerticalMenu('Level', {
                    current: levelNum === levels.length,
                  })}
                  key={levelNum}
                  header={index === 0 && header}
                  footer={index === 0 && footer}
                  getItemActive={getItemActive}
                  getItemHref={getItemHref}
                  getItemLabel={getItemLabel}
                  getItemOnClick={menuItem => getItemClick(menuItem, getItemOnClick, onItemClick)}
                  getItemTarget={getItemTarget}
                  getItemSubMenu={getItemSubMenu}
                  getItemGroup={getItemGroup}
                />
              </CSSTransition>
            )
          }
        })}
      </TransitionGroup>
    </div>
  )
}

export const VerticalMenu = forwardRef(VerticalMenuRender) as VerticalMenuComponent

export * from './types'
