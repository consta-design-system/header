import { Example } from '@consta/stand';
import React from 'react';

import {
  TileMenuItem,
  TileMenuItemPropView,
  tileMenuItemPropView,
} from '##/components/TileMenu/TileMenuItem';

export const TileMenuItemExampleView = () => {
  return (
    <Example
      col={2}
      items={[...tileMenuItemPropView]}
      getItemNode={(view: TileMenuItemPropView) => (
        <TileMenuItem
          view={view}
          title="Пункт меню"
          description="Описание пункта меню"
          image="https://avatars.githubusercontent.com/u/12581569?s=40&v=4"
        />
      )}
      getItemDescription={(view) => `view="${view}"`}
    />
  );
};
