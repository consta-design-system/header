import { Example } from '@consta/stand';
import { IconComponent } from '@consta/uikit/Icon';
import { IconFlagFilled } from '@consta/uikit/IconFlagFilled';
import { IconFolders } from '@consta/uikit/IconFolders';
import { IconGas } from '@consta/uikit/IconGas';
import { IconInfo } from '@consta/uikit/IconInfo';
import { IconLineAndBarChart } from '@consta/uikit/IconLineAndBarChart';
import { IconMail } from '@consta/uikit/IconMail';
import { IconMap } from '@consta/uikit/IconMap';
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
