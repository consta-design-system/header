import { IconComponent } from '@consta/uikit/Icon';
import { IconFlagFilled } from '@consta/uikit/IconFlagFilled';
import { IconFolders } from '@consta/uikit/IconFolders';
import { IconGas } from '@consta/uikit/IconGas';
import { IconInfo } from '@consta/uikit/IconInfo';
import { IconLineAndBarChart } from '@consta/uikit/IconLineAndBarChart';
import { IconMail } from '@consta/uikit/IconMail';
import { IconMap } from '@consta/uikit/IconMap';
import React from 'react';

import { NavBar } from '##/components/NavBar/NavBar';
import { Example } from '##/stand/components/Example';

type Item = {
  text: string;
  left: IconComponent;
  checked?: boolean;
};

export const items: Item[] = [
  {
    text: 'Объекты',
    left: IconFlagFilled,
  },
  {
    text: 'Нефть и газ',
    left: IconGas,
  },
  {
    text: 'Электроэнергетика',
    left: IconLineAndBarChart,
  },
  {
    text: 'Карта',
    left: IconMap,
    checked: true,
  },
  {
    text: 'Отображение данных',
    left: IconFolders,
  },
  {
    text: 'Информация',
    left: IconInfo,
  },
  {
    text: 'Сообщения',
    left: IconMail,
  },
];
export const NavBarExampleCustomTypes = () => {
  return (
    <Example>
      <NavBar
        getItemLabel={(item) => item.text}
        getItemIconLeft={(item) => item.left}
        getItemActive={(item) => item.checked}
        items={items}
      />
    </Example>
  );
};
