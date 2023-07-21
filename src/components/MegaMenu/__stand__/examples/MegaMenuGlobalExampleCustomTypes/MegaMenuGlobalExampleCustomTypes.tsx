import { Example } from '@consta/stand';
import React from 'react';

import { MegaMenuGlobal } from '##/components/MegaMenu/MegaMenuGlobal';

type Item = {
  text: string;
  group: number;
};

type Group = {
  key: number;
  name: string;
};

const items: Item[] = [
  {
    text: 'Пункт 1.1',
    group: 1,
  },
  {
    text: 'Пункт 1.2',
    group: 1,
  },
  {
    text: 'Пункт 1.3',
    group: 1,
  },
  {
    text: 'Пункт 1.4',
    group: 1,
  },
  {
    text: 'Пункт 2.1',
    group: 2,
  },
  {
    text: 'Пункт 2.2',
    group: 2,
  },
  {
    text: 'Пункт 2.3',
    group: 2,
  },
];

const groups: Group[] = [
  { name: 'Первая группа', key: 1 },
  { name: 'Вторая группа', key: 2 },
];

export const MegaMenuGlobalExampleCustomTypes = () => {
  return (
    <Example>
      <MegaMenuGlobal
        items={items}
        groups={groups}
        title="Объекты"
        getItemLabel={(item) => item.text}
        getItemGroupId={(item) => item.group}
        getGroupLabel={(group) => group.name}
        getGroupKey={(group) => group.key}
        maxElements={5}
        columns={3}
      />
    </Example>
  );
};
