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

export const items = [
  {
    label: 'Объекты',
    iconLeft: IconFlagFilled,
  },
  {
    label: 'Нефть и газ',
    iconLeft: IconGas,
  },
  {
    label: 'Электроэнергетика',
    iconLeft: IconLineAndBarChart,
  },
  {
    label: 'Карта',
    iconLeft: IconMap,
    active: true,
  },
  {
    label: 'Отображение данных',
    iconLeft: IconFolders,
  },
  {
    label: 'Информация',
    iconLeft: IconInfo,
  },
  {
    label: 'Сообщения',
    iconLeft: IconMail,
  },
];
export const NavBarExample = () => {
  return (
    <Example>
      <NavBar items={items} />
    </Example>
  );
};
