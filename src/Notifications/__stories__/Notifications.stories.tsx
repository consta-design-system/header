import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import { Notifications } from '@/Notifications'
import './NotificationsStories.css'

import { items, actions } from '../__mocks__/data.mock'

import { createMetadata } from '../../__private__/storybook'

import mdx from './Notifications.docs.mdx'

import { cn } from '@/__private__/utils/bem'

const defaultKnobs = () => ({
  isMobile: boolean('isMobile', false),
})

const cnNotificationsStories = cn('NotificationsStories')

export function Playground() {
  const { isMobile } = defaultKnobs()
  return (
    <Notifications
      listClassName={cnNotificationsStories('List', { isDesktop: !isMobile })}
      items={items}
      title="Уведомления"
      actions={actions}
      groupByDay
      isMobile={isMobile}
    />
  )
}

export default createMetadata({
  title: 'Компоненты|/Notifications',
  id: 'components/Notifications',
  parameters: {
    docs: {
      page: mdx,
    },
  },
})
