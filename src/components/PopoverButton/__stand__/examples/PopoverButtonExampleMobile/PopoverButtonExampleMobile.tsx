import './PopoverButtonExampleMobile.css';

import { IconRing } from '@consta/icons/IconRing';
import { Example } from '@consta/stand';
import React from 'react';

import { NotificationsList } from '##/components/Notifications';
import {
  actions,
  items,
} from '##/components/Notifications/__mocks__/data.mock';
import { PopoverButton } from '##/components/PopoverButton/PopoverButton';
import { cn } from '##/utils/bem';

const cnPopoverButtonExampleMobile = cn('PopoverButtonExampleMobile');

export const PopoverButtonExampleMobile = () => {
  return (
    <Example>
      <PopoverButton
        withCloseButton={false}
        isMobile
        onlyIcon
        iconLeft={IconRing}
      >
        {(onClose) => (
          <NotificationsList
            className={cnPopoverButtonExampleMobile('List')}
            items={items}
            title="Уведомления"
            actions={actions}
            onClose={onClose}
            groupByDay
          />
        )}
      </PopoverButton>
    </Example>
  );
};
