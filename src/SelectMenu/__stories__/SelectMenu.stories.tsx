import React from 'react'

import { createMetadata } from '../../__private__/storybook'
import { SelectMenu } from '../SelectMenu'

import mdx from './SelectMenu.docs.mdx'

const menu = ['Все ресурсы портала знаний', 'Закупки', 'Контакты']

const getLabel = (item: string) => item

export function Playground() {
  return (
    <div style={{ height: '100vh' }}>
      <SelectMenu items={menu} getItemLabel={getLabel} label="Выберите" />
    </div>
  )
}

export default createMetadata({
  title: 'Компоненты|/SelectMenu',
  id: 'components/SelectMenu',
  parameters: {
    docs: {
      page: mdx,
    },
  },
})
