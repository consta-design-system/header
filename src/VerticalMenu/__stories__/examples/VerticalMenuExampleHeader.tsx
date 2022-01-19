import React from 'react'

import { Example } from '@/__private__/storybook'

import { cnMixSpace } from '@consta/uikit/MixSpace'

import { VerticalMenu } from '@/VerticalMenu'

const items = [
  {
    label: 'Пункт 1',
    href: '#',
    onClick: e => {
      e.preventDefault()
      e.stopPropagation()
    },
    subMenu: [{ label: 'Пункт 1-1' }, { label: 'Пункт 1-2' }],
  },
  { label: 'Пункт меню 2' },
  { label: 'Пункт меню 3' },
]
export const VerticalMenuExampleHeader = () => (
  <Example height="200px" width="300px">
    <VerticalMenu
      items={items}
      header={<div className={cnMixSpace({ pH: 'xl', pV: 'm' })}>Заголовок меню</div>}
    />
  </Example>
)
