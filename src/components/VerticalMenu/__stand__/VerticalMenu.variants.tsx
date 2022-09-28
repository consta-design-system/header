import { useBoolean } from '@consta/stand';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import React from 'react';

import { VerticalMenu } from '../VerticalMenu';

type MenuItem = {
  name: string;
  sub?: MenuItem[];
  href?: string;
  onClick?: React.EventHandler<React.MouseEvent>;
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

export const Variants = () => {
  const withHeader = useBoolean('withHeader', false);
  const withFooter = useBoolean('withFooter', false);

  const header = withHeader && (
    <div className={cnMixSpace({ pH: 'xl', pV: 'm' })}>Заголовок меню</div>
  );
  const footer = withFooter && (
    <div className={cnMixSpace({ pH: 'xl', pV: 'm' })}>Подвал меню</div>
  );

  return (
    <VerticalMenu
      style={{ width: 260, height: 300 }}
      items={menu}
      getItemLabel={(item) => item.name}
      getItemSubMenu={(item) => item.sub}
      header={header}
      footer={footer}
    />
  );
};

export default Variants;
