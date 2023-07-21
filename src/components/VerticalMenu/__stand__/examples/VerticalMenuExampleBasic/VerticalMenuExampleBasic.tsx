import { Example } from '@consta/stand';
import React from 'react';

import { VerticalMenu } from '##/components/VerticalMenu';

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
];

export const VerticalMenuExampleBasic = () => (
  <Example>
    <VerticalMenu
      style={{
        height: '150px',
        width: '300px',
      }}
      items={items}
    />
  </Example>
);
