import './Menu.variants.css';

import React from 'react';

import { cn } from '##/utils/bem';

import { Menu } from '../Menu';

type MenuItem = {
  name: string;
  sub?: MenuItem[];
  href?: string;
  onClick?: React.EventHandler<React.MouseEvent>;
  active?: boolean;
};

const menu: MenuItem[] = [
  {
    name: 'Пункт меню 1',
    href: '#',
    onClick: (e) => {
      e.preventDefault();
      e.stopPropagation();
    },
    sub: [{ name: 'Пункт меню 1-1' }, { name: 'Пункт меню 1-2' }],
    active: true,
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

const cnMenuStories = cn('MenuStories');

export const Variants = () => {
  return (
    <div style={{ width: 600 }}>
      <Menu
        className={cnMenuStories()}
        items={menu}
        getItemLabel={(item) => item.name}
        getItemSubMenu={(item) => item.sub}
      />
    </div>
  );
};

export default Variants;
