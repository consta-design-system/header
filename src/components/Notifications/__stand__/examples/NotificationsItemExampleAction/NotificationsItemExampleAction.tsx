import { Example } from '@consta/stand';
import { IconEye } from '@consta/uikit/IconEye';
import { IconTrash } from '@consta/uikit/IconTrash';
import React from 'react';

import { NotificationsItem } from '##/components/Notifications/NotificationsItem';

export const NotificationsItemExampleAction = () => {
  return (
    <Example>
      <NotificationsItem
        title="Иванов Иван Иванович"
        description="Принёс краску"
        imageUrl="https://avatars.githubusercontent.com/u/12581569?s=40&v=4"
        actions={[
          {
            label: 'Удалить',
            icon: IconTrash,
          },
          {
            label: 'Отметить как прочитанное',
            icon: IconEye,
          },
        ]}
      />
    </Example>
  );
};
