import { Example } from '@consta/stand';
import React from 'react';

import { SelectMenu } from '##/components/SelectMenu';

const menu = ['Все ресурсы портала знаний', 'Закупки', 'Контакты'];

const getLabel = (item: string) => item;

export const SelectMenuExample = () => (
  <Example>
    <SelectMenu items={menu} getItemLabel={getLabel} label="Выберите" />
  </Example>
);

export const SelectMenuExample30 = () => (
  <Example>
    <div
      style={{
        width: 400,
      }}
    >
      <SelectMenu
        style={{
          width: 300,
        }}
        items={menu}
        getItemLabel={getLabel}
        label="Выберите что-нибудь из этого списка"
      />
    </div>
  </Example>
);

export const SelectMenuExample200 = () => (
  <Example>
    <div
      style={{
        width: 400,
      }}
    >
      <SelectMenu
        style={{
          width: 200,
        }}
        items={menu}
        getItemLabel={getLabel}
        label="Выберите что-нибудь из этого списка"
      />
    </div>
  </Example>
);
