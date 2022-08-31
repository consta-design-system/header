import { cnMixSpace } from '@consta/uikit/MixSpace';
import React from 'react';

import { Badges } from '##/components/Badges';
import { Example } from '##/stand/components/Example';

const items = [
  {
    label: 'отчеты',
    status: 'normal',
  },
  {
    label: 'файлы',
    status: 'warning',
  },
  {
    label: 'система',
    status: 'success',
  },
  {
    label: 'отчеты',
    status: 'normal',
  },
  {
    label: 'файлы',
    status: 'warning',
  },
  {
    label: 'система',
    status: 'success',
  },
];

export const BadgesExampleBasic = () => (
  <Example>
    <Badges items={items} />
  </Example>
);

export const BadgesExampleBasic200 = () => (
  <Example width="200px">
    <Badges items={items} />
  </Example>
);

export const BadgesExampleBasic100 = () => (
  <Example width="100px">
    <Badges items={items} />
  </Example>
);

export const BadgesExampleForm = () => (
  <Example>
    <Badges className={cnMixSpace({ mB: 'l' })} items={items} form="default" />
    <Badges items={items} form="round" />
  </Example>
);

export const BadgesExampleSize = () => (
  <Example>
    <Badges className={cnMixSpace({ mB: 'l' })} items={items} size="l" />
    <Badges className={cnMixSpace({ mB: 'l' })} items={items} size="m" />
    <Badges items={items} size="s" />
  </Example>
);

export const BadgesExampleView = () => (
  <Example>
    <Badges className={cnMixSpace({ mB: 'l' })} items={items} view="filled" />
    <Badges items={items} view="stroked" />
  </Example>
);
