import { Example } from '@consta/stand';
import React from 'react';

import { items } from '##/components/TileMenu/__mocks__/data.mock';
import { TileMenuList } from '##/components/TileMenu/TileMenuList';

export const TileMenuListExample = () => {
  return (
    <Example>
      <TileMenuList items={items} />
    </Example>
  );
};
