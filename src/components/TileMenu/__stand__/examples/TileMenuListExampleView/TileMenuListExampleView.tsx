import { Example } from '@consta/stand';
import React from 'react';

import { items } from '##/components/TileMenu/__mocks__/data.mock';
import {
  TileMenuList,
  TileMenuListPropView,
  tileMenuListPropView,
} from '##/components/TileMenu/TileMenuList';

export const TileMenuListExampleView = () => {
  return (
    <Example
      col={1}
      items={[...tileMenuListPropView]}
      getItemNode={(view: TileMenuListPropView) => (
        <TileMenuList items={items} view={view} />
      )}
      getItemDescription={(view) => `view="${view}"`}
    />
  );
};
