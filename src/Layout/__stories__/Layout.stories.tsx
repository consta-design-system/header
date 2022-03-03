import React from 'react'

import { MenuDefaultItem, Menu } from '@/Menu'
import { cnMixSpace } from '@consta/uikit/MixSpace'
import { Notifications } from '@/Notifications'

import { createMetadata } from '../../__private__/storybook'
import { Layout } from '../Layout'

import mdx from './Layout.docs.mdx'

const menu: MenuDefaultItem[] = [
  { label: 'Пункт 1werwerwerwerwer', active: true, subMenu: [{ label: 'Пункт 1-1' }] },
  {
    label: 'Пункт 2',
    subMenu: [
      {
        label: 'Пункт 2-1',
        subMenu: [{ label: 'Пункт 2-1-1' }, { label: 'Пункт 2-1-2' }, { label: 'Пункт 2-1-3' }],
      },
      { label: 'Пункт 2-2' },
    ],
  },
  { label: 'Пункт 3', subMenu: [{ label: 'Пункт 3-1' }] },
  { label: 'Пункт 4' },
  { label: 'Пункт 5', subMenu: [{ label: 'Пункт 5-1' }] },
]

type NOTIFICATIONS = {
  label: string
  status: Array<'system' | 'warning'>
}

const notifications: NOTIFICATIONS[] = [
  {
    label: 'dd',
    status: ['system', 'warning'],
  },
]

export function Playground() {
  return (
    <Layout
      rowTop={{ left: 'left', center: 'center', right: 'right' }}
      rowCenter={{
        left: (
          <div className={cnMixSpace({ mL: 'm' })}>
            <Menu items={menu} />
          </div>
        ),
        center: <Notifications items={notifications} />,
        right: 'right',
      }}
      rowBottom={{ left: 'left', center: 'center', right: 'right' }}
    />
  )
}

export default createMetadata({
  title: 'Компоненты|/Layout',
  id: 'components/Layout',
  parameters: {
    docs: {
      page: mdx,
    },
  },
})
