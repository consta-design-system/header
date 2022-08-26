import './Notifications.css';

import { Button } from '@consta/uikit/Button';
import { IconRing } from '@consta/uikit/IconRing';
import {
  animateTimeout,
  cnMixPopoverAnimate,
} from '@consta/uikit/MixPopoverAnimate';
import { Direction, Popover } from '@consta/uikit/Popover';
import { useFlag } from '@consta/uikit/useFlag';
import { useForkRef } from '@consta/uikit/useForkRef';
import React, { forwardRef, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';

import { NotificationsList } from '##/components/NotificationsList';
import { Sidebar } from '##/components/Sidebar';
import { cnMixPopoverArrow } from '##/mixs/MixPopoverArrow/MixPopoverArrow';
import { cn } from '##/utils/bem';

import { NotificationsComponent, NotificationsProps } from './types';

const ARROW_SIZE = 6;
const ARROW_OFFSET = 10;

export const cnNotifications = cn('Notifications');

const NotificationsRender = (
  props: NotificationsProps,
  ref: React.Ref<HTMLButtonElement>,
) => {
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
  } = props;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [direction, setDirection] = useState<Direction | undefined>(undefined);

  const [visibleMenu, { toogle, off }] = useFlag();

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
  };

  const elementZIndex =
    typeof props.style?.zIndex === 'number'
      ? props.style.zIndex + 1
      : undefined;

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
        <Sidebar
          isOpen={visibleMenu}
          onClickOutside={off}
          style={{ zIndex: elementZIndex }}
        >
          <NotificationsList
            {...listProps}
            onClose={off}
            style={{ zIndex: elementZIndex }}
          />
        </Sidebar>
      ) : (
        <Transition timeout={animateTimeout} unmountOnExit in={visibleMenu}>
          {(animate) => (
            <Popover
              className={cnNotifications('Popover', [
                cnMixPopoverAnimate({ animate, direction }),
              ])}
              anchorRef={buttonRef}
              arrowOffset={ARROW_OFFSET + ARROW_SIZE}
              offset={ARROW_SIZE + 4}
              onSetDirection={setDirection}
              style={{
                ['--popover-arrow-size' as string]: `${ARROW_SIZE}px`,
                ['--popover-arrow-offset' as string]: `${ARROW_OFFSET}px`,
                zIndex: elementZIndex,
              }}
              onClickOutside={off}
            >
              <div className={cnMixPopoverArrow({ direction })} />
              <NotificationsList
                {...listProps}
                style={{ zIndex: elementZIndex }}
              />
            </Popover>
          )}
        </Transition>
      )}
    </>
  );
};

export const Notifications = forwardRef(
  NotificationsRender,
) as NotificationsComponent;
