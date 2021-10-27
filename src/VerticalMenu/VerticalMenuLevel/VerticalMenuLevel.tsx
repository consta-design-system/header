import React from 'react'

import { cn } from '@/__private__/utils/bem'

import { VerticalMenuLevelComponent } from '../types'
import './VerticalMenuLevel.css'
import { VerticalMenuItem } from '../VerticalMenuItem/VerticalMenuItem'
import { Text } from '@consta/uikit/Text'
import { IconArrowLeft } from '@consta/uikit/IconArrowLeft'
import { Button } from '@consta/uikit/Button'
import { cnMixSpace } from '@consta/uikit/MixSpace'

import './VerticalMenuLevel.css'

export const cnVerticalMenuLevel = cn('VerticalMenuLevel')

export const VerticalMenuLevel: VerticalMenuLevelComponent = props => {
  const {
    items,
    className,
    getItemActive,
    getItemHref,
    getItemLabel,
    getItemOnClick,
    getItemTarget,
    getItemSubMenu,
    addLevel,
    removeLevel,
    label: levelLabel,
    header,
    ...otherProps
  } = props

  return (
    <div {...otherProps} className={cnVerticalMenuLevel(null, [className])}>
      {levelLabel && (
        <div className={cnVerticalMenuLevel('Header', [cnMixSpace({ p: 's', pL: 'xl' })])}>
          <Button iconLeft={IconArrowLeft} view="clear" size="s" onClick={removeLevel} />
          <Text className={cnMixSpace({ mL: 's' })} truncate>
            {levelLabel}
          </Text>
        </div>
      )}
      {header}
      <nav className={cnVerticalMenuLevel('Nav')}>
        {items.map((item, index) => {
          const subMenu = getItemSubMenu(item)
          const withSubMenu = (subMenu && subMenu.length > 0) || false
          const itemClick = getItemOnClick(item)
          const label = getItemLabel(item)
          const onClick = withSubMenu
            ? (e: React.MouseEvent<Element, MouseEvent>) => {
                itemClick?.(e)
                subMenu && addLevel({ items: subMenu, label })
              }
            : itemClick
          return (
            <VerticalMenuItem
              key={index}
              label={label}
              href={getItemHref(item)}
              active={getItemActive(item)}
              onClick={onClick}
              target={getItemTarget(item)}
              withSubMenu={withSubMenu}
            />
          )
        })}
      </nav>
    </div>
  )
}
