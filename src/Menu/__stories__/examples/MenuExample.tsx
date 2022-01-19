import React from 'react'

import { Example } from '@/__private__/storybook'

import { Menu } from '@/Menu'

const items = [
  {
    label: 'Пункт 1',
    href: '#',
    // onClick: e => {
    //   e.preventDefault()
    //   e.stopPropagation()
    // },
    subMenu: [{ label: 'Пункт 1-1' }, { label: 'Пункт 1-2' }],
  },
  { label: 'Пункт меню 2' },
  { label: 'Пункт меню 3' },
]

export const MenuExampleBasic = () => (
  <Example>
    <Menu items={items} />
  </Example>
)

export const MenuExampleBasic200 = () => (
  <Example width="200px">
    <Menu items={items} />
  </Example>
)

export const MenuExampleBasic100 = () => (
  <Example width="100px">
    <Menu items={items} />
  </Example>
)
