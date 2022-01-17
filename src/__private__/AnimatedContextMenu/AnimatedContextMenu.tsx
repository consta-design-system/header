import React from 'react'
import { useFlag } from '@consta/uikit/useFlag'
import { CSSTransition } from 'react-transition-group'
import {
  cnMixPopoverAnimateForCssTransition,
  animateTimeout,
} from '@/__private__/mixs/MixPopoverAnimate/MixPopoverAnimate'
import { cn } from '@/__private__/utils/bem'
import { ContextMenu } from '@consta/uikit/ContextMenu'
import { ContextMenuProps } from '@consta/uikit/__internal__/src/components/ContextMenu/helpers'

import './AnimatedContextMenu.css'

export type AnimatedContextMenuComponent = <ITEM>(
  props: ContextMenuProps<ITEM> & { isOpen?: boolean }
) => React.ReactElement | null

export const cnAnimatedContextMenu = cn('AnimatedContextMenu')

export const AnimatedContextMenu: AnimatedContextMenuComponent = props => {
  const { isOpen, className, ...otherProps } = props
  const [exitAnimation, setExitAnimation] = useFlag()

  return (
    <CSSTransition
      in={isOpen}
      classNames={cnMixPopoverAnimateForCssTransition}
      unmountOnExit
      timeout={animateTimeout}
      onEnter={setExitAnimation.off}
      onExit={setExitAnimation.on}
    >
      <ContextMenu
        {...otherProps}
        className={cnAnimatedContextMenu({ exit: exitAnimation }, [className])}
      />
    </CSSTransition>
  )
}
