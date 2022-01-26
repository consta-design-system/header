import React from 'react'

import { Example } from '@/__private__/storybook'

import { NotificationsList } from '@/NotificationsList'

import { itemsBasic, itemsActions, itemsRead, actions } from '../../__mocks__/data.mock'

export const NotificationsListExampleActions = () => (
  <Example width="400px">
    <NotificationsList items={itemsBasic} actions={actions} title="Уведомления" />
  </Example>
)

export const NotificationsListExampleActions2 = () => (
  <Example width="400px">
    <NotificationsList items={itemsActions} title="Уведомления" />
  </Example>
)

export const NotificationsListExampleRead = () => (
  <Example width="400px">
    <NotificationsList items={itemsRead} title="Уведомления" />
  </Example>
)
