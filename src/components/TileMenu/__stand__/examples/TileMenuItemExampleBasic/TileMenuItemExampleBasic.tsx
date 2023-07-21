import { Example } from '@consta/stand';
import React from 'react';

import { TileMenuItem } from '##/components/TileMenu/TileMenuItem';

export const TileMenuItemExampleBasic = () => {
  return (
    <Example>
      <TileMenuItem
        title="Пункт меню"
        description="Описание пункта меню"
        image="https://avatars.githubusercontent.com/u/12581569?s=40&v=4"
      />
    </Example>
  );
};
