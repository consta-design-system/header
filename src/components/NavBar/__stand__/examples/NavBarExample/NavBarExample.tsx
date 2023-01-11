import React from 'react';

import { NavBar } from '##/components/NavBar/NavBar';
import { Example } from '##/stand/components/Example';

import { items } from '../../../__mocks__/mock.data';

export const NavBarExample = () => {
  return (
    <Example>
      <NavBar items={items} />
    </Example>
  );
};
