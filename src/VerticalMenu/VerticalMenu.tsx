import React, { useState, useCallback } from 'react'

import { cn } from '@/__private__/utils/bem'

import { withDefaultGetters, getItemClick } from './helpers'
import { VerticalMenuComponent, Level } from './types'
import './VerticalMenu.css'
import { VerticalMenuLevel } from './VerticalMenuLevel/VerticalMenuLevel'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { cnForCssTransition } from '@consta/uikit/__internal__/src/utils/cnForCssTransition'
import { useDebounce } from '@consta/uikit/useDebounce'

export const cnVerticalMenu = cn('VerticalMenu')

const transitionCn = cnForCssTransition(cnVerticalMenu, 'Level')

export const VerticalMenu: VerticalMenuComponent = props => {
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
    ...otherProps
  } = withDefaultGetters(props)

  const [levels, setLevels] = useState<Array<Level<typeof items[number]>>>([{ items }])

  const [animationBack, setAnimationBack] = useState<boolean>(false)

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

  return (
    <div {...otherProps} className={cnVerticalMenu({ animationBack }, [className])}>
      <TransitionGroup enter exit className={cnVerticalMenu('Levels')}>
        {levels.map((level, index) => {
          const levelNum = index + 1
          if (levelNum >= levels.length) {
            return (
              <CSSTransition classNames={transitionCn} key={levelNum} timeout={250}>
                <VerticalMenuLevel
                  items={level.items}
                  label={level.label}
                  addLevel={addLevel}
                  removeLevel={removeLevel}
                  className={cnVerticalMenu('Level', {
                    current: levelNum === levels.length,
                  })}
                  key={levelNum}
                  header={index === 0 && header}
                  getItemActive={getItemActive}
                  getItemHref={getItemHref}
                  getItemLabel={getItemLabel}
                  getItemOnClick={menuItem => getItemClick(menuItem, getItemOnClick, onItemClick)}
                  getItemTarget={getItemTarget}
                  getItemSubMenu={getItemSubMenu}
                />
              </CSSTransition>
            )
          }
        })}
      </TransitionGroup>
    </div>
  )
}

export * from './types'
