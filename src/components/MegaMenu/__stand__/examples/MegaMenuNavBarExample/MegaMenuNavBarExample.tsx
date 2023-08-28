import { IconFlagFilled } from '@consta/icons/IconFlagFilled';
import { IconFolders } from '@consta/icons/IconFolders';
import { IconGas } from '@consta/icons/IconGas';
import { IconInfo } from '@consta/icons/IconInfo';
import { IconLineAndBarChart } from '@consta/icons/IconLineAndBarChart';
import { IconMail } from '@consta/icons/IconMail';
import { IconMapFilled } from '@consta/icons/IconMapFilled';
import { Example } from '@consta/stand';
import React from 'react';

import { MegaMenuNavBar } from '##/components/MegaMenu/MegaMenuNavBar';

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
    iconLeft: IconMapFilled,
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
export const MegaMenuNavBarExample = () => {
  return (
    <Example>
      <MegaMenuNavBar items={items} />
    </Example>
  );
};
