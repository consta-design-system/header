import React from 'react'

import {
  TileMenu,
  TileMenuDefaultItem,
  tileMenuPropView,
  tileMenuPropViewDefault,
} from '@/TileMenu'

import { createMetadata } from '../../__private__/storybook'
import { select, boolean, text } from '@storybook/addon-knobs'
import { cn } from '@/__private__/utils/bem'
import './TileMenuStories.css'

import mdx from './TileMenu.docs.mdx'

const items: TileMenuDefaultItem[] = [
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
]

const defaultKnobs = () => ({
  view: select('view', tileMenuPropView, tileMenuPropViewDefault),
  isMobile: boolean('isMobile', false),
  listClassName: text('listClassName', 'CustomListClassName'),
  title: text('title', 'Заголовок'),
})

const cnTileMenuStories = cn('TileMenuStories')

export function Playground() {
  const { view, isMobile, listClassName, title } = defaultKnobs()
  return (
    <TileMenu
      view={view}
      items={items}
      isMobile={isMobile}
      listClassName={cnTileMenuStories('List', { isDesctop: !isMobile }, [listClassName])}
      title={title}
    />
  )
}

export default createMetadata({
  title: 'модули|/TileMenu',
  id: 'components/TileMenu',
  parameters: {
    docs: {
      page: mdx,
    },
  },
})
