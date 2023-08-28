import { Example } from '@consta/stand';
import React from 'react';

import { MegaMenuGlobal } from '##/components/MegaMenu/MegaMenuGlobal';

const items = [
  {
    label: 'Пункт 1.1',
    groupId: 1,
  },
  {
    label: 'Пункт 1.2',
    groupId: 1,
  },
  {
    label: 'Пункт 1.3',
    groupId: 1,
  },
  {
    label: 'Пункт 1.4',
    groupId: 1,
  },
  {
    label: 'Пункт 2.1',
    groupId: 2,
  },
  {
    label: 'Пункт 2.2',
    groupId: 2,
  },
  {
    label: 'Пункт 2.3',
    groupId: 2,
  },
];

const groups = [
  { label: 'Первая группа', id: 1 },
  { label: 'Вторая группа', id: 2 },
];

export const MegaMenuGlobalExample = () => {
  return (
    <Example>
      <MegaMenuGlobal
        items={items}
        groups={groups}
        title="Объекты"
        columns={2}
      />
    </Example>
  );
};
