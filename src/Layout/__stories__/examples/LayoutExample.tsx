import React from 'react'

import { Example } from '@/__private__/storybook'

import { MenuDefaultItem, Menu } from '@/Menu'
import { cnMixSpace } from '@consta/uikit/MixSpace'
import { Notifications } from '@/Notifications'

import { Layout } from '@/Layout'

const menu: MenuDefaultItem[] = [
  {
    label: 'Пункт 1',
    subMenu: [{ label: 'Пункт 1-1' }, { label: 'Пункт 1-2' }],
  },
  { label: 'Пункт меню 2' },
  { label: 'Пункт меню 3' },
]

type NOTIFICATIONS = {
  label: string
  status: Array<'system' | 'warning'>
}

const notifications: NOTIFICATIONS[] = [
  {
    label: 'Уведомления',
    status: ['system', 'warning'],
  },
]

export const LayoutExampleBasic = () => (
  <Example>
    <Layout
      rowTop={{ left: 'Левый модуль', center: 'Центральный', right: 'Правый' }}
      rowCenter={{ left: 'Левый модуль', center: 'Центральный', right: 'Правый' }}
      rowBottom={{ left: 'Левый модуль', center: 'Центральный', right: 'Правый' }}
    />
  </Example>
)

export const LayoutExample = () => (
  <Example>
    <Layout
      rowTop={{ left: 'лево', center: 'центер', right: 'право' }}
      rowCenter={{
        left: (
          <div className={cnMixSpace({ mL: 'm' })}>
            <Menu items={menu} />
          </div>
        ),
        center: <Notifications items={notifications} />,
        right: 'право',
      }}
      rowBottom={{ left: 'лево', center: 'центер', right: 'право' }}
    />
  </Example>
)
