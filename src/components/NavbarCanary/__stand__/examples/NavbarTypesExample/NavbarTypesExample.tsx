import { Example } from '@consta/stand';
import React from 'react';

import { DefaultNavbarItem, Navbar } from '##/components/NavbarCanary';

const menu = ['Пункт 1', 'Пункт 2', 'Пункт 3'];
const getItemLabel = (item: string) => item;

export const NavbarCustomTypesExample = () => (
  <Example col={1}>
    <Navbar items={menu} getItemLabel={getItemLabel} />
  </Example>
);

const defaultMenu: DefaultNavbarItem[] = [
  {
    label: 'Пункт 1',
  },
  {
    label: 'Пункт 2',
  },
  {
    label: 'Пункт 3',
  },
];

export const NavbarDefaultTypesExample = () => (
  <Example col={1}>
    <Navbar items={defaultMenu} />
  </Example>
);
