import './TileMenu.variants.css';

import { useBoolean, useSelect, useText } from '@consta/stand';
import React from 'react';

import {
  TileMenu,
  TileMenuListDefaultItem,
  tileMenuListPropView,
  tileMenuListPropViewDefault,
} from '##/components/TileMenu';
import Image from '##/images/Gizeasy.image.jpeg';
import { cn } from '##/utils/bem';

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

const cnTileMenuVariants = cn('TileMenuVariants');

export const Variants = () => {
  const view = useSelect(
    'view',
    tileMenuListPropView,
    tileMenuListPropViewDefault,
  );
  const isMobile = useBoolean('isMobile', false);
  const listClassName = useText('listClassName', 'CustomListClassName');
  const title = useText('title', 'Заголовок');

  return (
    <TileMenu
      view={view}
      items={items}
      isMobile={isMobile}
      listClassName={cnTileMenuVariants('List', { isDesctop: !isMobile }, [
        listClassName,
      ])}
      title={title}
    />
  );
};

export default Variants;
