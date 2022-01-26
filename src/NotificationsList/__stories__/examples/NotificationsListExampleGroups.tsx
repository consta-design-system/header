import React from 'react'

import { Example } from '@/__private__/storybook'

import { NotificationsList } from '@/NotificationsList'

import { itemsDate, itemsGroups, groups } from '../../__mocks__/data.mock'

export const NotificationsListExampleDate = () => (
  <Example>
    <NotificationsList items={itemsDate} groupByDay title="Уведомления" />
  </Example>
)

export const NotificationsListExampleGroups = () => (
  <Example>
    <NotificationsList items={itemsGroups} groups={groups} title="Уведомления" />
  </Example>
)
