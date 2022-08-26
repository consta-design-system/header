import './AnimatedContextMenu.css';

import { ContextMenuProps } from '@consta/uikit/__internal__/src/components/ContextMenu/helpers';
import { ContextMenu } from '@consta/uikit/ContextMenu';
import {
  animateTimeout,
  cnMixPopoverAnimate,
} from '@consta/uikit/MixPopoverAnimate';
import { useFlag } from '@consta/uikit/useFlag';
import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

import { cn } from '##/utils/bem';

export type AnimatedContextMenuComponent = <ITEM>(
  props: ContextMenuProps<ITEM> & { isOpen?: boolean },
) => React.ReactElement | null;

export const cnAnimatedContextMenu = cn('AnimatedContextMenu');

export const AnimatedContextMenu: AnimatedContextMenuComponent = (props) => {
  const { isOpen, className, onSetDirection, ...otherProps } = props;
  const [exitAnimation, setExitAnimation] = useFlag();
  const [direction, setDirection] = useState<typeof otherProps.direction>();

  return (
    <Transition
      in={isOpen}
      unmountOnExit
      timeout={animateTimeout}
      onEnter={setExitAnimation.off}
      onExit={setExitAnimation.on}
    >
      {(animate) => (
        <ContextMenu
          {...otherProps}
          className={cnAnimatedContextMenu({ exit: exitAnimation }, [
            className,
            cnMixPopoverAnimate({ animate, direction }),
          ])}
          onSetDirection={(d) => {
            setDirection(d);
            onSetDirection?.(d);
          }}
        />
      )}
    </Transition>
  );
};
