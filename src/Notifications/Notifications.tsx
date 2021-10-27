import React, { forwardRef, useRef, useState, useCallback } from 'react'

import { CSSTransition } from 'react-transition-group'
import { cn } from '@/__private__/utils/bem'

import { NotificationsProps, NotificationsComponent } from './types'

import { NotificationsList } from '@/NotificationsList'
import { Sidebar } from '@/__private__/components/Sidebar'

import { Button } from '@consta/uikit/Button'

import { Popover, Direction } from '@consta/uikit/Popover'
import { useForkRef } from '@consta/uikit/useForkRef'
import { IconRing } from '@consta/uikit/IconRing'
import { useFlag } from '@consta/uikit/useFlag'
import { cnMixPopoverArrow } from '@/__private__/mixs/MixPopoverArrow/MixPopoverArrow'
import { cnMixPopoverAnimateForCssTransition } from '@/__private__/mixs/MixPopoverAnimate/MixPopoverAnimate'

import './Notifications.css'

const ARROW_SIZE = 6
const ARROW_OFFSET = 10

export const cnNotifications = cn('Notifications')

const NotificationsRender = (props: NotificationsProps, ref: React.Ref<HTMLButtonElement>) => {
  const {
    className,
    items,
    groupByDay,
    groups,
    groupLabelFormat,
    itemDateFormat,
    title,
    actions,
    getActionIcon,
    getActionLabel,
    getActionOnClick,
    getGroupId,
    getGroupLabel,
    getItemActions,
    getItemBadges,
    getItemDate,
    getItemDescription,
    getItemGroup,
    getItemImage,
    getItemLabel,
    getItemRead,
    getItemView,
    listClassName,
    isMobile,
    ...otherProps
  } = props

  const buttonRef = useRef<HTMLButtonElement>(null)
  const [direction, setDirection] = useState<Direction | undefined>(undefined)

  const [visibleMenu, { toogle, off }] = useFlag()

  const onSetDirection = useCallback((dir: Direction) => {
    setDirection(dir)
  }, [])

  const listProps = {
    className: cnNotifications('List', [listClassName]),
    items,
    groupByDay,
    groups,
    groupLabelFormat,
    title,
    actions,
    getActionIcon,
    getActionLabel,
    getActionOnClick,
    getGroupId,
    getGroupLabel,
    getItemActions,
    getItemBadges,
    getItemDate,
    getItemDescription,
    getItemGroup,
    getItemImage,
    getItemLabel,
    getItemRead,
    getItemView,
  }

  return (
    <>
      <Button
        {...otherProps}
        size="s"
        view="clear"
        className={cnNotifications(null, [className])}
        iconLeft={IconRing}
        ref={useForkRef([ref, buttonRef])}
        onClick={toogle}
      />
      {isMobile ? (
        <Sidebar isOpen={visibleMenu} onClickOutside={off}>
          <NotificationsList {...listProps} onClose={off} />
        </Sidebar>
      ) : (
        <CSSTransition
          classNames={cnMixPopoverAnimateForCssTransition}
          timeout={200}
          unmountOnExit
          in={visibleMenu}
        >
          <Popover
            className={cnNotifications('Popover')}
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
            <NotificationsList {...listProps} />
          </Popover>
        </CSSTransition>
      )}
    </>
  )
}

export const Notifications = forwardRef(NotificationsRender) as NotificationsComponent

export * from './types'
