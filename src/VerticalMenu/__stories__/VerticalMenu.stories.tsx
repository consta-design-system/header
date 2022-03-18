import React from 'react'

import { createMetadata } from '../../__private__/storybook'
import { VerticalMenu } from '../VerticalMenu'
import { cnMixSpace } from '@consta/uikit/MixSpace'

import { boolean } from '@storybook/addon-knobs'

import mdx from './VerticalMenu.docs.mdx'

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

const defaultKnobs = () => ({
  withHeader: boolean('withHeader', false),
})

export function Playground() {
  const { withHeader } = defaultKnobs()

  const header = withHeader && (
    <div className={cnMixSpace({ pH: 'xl', pV: 'm' })}>Заголовок меню</div>
  )

  return (
    <div style={{ height: '100vh' }}>
      <VerticalMenu
        items={menu}
        getItemLabel={item => item.name}
        getItemSubMenu={item => item.sub}
        header={header}
      />
    </div>
  )
}

export default createMetadata({
  title: 'модули|/VerticalMenu',
  id: 'components/VerticalMenu',
  parameters: {
    docs: {
      page: mdx,
    },
  },
})
