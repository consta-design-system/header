import { Example } from '@consta/stand';
import React from 'react';

import { Navbar, navbarPropSize } from '##/components/NavbarCanary';

const menu = ['Пункт 1', 'Пункт 2', 'Пункт 3'];
const getItemLabel = (item: string) => item;

const sizes = [...navbarPropSize];

export const NavbarSizeExample = () => (
  <Example
    col={2}
    items={sizes}
    separately
    getItemNode={(size) => (
      <Navbar items={menu} size={size} getItemLabel={getItemLabel} />
    )}
    getItemLabel={(size) => `size=${size}`}
  />
);
