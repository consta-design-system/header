import { Example } from '@consta/stand';
import React from 'react';

import { NotificationsItem } from '##/components/Notifications/NotificationsItem';

export const NotificationsItemExampleBadges = () => {
  return (
    <Example>
      <NotificationsItem
        title="Один человек"
        description="Принёс краску"
        imageUrl="https://avatars.githubusercontent.com/u/13190808?v=4"
        badges={[
          {
            label: 'готов к работе',
            status: 'warning',
          },
          {
            label: 'горит',
            status: 'error',
          },
        ]}
      />
    </Example>
  );
};
