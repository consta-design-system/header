import { Example } from '@consta/stand';
import React from 'react';

import { ButtonMenu } from '##/components/ButtonMenu';
import { menu } from '##/components/ButtonMenu/__mocks__/mock.data';

export const ButtonMenuExample = () => (
  <Example>
    <ButtonMenu items={menu} getItemLabel={(item) => item.name} />
  </Example>
);

export const ButtonMenuExample100 = () => (
  <Example>
    <div
      style={{
        width: '200px',
      }}
    >
      <ButtonMenu
        style={{
          width: '100px',
        }}
        items={menu}
        getItemLabel={(item) => item.name}
      />
    </div>
  </Example>
);

export const ButtonMenuExample50 = () => (
  <Example>
    <div
      style={{
        width: '200px',
      }}
    >
      <ButtonMenu
        style={{
          width: '50px',
        }}
        items={menu}
        getItemLabel={(item) => item.name}
      />
    </div>
  </Example>
);
