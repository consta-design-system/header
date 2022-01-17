import React, { useRef, useState, useCallback, useEffect, forwardRef } from 'react'
import { IconMeatball } from '@consta/uikit/IconMeatball'
import { Button } from '@consta/uikit/Button'

import { useForkRef } from '@consta/uikit/useForkRef'
import { withTooltip } from '@consta/uikit/withTooltip'

import { useMutableRef } from '@consta/uikit/useMutableRef'

import { NotificationsActionsProps, NotificationsActionsComponent } from './types'
import { withDefaultGetters, menuGetItemLeftSideBar } from './helpers'
import { AnimatedContextMenu } from '@/__private__/AnimatedContextMenu/AnimatedContextMenu'

const ButtonWithTooltip = withTooltip()(Button)

const NotificationsActionsRender = (
  props: NotificationsActionsProps,
  ref: React.Ref<HTMLButtonElement>
) => {
  const {
    items = [],
    className,
    children,
    mainButtonOnlyIcon,
    opened = false,
    onOpen: onOpenProp,
    setVisibleMenu: setVisibleMenuProp,
    getItemIcon,
    getItemLabel,
    getItemOnClick,
    onItemClick,
    ...otherProps
  } = withDefaultGetters(props)
  const buttonRef = useRef(null)

  const [visibleMenu, setVisibleMenu] = useState<boolean>(opened)

  const closeMenu = useCallback(() => setVisibleMenu(false), [])
  const toogleMenu = useCallback(() => setVisibleMenu((state?) => !state), [])
  const onOpen = useMutableRef(onOpenProp)
  const setVisibleMenuRef = useMutableRef(setVisibleMenuProp)
  const menuRef = useForkRef([buttonRef, ref])

  useEffect(() => {
    setVisibleMenu(opened)
  }, [opened])

  useEffect(() => {
    onOpen.current?.(visibleMenu)
  }, [visibleMenu, onOpen])

  useEffect(() => {
    setVisibleMenuRef.current?.(setVisibleMenu)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getOnItemClick = (item: typeof items[number]) => (e: React.MouseEvent) => {
    onItemClick?.({ e, item })
    getItemOnClick(item)?.(e)
  }

  if (items.length === 1 && !mainButtonOnlyIcon) {
    return (
      <Button
        {...otherProps}
        className={className}
        size="xs"
        view="clear"
        iconLeft={getItemIcon(items[0])}
        onClick={getOnItemClick(items[0])}
        label={getItemLabel(items[0])}
        ref={ref}
      />
    )
  }

  if (items.length === 1 && getItemIcon(items[0]) && mainButtonOnlyIcon) {
    return (
      <ButtonWithTooltip
        {...otherProps}
        className={className}
        size="xs"
        view="clear"
        iconLeft={getItemIcon(items[0])}
        onClick={getOnItemClick(items[0])}
        tooltipProps={{
          content: getItemLabel(items[0]),
        }}
        ref={ref}
      />
    )
  }

  return (
    <>
      <Button
        {...otherProps}
        className={className}
        size="xs"
        view="clear"
        iconLeft={IconMeatball}
        ref={menuRef}
        onClick={toogleMenu}
      />
      <AnimatedContextMenu
        isOpen={visibleMenu}
        items={items}
        getLabel={getItemLabel}
        getOnClick={getOnItemClick}
        getKey={getItemLabel}
        getLeftSideBar={menuGetItemLeftSideBar(getItemIcon)}
        anchorRef={buttonRef}
        onClickOutside={closeMenu}
        possibleDirections={['downStartRight', 'upStartRight']}
        direction="downStartRight"
        style={{ width: 280 }}
      />
    </>
  )
}

export const NotificationsActions = forwardRef(
  NotificationsActionsRender
) as NotificationsActionsComponent
