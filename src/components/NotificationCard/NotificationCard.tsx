import './NotificationCard.css';

import { Avatar } from '@consta/uikit/Avatar';
import { Text } from '@consta/uikit/Text';
import React, { forwardRef } from 'react';

import { Badges } from '##/components/Badges';
import { NotificationsActions } from '##/components/NotificationsActions';
import { cn } from '##/utils/bem';

import { defaultDateFormat } from './helpers';
import { NotificationCardProps } from './types';

export const cnNotificationCard = cn('NotificationCard');

export const NotificationCard = forwardRef(
  (props: NotificationCardProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      title,
      className,
      description,
      imageUrl,
      view = 'default',
      read,
      date,
      dateFormat = defaultDateFormat,
      badges,
      actions,
      actionsMenuOpened,
      setVisibleMenu,
      ...otherProps
    } = props;

    return (
      <div
        {...otherProps}
        ref={ref}
        className={cnNotificationCard(null, [className])}
      >
        {(imageUrl || view === 'user') && (
          <Avatar
            size="l"
            name={title}
            url={imageUrl}
            className={cnNotificationCard('Image')}
          />
        )}
        <div className={cnNotificationCard('Content')}>
          <div className={cnNotificationCard('Text')}>
            <Text
              weight={!read ? 'bold' : undefined}
              className={cnNotificationCard('Title', {
                cardWithActions: !!actions?.length,
              })}
            >
              {title}
            </Text>
            {description && <Text size="s">{description}</Text>}
          </div>
          {(badges || date) && (
            <div className={cnNotificationCard('Footer')}>
              <Badges
                className={cnNotificationCard('Badges')}
                items={badges}
                view="stroked"
              />
              {date && (
                <Text size="xs" view="secondary">
                  {dateFormat(date)}
                </Text>
              )}
            </div>
          )}
          {actions?.length && (
            <NotificationsActions
              className={cnNotificationCard('Actions')}
              items={actions}
              mainButtonOnlyIcon
              opened={actionsMenuOpened}
              setVisibleMenu={setVisibleMenu}
              style={{ zIndex: props.style?.zIndex }}
            />
          )}
        </div>
      </div>
    );
  },
);

export * from './types';
