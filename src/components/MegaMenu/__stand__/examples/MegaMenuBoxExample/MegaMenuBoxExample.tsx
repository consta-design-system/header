import { IconFlagFilled } from '@consta/icons/IconFlagFilled';
import { IconFolders } from '@consta/icons/IconFolders';
import { IconGas } from '@consta/icons/IconGas';
import { IconInfo } from '@consta/icons/IconInfo';
import { IconLineAndBarChart } from '@consta/icons/IconLineAndBarChart';
import { IconMail } from '@consta/icons/IconMail';
import { IconMapFilled } from '@consta/icons/IconMapFilled';
import { Example } from '@consta/stand';
import { Button } from '@consta/uikit/Button';
import { useFlag } from '@consta/uikit/useFlag';
import React from 'react';

import { MegaMenu } from '##/components/MegaMenu/MegaMenu';
import { MegaMenuBox } from '##/components/MegaMenu/MegaMenuBox';

const getSubMenu = (prefix?: string) => [
  {
    key: `${prefix ? `${prefix}.` : ''}1`,
    label: 'Электростанции',
    subMenu: [
      {
        key: `${prefix ? `${prefix}.` : ''}1.1`,
        label: 'Ветряные электростанции',
      },
      {
        key: `${prefix ? `${prefix}.` : ''}1.2`,
        label: 'Солнечные электростанции',
      },
      {
        key: `${prefix ? `${prefix}.` : ''}1.3`,
        label: 'Гидроэлектростанции',
      },
      {
        key: `${prefix ? `${prefix}.` : ''}1.4`,
        label: 'Гидроаккумулирующие электростанции',
      },
      {
        key: `${prefix ? `${prefix}.` : ''}1.5`,
        label: 'Теплоэлектроцентрали',
      },
      {
        key: `${prefix ? `${prefix}.` : ''}1.6`,
        label: 'Газопоршневые станции',
      },
    ],
  },
  {
    key: `${prefix ? `${prefix}.` : ''}2`,
    label: 'Угольные шахты и резервы',
    subMenu: [
      {
        key: `${prefix ? `${prefix}.` : ''}2.1`,
        label: 'Бошняково',
      },
      {
        key: `${prefix ? `${prefix}.` : ''}2.2`,
        label: 'Горнозаводская',
      },
      {
        key: `${prefix ? `${prefix}.` : ''}2.3`,
        label: 'Гундоровская',
      },
      {
        key: `${prefix ? `${prefix}.` : ''}2.4`,
        label: 'Мгачи',
      },
      {
        key: `${prefix ? `${prefix}.` : ''}2.5`,
        label: 'Коркинский угольный разрез',
      },
    ],
  },
  {
    key: `${prefix ? `${prefix}.` : ''}3`,
    label: 'Трубопроводы',
    subMenu: [
      {
        key: `${prefix ? `${prefix}.` : ''}3.1`,
        label: 'Газопроводы',
      },
      {
        key: `${prefix ? `${prefix}.` : ''}3.2`,
        label: 'Нефтепроводы',
      },
      {
        key: `${prefix ? `${prefix}.` : ''}3.3`,
        label: 'Продуктопроводы',
      },
    ],
  },
  {
    key: `${prefix ? `${prefix}.` : ''}4`,
    label: 'Перерабатывающие заводы',
    subMenu: [
      {
        key: `${prefix ? `${prefix}.` : ''}4.1`,
        label: 'Нефтепереработка',
      },
      {
        key: `${prefix ? `${prefix}.` : ''}4.2`,
        label: 'Газопереработка',
      },
      {
        key: `${prefix ? `${prefix}.` : ''}4.3`,
        label: 'Нефтехимическая переработка',
      },
      {
        key: `${prefix ? `${prefix}.` : ''}4.4`,
        label: 'Заводы по производству СПГ',
      },
    ],
  },
];

const items = [
  {
    key: '1',
    label: 'Объекты',
    iconLeft: IconFlagFilled,
    subMenu: getSubMenu('1'),
  },
  {
    key: '2',
    label: 'Нефть и газ',
    iconLeft: IconGas,
    subMenu: getSubMenu('2'),
  },
  {
    key: '3',
    label: 'Электроэнергетика',
    iconLeft: IconLineAndBarChart,
    subMenu: getSubMenu('3'),
  },
  {
    key: '4',
    label: 'Карта',
    iconLeft: IconMapFilled,
    subMenu: getSubMenu('4'),
  },
  {
    key: '5',
    label: 'Отображение данных',
    iconLeft: IconFolders,
    subMenu: getSubMenu('5'),
  },
  {
    key: '6',
    label: 'Информация',
    iconLeft: IconInfo,
  },
  {
    key: '7',
    label: 'Сообщения',
    iconLeft: IconMail,
  },
];

export const MegaMenuBoxExample = () => {
  const [isOpen, setIsOpen] = useFlag();
  return (
    <Example>
      <MegaMenuBox offset={60} isOpen={isOpen} onClickOutside={setIsOpen.off}>
        <MegaMenu items={items} menuMaxElements={4} />
      </MegaMenuBox>
      <Button label="Открыть" onClick={setIsOpen.on} />
    </Example>
  );
};
