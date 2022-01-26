import React from 'react'

import { Example } from '@/__private__/storybook'

import { NotificationsList } from '@/NotificationsList'

import { items, itemsBasic, itemsBadges, itemsView, actions } from '../../__mocks__/data.mock'

export const NotificationsListExample = () => (
  <Example>
    <NotificationsList items={items} title="Уведомления" actions={actions} groupByDay />
  </Example>
)

export const NotificationsListExampleBasic = () => (
  <Example>
    <NotificationsList items={itemsBasic} title="Уведомления о действиях с забором" />
  </Example>
)

export const NotificationsListExampleBadges = () => (
  <Example>
    <NotificationsList items={itemsBadges} title="Уведомления о действиях с забором" />
  </Example>
)

export const NotificationsListExampleView = () => (
  <Example>
    <NotificationsList items={itemsView} title="Уведомления о действиях с забором" />
  </Example>
)
