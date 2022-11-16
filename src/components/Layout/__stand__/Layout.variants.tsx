import './Layout.variants.css';

import { cnMixSpace } from '@consta/uikit/MixSpace';
import React from 'react';

import { Menu, MenuDefaultItem } from '##/components/Menu';
import { Notifications } from '##/components/Notifications';

import { cn } from '../../../utils/bem';
import { Layout } from '../Layout';

const cnLayoutVariants = cn('LayoutVariants');

const menu: MenuDefaultItem[] = [
  {
    label: 'Пункт 1',
    active: true,
    subMenu: [{ label: 'Пункт 1-1' }],
  },
  {
    label: 'Пункт 2',
    subMenu: [
      {
        label: 'Пункт 2-1',
        subMenu: [
          { label: 'Пункт 2-1-1' },
          { label: 'Пункт 2-1-2' },
          { label: 'Пункт 2-1-3' },
        ],
      },
      { label: 'Пункт 2-2' },
    ],
  },
  { label: 'Пункт 3', subMenu: [{ label: 'Пункт 3-1' }] },
  { label: 'Пункт 4' },
  { label: 'Пункт 5', subMenu: [{ label: 'Пункт 5-1' }] },
];

type NOTIFICATIONS = {
  label: string;
  status: Array<'system' | 'warning'>;
};

const notifications: NOTIFICATIONS[] = [
  {
    label: 'Я должен сделать объявление',
    status: ['system', 'warning'],
  },
];

export const Variants = () => {
  return (
    <Layout
      className={cnLayoutVariants()}
      rowTop={{ left: 'left', center: 'center', right: 'right' }}
      rowCenter={{
        left: <Notifications items={notifications} />,
        center: (
          <Menu
            className={cnLayoutVariants('Menu', [cnMixSpace({ mL: 'm' })])}
            items={menu}
            style={{ width: '100%', height: `var(--header-height)` }}
          />
        ),
        right: 'right',
      }}
      rowBottom={{ left: 'left', center: 'center', right: 'right' }}
    />
  );
};

export default Variants;
