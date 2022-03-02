import React, { forwardRef } from 'react'

import { Badge } from '@consta/uikit/Badge'
import { useForkRef } from '@consta/uikit/useForkRef'

import { useHideElementsInLine } from '@consta/uikit/useHideElementsInLine'
import { cn } from '@/__private__/utils/bem'

import { BadgesProps, BadgesComponent } from './types'
import { withDefaultGetters } from './helpers'

import './Badges.css'

export const cnBadges = cn('Badges')

const BadgesRender = (props: BadgesProps, ref: React.Ref<HTMLDivElement>) => {
  const {
    className,
    items = [],
    view,
    form,
    size,
    getItemIcon,
    getItemLabel,
    getItemStatus,
    ...otherProps
  } = withDefaultGetters(props)

  const { visibleItems, itemsRefs, wrapperRef, hiddenItems, moreRef } = useHideElementsInLine(items)

  return (
    <div
      {...otherProps}
      ref={useForkRef([ref, wrapperRef])}
      className={cnBadges(null, [className])}
    >
      {items.map((item, index) => {
        return (
          <Badge
            className={cnBadges('Badge', { hidden: !visibleItems[index] })}
            key={cnBadges('Badge', { index })}
            label={getItemLabel(item)}
            status={getItemStatus(item) || 'normal'}
            icon={getItemIcon(item)}
            view={view}
            form={form}
            size={size}
            ref={itemsRefs[index]}
          />
        )
      })}
      <Badge
        className={cnBadges('Badge', {
          hidden: hiddenItems.length <= 0,
          zero: hiddenItems.length <= 0,
        })}
        key="more"
        label={`+${hiddenItems.length}`}
        status="system"
        form={form}
        size={size}
        view={view}
        ref={moreRef}
      />
    </div>
  )
}

export const Badges = forwardRef(BadgesRender) as BadgesComponent

export * from './types'
