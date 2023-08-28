import './LayoutExample.css';

import { Example } from '@consta/stand';
import React from 'react';

import { Layout } from '##/components/Layout';
import { Menu, MenuDefaultItem } from '##/components/Menu';
import { Notifications } from '##/components/Notifications';
import { cn } from '##/utils/bem';

const menu: MenuDefaultItem[] = [
  {
    label: 'Пункт 1',
    subMenu: [{ label: 'Пункт 1-1' }, { label: 'Пункт 1-2' }],
  },
  { label: 'Пункт меню 2' },
  { label: 'Пункт меню 3' },
];

type NOTIFICATIONS = {
  label: string;
  status: Array<'system' | 'warning'>;
};

const notifications: NOTIFICATIONS[] = [
  {
    label: 'Уведомления',
    status: ['system', 'warning'],
  },
];

const cnLayoutExample = cn('LayoutExample');

export const LayoutExampleBasic = () => (
  <Example>
    <Layout
      className={cnLayoutExample()}
      rowTop={{ left: 'Левый модуль', center: 'Центральный', right: 'Правый' }}
      rowCenter={{
        left: 'Левый модуль',
        center: 'Центральный',
        right: 'Правый',
      }}
      rowBottom={{
        left: 'Левый модуль',
        center: 'Центральный',
        right: 'Правый',
      }}
    />
  </Example>
);

export const LayoutExample = () => (
  <Example>
    <Layout
      className={cnLayoutExample()}
      rowTop={{ left: 'лево', center: 'центер', right: 'право' }}
      rowCenter={{
        left: <Notifications items={notifications} />,
        center: (
          <Menu className={cnLayoutExample('Menu')} items={menu} width="full" />
        ),
        right: 'право',
      }}
      rowBottom={{ left: 'лево', center: 'центер', right: 'право' }}
    />
  </Example>
);
