import { Example } from '@consta/stand';
import React from 'react';

import { TileMenu, TileMenuListDefaultItem } from '##/components/TileMenu';
import Image from '##/images/Gizeasy.image.jpeg';

const items: TileMenuListDefaultItem[] = [
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: Image,
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: Image,
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: Image,
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: Image,
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: Image,
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: Image,
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: Image,
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: Image,
  },
];

export const TileMenuExample = () => (
  <Example>
    <TileMenu items={items} title="Заголовок" />
  </Example>
);
export const TileMenuExampleMobile = () => (
  <Example>
    <TileMenu items={items} title="Заголовок" isMobile />
  </Example>
);
