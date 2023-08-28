import { Example } from '@consta/stand';
import React from 'react';

import { Menu } from '##/components/Menu';

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

export const MenuExampleBasic = () => (
  <Example>
    <Menu
      style={{
        width: 'min(500px, 90vw)',
      }}
      items={items}
    />
  </Example>
);

export const MenuExampleBasic200 = () => (
  <Example>
    <div
      style={{
        width: '300px',
      }}
    >
      <Menu
        style={{
          width: '200px',
        }}
        items={items}
      />
    </div>
  </Example>
);

export const MenuExampleBasic100 = () => (
  <Example>
    <div
      style={{
        width: '300px',
      }}
    >
      <Menu
        style={{
          width: '100px',
        }}
        items={items}
      />
    </div>
  </Example>
);
