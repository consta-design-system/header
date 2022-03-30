import React from 'react'

import { NotificationsList } from '@/NotificationsList'

import { items, actions } from '../__mocks__/data.mock'

import { createMetadata } from '../../__private__/storybook'

import mdx from './NotificationsList.docs.mdx'

export function Playground() {
  return <NotificationsList items={items} title="Уведомления" actions={actions} groupByDay />
}

export default createMetadata({
  title: 'Компоненты/NotificationsList',
  id: 'components/NotificationsList',
  parameters: {
    docs: {
      page: mdx,
    },
  },
})
