import { cnMixSpace } from '@consta/uikit/MixSpace';
import React from 'react';

import { VerticalMenu } from '##/components/VerticalMenu';
import { Example } from '##/stand/components/Example';

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
export const VerticalMenuExampleHeader = () => (
  <Example height="200px" width="300px">
    <VerticalMenu
      items={items}
      header={
        <div className={cnMixSpace({ pH: 'xl', pV: 'm' })}>Заголовок меню</div>
      }
    />
  </Example>
);
