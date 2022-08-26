import React from 'react';

import { MobileMenu } from '##/components/MobileMenu';
import { Example } from '##/stand/components/Example';

const items = [
  {
    label: 'Пункт 1',
    // href: '#',
    // onClick: e => {
    //   e.preventDefault()
    //   e.stopPropagation()
    // },
    subMenu: [{ label: 'Пункт 1-1' }, { label: 'Пункт 1-2' }],
  },
  { label: 'Пункт меню 2' },
  { label: 'Пункт меню 3' },
];

export const MobileMenuExampleBasic = () => (
  <Example>
    <MobileMenu items={items} style={{ zIndex: 10 }} />
  </Example>
);
