import { Example } from '@consta/stand';
import React from 'react';

import { Navbar } from '##/components/NavbarCanary';

const menu = ['Пункт 1', 'Пункт 2', 'Пункт 3'];
const getItemLabel = (item: string) => item;
const onItemClick = (item: string) => alert(item);

export const NavbarOnClickExample = () => (
  <Example col={1}>
    <Navbar
      items={menu}
      getItemLabel={getItemLabel}
      onItemClick={onItemClick}
    />
  </Example>
);
