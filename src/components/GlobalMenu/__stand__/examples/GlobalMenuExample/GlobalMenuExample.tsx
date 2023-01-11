import React from 'react';

import { GlobalMenu } from '##/components/GlobalMenu/GlobalMenu';

import { groups, items } from '../../../__mocks__/mock.data';

export const GlobalMenuExample = () => {
  return (
    <GlobalMenu
      items={items}
      groups={groups}
      title="Объекты"
      maxElements={5}
      columns={3}
    />
  );
};
