import React from 'react';

import { NotificationsList } from '##/components/NotificationsList';

import { createMetadata } from '../../__private__/storybook';
import { actions, items } from '../__mocks__/data.mock';
import mdx from './NotificationsList.docs.mdx';

export function Playground() {
  return (
    <NotificationsList
      items={items}
      title="Уведомления"
      actions={actions}
      groupByDay
    />
  );
}

export default createMetadata({
  title: 'Компоненты/NotificationsList',
  id: 'components/NotificationsList',
  parameters: {
    docs: {
      page: mdx,
    },
  },
});
