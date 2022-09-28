import './TileMenu.variants.css';

import { useBoolean, useSelect, useText } from '@consta/stand';
import React from 'react';

import {
  TileMenu,
  TileMenuDefaultItem,
  tileMenuPropView,
  tileMenuPropViewDefault,
} from '##/components/TileMenu';
import { cn } from '##/utils/bem';

const items: TileMenuDefaultItem[] = [
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
];

const cnTileMenuVariants = cn('TileMenuVariants');

export const Variants = () => {
  const view = useSelect('view', tileMenuPropView, tileMenuPropViewDefault);
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
