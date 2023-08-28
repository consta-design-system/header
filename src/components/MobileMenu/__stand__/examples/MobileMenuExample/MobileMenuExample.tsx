import './MobileMenuExample.css';

import { Example } from '@consta/stand';
import React from 'react';

import { MobileMenu } from '##/components/MobileMenu';

const items = [
  {
    label: 'Пункт 1',
    subMenu: [{ label: 'Пункт 1-1' }, { label: 'Пункт 1-2' }],
  },
  { label: 'Пункт меню 2' },
  { label: 'Пункт меню 3' },
];

export const MobileMenuExampleBasic = () => (
  <Example>
    <MobileMenu items={items} style={{ zIndex: 1000 }} />
  </Example>
);
