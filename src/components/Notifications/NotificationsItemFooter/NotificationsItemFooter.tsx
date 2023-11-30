import './NotificationsItemFooter.css';

import { BadgePropView } from '@consta/uikit/Badge';
import { BadgeGroup } from '@consta/uikit/BadgeGroup';
import { Text } from '@consta/uikit/Text';
import { useComponentSize } from '@consta/uikit/useComponentSize';
import React, { useRef } from 'react';

import { cn } from '##/utils/bem';

import { defaultDateFormat } from './helpers';
import { NotificationsItemFooterProps } from './types';

const cnNotificationsItemFooter = cn('NotificationsItemFooter');
const getItemView = (): BadgePropView => 'stroked';

export const NotificationsItemFooter: React.FC<NotificationsItemFooterProps> = (
  props,
) => {
  const { badges = [], dateFormat = defaultDateFormat, date } = props;
  const timeRef = useRef<HTMLDivElement>(null);
  const { width: timeWidth } = useComponentSize(timeRef);

  if (badges || date) {
    return (
      <div
        className={cnNotificationsItemFooter()}
        style={{ ['--time-width' as string]: `${Math.ceil(timeWidth)}px` }}
      >
        <BadgeGroup
          className={cnNotificationsItemFooter('Badges')}
          items={badges}
          size="s"
          fitMode="reduction"
          getItemKey={(item) => item.label}
          getItemView={getItemView}
        />
        {date && (
          <Text
            className={cnNotificationsItemFooter('Time')}
            size="xs"
            view="secondary"
            lineHeight="m"
            ref={timeRef}
          >
            {dateFormat(date)}
          </Text>
        )}
      </div>
    );
  }

  return null;
};
