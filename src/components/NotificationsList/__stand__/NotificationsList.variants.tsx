import { useBoolean, useText } from '@consta/stand';
import React from 'react';

import { NotificationsList } from '##/components/NotificationsList';

import { actions, items } from '../__mocks__/data.mock';

export const Variants = () => {
  const title = useText('title', 'Уведомления');
  const groupByDay = useBoolean('groupByDay', false);

  return (
    <NotificationsList
      items={items}
      title={title}
      actions={actions}
      groupByDay={groupByDay}
    />
  );
};

export default Variants;
