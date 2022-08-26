import './NotificationsList.css';

import { Button } from '@consta/uikit/Button';
import { IconClose } from '@consta/uikit/IconClose';
import { Text } from '@consta/uikit/Text';
import React, {
  forwardRef,
  Fragment,
  useCallback,
  useEffect,
  useRef,
} from 'react';

import { NotificationCard } from '##/components/NotificationCard';
import { NotificationsActions } from '##/components/NotificationsActions';
import { cn } from '##/utils/bem';

import {
  defaultGroupLabelFormat,
  getGroups,
  withDefaultGetters,
} from './helpers';
import { NotificationsListComponent, NotificationsListProps } from './types';

export const cnNotificationsList = cn('NotificationsList');

function NotificationsListRender(
  props: NotificationsListProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const {
    className,
    items,
    groupByDay = false,
    groups,
    groupLabelFormat = defaultGroupLabelFormat,
    itemDateFormat,
    title,
    actions,
    getItemLabel,
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
    getItemRead,
    getItemView,
    onClose,
    ...otherProps
  } = withDefaultGetters(props);

  const resultGroups = getGroups(
    items,
    groups,
    groupByDay,
    getItemGroup,
    getItemDate,
    getGroupId,
  );

  const setVisibleMenuRef = useRef<Record<string, Function>>({});
  const listRef = useRef<HTMLDivElement>(null);

  const closeAllMenu = useCallback(() => {
    for (const key in setVisibleMenuRef.current) {
      if (
        Object.prototype.hasOwnProperty.call(setVisibleMenuRef.current, key)
      ) {
        setVisibleMenuRef.current[key](false);
      }
    }
  }, []);

  useEffect(() => {
    listRef.current?.addEventListener('scroll', closeAllMenu, {
      passive: true,
    });

    return () => listRef.current?.removeEventListener('scroll', closeAllMenu);
  }, [listRef.current]);

  const elementZIndex =
    typeof props.style?.zIndex === 'number'
      ? props.style.zIndex + 1
      : undefined;

  return (
    <div
      {...otherProps}
      ref={ref}
      className={cnNotificationsList(null, [className])}
    >
      {(title || actions) && (
        <div className={cnNotificationsList('Header')}>
          <Text
            className={cnNotificationsList('HeaderItem')}
            size="xl"
            truncate
          >
            {title}
          </Text>
          {actions?.length && (
            <NotificationsActions
              className={cnNotificationsList('HeaderItem')}
              items={actions}
              getItemIcon={getActionIcon}
              getItemOnClick={getActionOnClick}
              getItemLabel={getActionLabel}
              style={{ zIndex: elementZIndex }}
            />
          )}
          {onClose && (
            <Button
              className={cnNotificationsList('HeaderItem')}
              size="s"
              view="clear"
              iconLeft={IconClose}
              onClick={onClose}
            />
          )}
        </div>
      )}
      <div ref={listRef} className={cnNotificationsList('List')}>
        {resultGroups.map((group, groupIndex) => {
          const groupLabel = groupByDay
            ? groupLabelFormat(Number(group.key))
            : group.group && getGroupLabel(group.group);
          return (
            <Fragment key={cnNotificationsList('Group', { groupIndex })}>
              {groupLabel && (
                <Text
                  className={cnNotificationsList('GroupLabel')}
                  key={cnNotificationsList('GroupLabel', { groupIndex })}
                  view="secondary"
                  transform="uppercase"
                  weight="bold"
                  size="2xs"
                >
                  {groupLabel}
                </Text>
              )}
              {group.items.map((item, itemIndex) => {
                return (
                  <NotificationCard
                    className={cnNotificationsList('Item')}
                    key={cnNotificationsList('Item', { groupIndex, itemIndex })}
                    title={getItemLabel(item)}
                    description={getItemDescription(item)}
                    imageUrl={getItemImage(item)}
                    read={getItemRead(item)}
                    date={getItemDate(item)}
                    dateFormat={itemDateFormat}
                    badges={getItemBadges(item)}
                    actions={getItemActions(item)}
                    view={getItemView(item)}
                    setVisibleMenu={(value) => {
                      setVisibleMenuRef.current[`${groupIndex}-${itemIndex}`] =
                        value;
                    }}
                    style={{ zIndex: elementZIndex }}
                  />
                );
              })}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export const NotificationsList = forwardRef(
  NotificationsListRender,
) as NotificationsListComponent;

export * from './types';
