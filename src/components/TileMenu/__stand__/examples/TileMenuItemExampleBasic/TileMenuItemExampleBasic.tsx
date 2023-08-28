import { Example } from '@consta/stand';
import React from 'react';

import { TileMenuItem } from '##/components/TileMenu/TileMenuItem';
import Image from '##/images/Arhayka.image.jpeg';

export const TileMenuItemExampleBasic = () => {
  return (
    <Example>
      <TileMenuItem
        title="Пункт меню"
        description="Описание пункта меню"
        image={Image}
      />
    </Example>
  );
};
