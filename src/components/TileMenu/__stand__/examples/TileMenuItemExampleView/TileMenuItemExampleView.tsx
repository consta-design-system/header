import { Example } from '@consta/stand';
import React from 'react';

import {
  TileMenuItem,
  TileMenuItemPropView,
  tileMenuItemPropView,
} from '##/components/TileMenu/TileMenuItem';
import Image from '##/images/Arhayka.image.jpeg';

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
          image={Image}
        />
      )}
      getItemDescription={(view) => `view="${view}"`}
    />
  );
};
