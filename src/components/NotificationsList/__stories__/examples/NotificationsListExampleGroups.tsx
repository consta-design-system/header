import React from 'react';

import { NotificationsList } from '##/components/NotificationsList';
import { Example } from '##/stand/components/Example';

import { groups, itemsDate, itemsGroups } from '../../__mocks__/data.mock';

export const NotificationsListExampleDate = () => (
  <Example>
    <NotificationsList items={itemsDate} groupByDay title="Уведомления" />
  </Example>
);

export const NotificationsListExampleGroups = () => (
  <Example>
    <NotificationsList
      items={itemsGroups}
      groups={groups}
      title="Уведомления"
    />
  </Example>
);
