import React from 'react';

import { NotificationsList } from '##/components/NotificationsList';
import { Example } from '##/stand/components/Example';

import {
  actions,
  itemsActions,
  itemsBasic,
  itemsRead,
} from '../../__mocks__/data.mock';

export const NotificationsListExampleActions = () => (
  <Example width="400px">
    <NotificationsList
      items={itemsBasic}
      actions={actions}
      title="Уведомления"
    />
  </Example>
);

export const NotificationsListExampleActions2 = () => (
  <Example width="400px">
    <NotificationsList items={itemsActions} title="Уведомления" />
  </Example>
);

export const NotificationsListExampleRead = () => (
  <Example width="400px">
    <NotificationsList items={itemsRead} title="Уведомления" />
  </Example>
);
