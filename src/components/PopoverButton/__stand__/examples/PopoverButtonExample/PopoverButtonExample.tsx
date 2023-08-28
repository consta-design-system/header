import { IconRing } from '@consta/icons/IconRing';
import { Example } from '@consta/stand';
import React from 'react';

import { NotificationsList } from '##/components/Notifications';
import {
  actions,
  items,
} from '##/components/Notifications/__mocks__/data.mock';
import { PopoverButton } from '##/components/PopoverButton/PopoverButton';

export const PopoverButtonExample = () => {
  return (
    <Example>
      <PopoverButton onlyIcon iconLeft={IconRing}>
        <NotificationsList
          items={items}
          title="Уведомления"
          actions={actions}
          groupByDay
        />
      </PopoverButton>
    </Example>
  );
};
