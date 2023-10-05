import { Example } from '@consta/stand';
import React from 'react';

import { Navbar, navbarPropForm } from '##/components/NavbarCanary';

const menu = ['Пункт 1', 'Пункт 2', 'Пункт 3'];
const getItemLabel = (item: string) => item;

const form = [...navbarPropForm];

export const NavbaFormExample = () => (
  <Example
    col={{ 2: 0, 3: 600 }}
    items={form}
    separately
    getItemNode={(form) => (
      <Navbar items={menu} form={form} getItemLabel={getItemLabel} />
    )}
    getItemLabel={(form) => `form=${form}`}
  />
);
