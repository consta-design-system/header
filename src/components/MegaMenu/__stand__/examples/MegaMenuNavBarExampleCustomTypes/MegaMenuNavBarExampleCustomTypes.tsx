import { IconComponent } from '@consta/icons/Icon';
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
    left: IconMapFilled,
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
export const MegaMenuNavBarExampleCustomTypes = () => {
  return (
    <Example>
      <MegaMenuNavBar
        getItemLabel={(item) => item.text}
        getItemIconLeft={(item) => item.left}
        getItemActive={(item) => item.checked}
        items={items}
      />
    </Example>
  );
};
