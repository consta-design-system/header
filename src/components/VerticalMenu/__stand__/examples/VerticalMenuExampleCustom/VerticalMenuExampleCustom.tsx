import { Example } from '@consta/stand';
import React from 'react';

import { VerticalMenu } from '##/components/VerticalMenu';

type MenuItem = {
  name: string;
  sub?: MenuItem[];
  href?: string;
  onClick?: React.EventHandler<React.MouseEvent>;
};

const menu: MenuItem[] = [
  {
    name: 'Пункт меню 1',
    // href: '#',
    // onClick: e => {
    //   e.preventDefault()
    //   e.stopPropagation()
    // },
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
              {
                name: 'Пункт меню 3-3-1',
                sub: [{ name: 'Пункт меню 3-3-1-1' }],
              },
              {
                name: 'Пункт меню 3-3-2',
                sub: [{ name: 'Пункт меню 3-3-2-1' }],
              },
              {
                name: 'Пункт меню 3-3-3',
                sub: [{ name: 'Пункт меню 3-3-3-1' }],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const VerticalMenuExampleCustom = () => (
  <Example>
    <VerticalMenu
      items={menu}
      style={{
        height: '150px',
        width: '300px',
      }}
      getItemLabel={(item) => item.name}
      getItemSubMenu={(item) => item.sub}
    />
  </Example>
);
