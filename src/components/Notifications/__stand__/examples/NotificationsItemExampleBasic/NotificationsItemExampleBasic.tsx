import { Example } from '@consta/stand';
import React from 'react';

import { NotificationsItem } from '##/components/Notifications/NotificationsItem';

const date = new Date(2021, 10, 12, 13, 57, 0);

export const NotificationsItemExampleBasic = () => {
  return (
    <Example>
      <NotificationsItem
        title="Заголовок"
        style={{
          minWidth: '400px',
        }}
        date={date}
        description="Описание"
        imageUrl="https://avatars.githubusercontent.com/u/12581569?s=40&v=4"
      />
    </Example>
  );
};
