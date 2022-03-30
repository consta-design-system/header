import React from 'react'

import { Example } from '@/__private__/storybook'

import { SelectMenu } from '@/SelectMenu'

const menu = ['Все ресурсы портала знаний', 'Закупки', 'Контакты']

const getLabel = (item: string) => item

export const SelectMenuExample = () => (
  <Example>
    <SelectMenu items={menu} getItemLabel={getLabel} label="Выберите" />
  </Example>
)

export const SelectMenuExample30 = () => (
  <Example width="30px">
    <SelectMenu items={menu} getItemLabel={getLabel} label="Выберите что-нибудь из этого списка" />
  </Example>
)

export const SelectMenuExample200 = () => (
  <Example width="200px">
    <SelectMenu items={menu} getItemLabel={getLabel} label="Выберите что-нибудь из этого списка" />
  </Example>
)
