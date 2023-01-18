import { IconFlagFilled } from '@consta/uikit/IconFlagFilled';
import { IconFolders } from '@consta/uikit/IconFolders';
import { IconGas } from '@consta/uikit/IconGas';
import { IconInfo } from '@consta/uikit/IconInfo';
import { IconLineAndBarChart } from '@consta/uikit/IconLineAndBarChart';
import { IconMail } from '@consta/uikit/IconMail';
import { IconMap } from '@consta/uikit/IconMap';

import { MegaMenuDefaultItem } from '../types';

export const getSubMenu: (prefix?: string) => MegaMenuDefaultItem[] = (
  prefix = '',
) => [
  {
    key: `${prefix ? `${prefix}.` : ''}1`,
    label: 'Электростанции',
    subMenu: [
      {
        key: `${prefix ? `${prefix}.` : ''}1.1`,
        label: `Ветряные электростанции ${prefix}`,
      },
      {
        key: `${prefix ? `${prefix}.` : ''}1.2`,
        label: `Солнечные электростанции ${prefix}`,
      },
      {
        key: `${prefix ? `${prefix}.` : ''}1.3`,
        label: `Гидроэлектростанции ${prefix}`,
      },
      {
        key: `${prefix ? `${prefix}.` : ''}1.4`,
        label: `Гидроаккумулирующие электростанции ${prefix}`,
      },
      {
        key: `${prefix ? `${prefix}.` : ''}1.5`,
        label: `Теплоэлектроцентрали ${prefix}`,
      },
      {
        key: `${prefix ? `${prefix}.` : ''}1.6`,
        label: `Газопоршневые станции ${prefix}`,
      },
    ],
  },
  {
    key: `${prefix ? `${prefix}.` : ''}2`,
    label: 'Угольные шахты и резервы',
    subMenu: [
      {
        key: `${prefix ? `${prefix}.` : ''}2.1`,
        label: `Бошняково ${prefix}`,
      },
      {
        key: `${prefix ? `${prefix}.` : ''}2.2`,
        label: `Горнозаводская ${prefix}`,
      },
      {
        key: `${prefix ? `${prefix}.` : ''}2.3`,
        label: `Гундоровская ${prefix}`,
      },
      {
        key: `${prefix ? `${prefix}.` : ''}2.4`,
        label: `Мгачи ${prefix}`,
      },
      {
        key: `${prefix ? `${prefix}.` : ''}2.5`,
        label: `Коркинский угольный разрез ${prefix}`,
      },
    ],
  },
  {
    key: `${prefix ? `${prefix}.` : ''}3`,
    label: 'Трубопровод',
    subMenu: [
      {
        key: `${prefix ? `${prefix}.` : ''}3.1`,
        label: `Газопроводы ${prefix}`,
      },
      {
        key: `${prefix ? `${prefix}.` : ''}3.2`,
        label: `Нефтепроводы ${prefix}`,
      },
      {
        key: `${prefix ? `${prefix}.` : ''}3.3`,
        label: `Продуктопроводы ${prefix}`,
      },
    ],
  },
  {
    key: `${prefix ? `${prefix}.` : ''}4`,
    label: `Перерабатывающие заводы`,
    subMenu: [
      {
        key: `${prefix ? `${prefix}.` : ''}4.1`,
        label: `Нефтепереработка ${prefix}`,
      },
      {
        key: `${prefix ? `${prefix}.` : ''}4.2`,
        label: `Газопереработка ${prefix}`,
      },
      {
        key: `${prefix ? `${prefix}.` : ''}4.3`,
        label: `Нефтехимическая переработка ${prefix}`,
      },
      {
        key: `${prefix ? `${prefix}.` : ''}4.4`,
        label: `Заводы по производству СПГ ${prefix}`,
      },
    ],
  },
];
export const getItems = (withSubmenu: boolean): MegaMenuDefaultItem[] => [
  {
    key: '1',
    label: 'Объекты',
    iconLeft: IconFlagFilled,
    subMenu: withSubmenu ? getSubMenu('1') : undefined,
  },
  {
    key: '2',
    label: 'Нефть и газ',
    iconLeft: IconGas,
    subMenu: withSubmenu ? getSubMenu('2') : undefined,
  },
  {
    key: '3',
    label: 'Электроэнергетика',
    iconLeft: IconLineAndBarChart,
    subMenu: withSubmenu ? getSubMenu('3') : undefined,
  },
  {
    key: '4',
    label: 'Карта',
    iconLeft: IconMap,
    subMenu: withSubmenu ? getSubMenu('4') : undefined,
  },
  {
    key: '5',
    label: 'Отображение данных',
    iconLeft: IconFolders,
    subMenu: withSubmenu ? getSubMenu('5') : undefined,
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
