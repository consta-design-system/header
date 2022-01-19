import React from 'react'

import { Example } from '@/__private__/storybook'

import { VerticalMenu } from '@/VerticalMenu'

type MenuItem = {
  name: string
  sub?: MenuItem[]
  href?: string
  onClick?: React.EventHandler<React.MouseEvent>
}

const menu: MenuItem[] = [
  {
    name: 'Пункт меню 1',
    href: '#',
    onClick: e => {
      e.preventDefault()
      e.stopPropagation()
    },
    sub: [{ name: 'Пункт меню 1-1' }, { name: 'Пункт меню 1-2' }],
  },
  { name: 'Пункт меню 2', sub: [{ name: 'Пункт меню 2-1' }] },
  {
    name: 'Пункт меню 3',
    sub: [
      { name: 'Пункт меню 3-1', sub: [{ name: 'Пункт меню 3-1-1' }] },
      { name: 'Пункт меню 3-2', sub: [{ name: 'Пункт меню 3-2-1' }] },
      {
        name: 'Пункт меню 3-3',
        sub: [
          { name: 'Пункт меню 3-1', sub: [{ name: 'Пункт меню 3-1-1' }] },
          { name: 'Пункт меню 3-2', sub: [{ name: 'Пункт меню 3-2-1' }] },
          {
            name: 'Пункт меню 3-3',
            sub: [
              { name: 'Пункт меню 3-3-1', sub: [{ name: 'Пункт меню 3-3-1-1' }] },
              { name: 'Пункт меню 3-3-2', sub: [{ name: 'Пункт меню 3-3-2-1' }] },
              { name: 'Пункт меню 3-3-3', sub: [{ name: 'Пункт меню 3-3-3-1' }] },
            ],
          },
        ],
      },
    ],
  },
]

export const VerticalMenuExampleCustom = () => (
  <Example style={{ marginBottom: 'var(--space-l)' }} width="300px" height="200px">
    <VerticalMenu items={menu} getItemLabel={item => item.name} getItemSubMenu={item => item.sub} />
  </Example>
)
