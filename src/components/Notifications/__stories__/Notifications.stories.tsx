import './NotificationsStories.css';

import { boolean } from '@storybook/addon-knobs';
import React from 'react';

import { Notifications } from '##/components/Notifications';
import { cn } from '##/utils/bem';

import { createMetadata } from '../../__private__/storybook';
import { actions, items } from '../__mocks__/data.mock';
import mdx from './Notifications.docs.mdx';

const defaultKnobs = () => ({
  isMobile: boolean('isMobile', false),
});

const cnNotificationsStories = cn('NotificationsStories');

export function Playground() {
  const { isMobile } = defaultKnobs();
  return (
    <Notifications
      listClassName={cnNotificationsStories('List', { isDesktop: !isMobile })}
      items={items}
      title="Уведомления"
      actions={actions}
      groupByDay
      isMobile={isMobile}
    />
  );
}

export default createMetadata({
  title: 'Компоненты/Notifications',
  id: 'components/Notifications',
  parameters: {
    docs: {
      page: mdx,
    },
  },
});
