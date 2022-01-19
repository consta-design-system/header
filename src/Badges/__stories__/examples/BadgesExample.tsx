import React from 'react'

import { Example } from '@/__private__/storybook'

import { Badges } from '@/Badges'

const items = [
  {
    label: 'отчеты',
    status: 'normal',
  },
  {
    label: 'файлы',
    status: 'warning',
  },
  {
    label: 'система',
    status: 'success',
  },
  {
    label: 'отчеты',
    status: 'normal',
  },
  {
    label: 'файлы',
    status: 'warning',
  },
  {
    label: 'система',
    status: 'success',
  },
]

export const BadgesExampleBasic = () => (
  <Example>
    <Badges items={items} />
  </Example>
)

export const BadgesExampleBasic200 = () => (
  <Example width="200px">
    <Badges items={items} />
  </Example>
)

export const BadgesExampleBasic100 = () => (
  <Example width="100px">
    <Badges items={items} />
  </Example>
)

export const BadgesExampleForm = () => (
  <Example>
    <Badges style={{ marginBottom: 'var(--space-s)' }} items={items} form="default" />
    <Badges items={items} form="round" />
  </Example>
)

export const BadgesExampleSize = () => (
  <Example>
    <Badges style={{ marginBottom: 'var(--space-s)' }} items={items} size="l" />
    <Badges style={{ marginBottom: 'var(--space-s)' }} items={items} size="m" />
    <Badges items={items} size="s" />
  </Example>
)

export const BadgesExampleView = () => (
  <Example>
    <Badges style={{ marginBottom: 'var(--space-s)' }} items={items} view="filled" />
    <Badges items={items} view="stroked" />
  </Example>
)
