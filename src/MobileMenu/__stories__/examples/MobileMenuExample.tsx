import React from 'react'

import { Example } from '@/__private__/storybook'

import { MobileMenu } from '@/MobileMenu'

const items = [
  {
    label: 'Пункт 1',
    // href: '#',
    // onClick: e => {
    //   e.preventDefault()
    //   e.stopPropagation()
    // },
    subMenu: [{ label: 'Пункт 1-1' }, { label: 'Пункт 1-2' }],
  },
  { label: 'Пункт меню 2' },
  { label: 'Пункт меню 3' },
]

export const MobileMenuExampleBasic = () => (
  <Example>
    <MobileMenu items={items} style={{ zIndex: 10 }} />
  </Example>
)
