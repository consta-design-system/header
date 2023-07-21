import { IconDinosaur } from '@consta/icons/IconDinosaur';
import { Example } from '@consta/stand';
import React from 'react';

import { ButtonMenu } from '##/components/ButtonMenu';
import { menu } from '##/components/ButtonMenu/__mocks__/mock.data';

export const ButtonMenuExampleOnlyIcon = () => (
  <Example>
    <ButtonMenu
      items={menu}
      getItemLabel={(item) => item.name}
      getItemIcon={() => IconDinosaur}
      onlyIcon
    />
  </Example>
);
