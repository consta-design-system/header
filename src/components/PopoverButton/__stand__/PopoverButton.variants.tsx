import { IconRing } from '@consta/icons/IconRing';
import { useBoolean, useText } from '@consta/stand';
import React from 'react';

import { NotificationsList } from '##/components/Notifications';
import {
  actions,
  items,
} from '##/components/Notifications/__mocks__/data.mock';
import { PopoverButton } from '##/components/PopoverButton/PopoverButton';

const Variants = () => {
  const isMobile = useBoolean('isMobile');
  const onlyIcon = useBoolean('onlyIcon', true);
  const label = useText('label', undefined, !onlyIcon);
  const withCloseButton = useBoolean('withCloseButton', true, isMobile);
  const title = useText('title', 'Уведомления', isMobile);

  return (
    <PopoverButton
      onlyIcon={onlyIcon}
      label={label}
      iconLeft={IconRing}
      withCloseButton={withCloseButton}
      isMobile={isMobile}
      title={title}
    >
      <NotificationsList
        items={items}
        title="Уведомления"
        actions={actions}
        groupByDay
      />
    </PopoverButton>
  );
};

export default Variants;
