import './NotificationsItem.css';

import { Avatar } from '@consta/uikit/Avatar';
import { BadgePropView } from '@consta/uikit/Badge';
import { BadgeGroup } from '@consta/uikit/BadgeGroup';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import React, { forwardRef } from 'react';

import { cn } from '##/utils/bem';

import { NotificationsActions } from '../NotificationsActions';
import { defaultDateFormat } from './helpers';
import { NotificationsItemProps } from './types';

export const cnNotificationsItem = cn('NotificationsItem');

const getItemView = (): BadgePropView => 'stroked';

export const NotificationsItem = forwardRef(
  (props: NotificationsItemProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      title,
      className,
      description,
      imageUrl,
      view = 'default',
      read,
      date,
      dateFormat = defaultDateFormat,
      badges = [],
      actions,
      actionsMenuOpened,
      ...otherProps
    } = props;

    return (
      <div
        {...otherProps}
        ref={ref}
        className={cnNotificationsItem(null, [className])}
      >
        {(imageUrl || view === 'user') && (
          <Avatar
            size="l"
            name={title}
            url={imageUrl}
            className={cnNotificationsItem('Image', [cnMixSpace({ mR: 'm' })])}
          />
        )}
        <div className={cnNotificationsItem('Content')}>
          <div className={cnNotificationsItem('Text')}>
            <Text
              weight={!read ? 'bold' : undefined}
              className={cnNotificationsItem('Title', {
                cardWithActions: !!actions?.length,
              })}
              view="primary"
              size="m"
              lineHeight="m"
            >
              {title}
            </Text>
            {description && (
              <Text size="s" view="primary" lineHeight="m">
                {description}
              </Text>
            )}
          </div>
          {(badges || date) && (
            <div className={cnNotificationsItem('Footer')}>
              <BadgeGroup
                className={cnNotificationsItem('Badges', [
                  cnMixSpace({ mR: 'xl' }),
                ])}
                items={badges}
                size="s"
                fitMode="reduction"
                getItemKey={(item) => item.label}
                getItemView={getItemView}
              />
              {date && (
                <Text
                  className={cnNotificationsItem('Time')}
                  size="xs"
                  view="secondary"
                  lineHeight="m"
                >
                  {dateFormat(date)}
                </Text>
              )}
            </div>
          )}
          {actions?.length && (
            <NotificationsActions
              className={cnNotificationsItem('Actions')}
              items={actions}
              mainButtonOnlyIcon
              opened={actionsMenuOpened}
              style={{ zIndex: props.style?.zIndex }}
            />
          )}
        </div>
      </div>
    );
  },
);

export * from './types';
