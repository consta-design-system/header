import { IconBento } from '@consta/icons/IconBento';
import { IconEye } from '@consta/icons/IconEye';
import { IconTrash } from '@consta/icons/IconTrash';
import { DefaultItem } from '@consta/uikit/Breadcrumbs';

import { MenuDefaultItem } from '##/components/Menu';
import { NotificationsListDefaultItem } from '##/components/Notifications';
import { TileMenuListDefaultItem } from '##/components/TileMenu';

const emptyFunction = () => {};

export const tiles: TileMenuListDefaultItem[] = [
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
];

export const notifications: NotificationsListDefaultItem[] = [
  {
    label: 'Иванов Иван Иванович',
    description: 'Добавил файлы в проект, план/факт по расчету предварительные',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
    date: new Date(2021, 10, 12, 13, 57, 0),
    read: false,
    badges: [
      {
        label: 'отчеты 1',
        status: 'normal',
      },
      {
        label: 'файлы 2',
        status: 'warning',
      },
      {
        label: 'система 3',
        status: 'success',
      },
      {
        label: 'отчеты 4',
        status: 'normal',
      },
      {
        label: 'файлы 5',
        status: 'warning',
      },
      {
        label: 'система 6',
        status: 'success',
      },
    ],
    onClick: emptyFunction,
    actions: [
      {
        label: 'Удалить',
        onClick: emptyFunction,
        icon: IconTrash,
      },
      {
        label: 'Отметить как прочитанное',
        onClick: emptyFunction,
        icon: IconEye,
      },
    ],
    view: 'user',
    group: 'd',
  },
  {
    label: 'Иванов Иван Иванович',
    description: 'Добавил файлы в проект, план/факт по расчету предварительные',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
    date: new Date(),
    read: true,
    badges: [
      {
        label: 'отчеты 1',
        status: 'normal',
      },
      {
        label: 'файлы 2',
        status: 'warning',
      },
      {
        label: 'система 3',
        status: 'success',
      },
      {
        label: 'отчеты 4',
        status: 'normal',
      },
      {
        label: 'файлы 5',
        status: 'warning',
      },
      {
        label: 'система 6',
        status: 'success',
      },
    ],
    onClick: emptyFunction,
    actions: [
      {
        label: 'Удалить',
        onClick: emptyFunction,
        icon: IconTrash,
      },
      {
        label: 'Отметить как прочитанное',
        onClick: emptyFunction,
        icon: IconEye,
      },
    ],
    view: 'user',
  },
  {
    label: 'Иванов Иван Иванович',
    description: 'Добавил файлы в проект, план/факт по расчету предварительные',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
    date: new Date(),
    read: true,
    badges: [
      {
        label: 'отчеты 1',
        status: 'normal',
      },
      {
        label: 'файлы 2',
        status: 'warning',
      },
      {
        label: 'система 3',
        status: 'success',
      },
      {
        label: 'отчеты 4',
        status: 'normal',
      },
      {
        label: 'файлы 5',
        status: 'warning',
      },
      {
        label: 'система 6',
        status: 'success',
      },
    ],
    onClick: emptyFunction,
    actions: [
      {
        label: 'Удалить',
        onClick: emptyFunction,
        icon: IconTrash,
      },
      {
        label: 'Отметить как прочитанное',
        onClick: emptyFunction,
        icon: IconEye,
      },
    ],
    view: 'user',
  },
];

export const menu: MenuDefaultItem[] = [
  {
    label: 'Пункт меню 1',
    href: '#',
    onClick: (e) => {
      e.preventDefault();
      e.stopPropagation();
    },
    subMenu: [{ label: 'Пункт меню 1-1' }, { label: 'Пункт меню 1-2' }],
    active: true,
  },
  { label: 'Пункт меню 2', subMenu: [{ label: 'Пункт меню 2-1' }] },
  {
    label: 'Пункт меню 3',
    subMenu: [
      { label: 'Пункт меню 3-1', subMenu: [{ label: 'Пункт меню 3-1-1' }] },
      { label: 'Пункт меню 3-2', subMenu: [{ label: 'Пункт меню 3-2-1' }] },
      {
        label: 'Пункт меню 3-3',
        subMenu: [
          { label: 'Пункт меню 3-1', subMenu: [{ label: 'Пункт меню 3-1-1' }] },
          { label: 'Пункт меню 3-2', subMenu: [{ label: 'Пункт меню 3-2-1' }] },
          {
            label: 'Пункт меню 3-3',
            subMenu: [
              {
                label: 'Пункт меню 3-3-1',
                subMenu: [{ label: 'Пункт меню 3-3-1-1' }],
              },
              {
                label: 'Пункт меню 3-3-2',
                subMenu: [{ label: 'Пункт меню 3-3-2-1' }],
              },
              {
                label: 'Пункт меню 3-3-3',
                subMenu: [{ label: 'Пункт меню 3-3-3-1' }],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const breadcrumbs: DefaultItem[] = [
  {
    label: 'Главная',
    icon: IconBento,
  },
  {
    label: 'Длинное название',
  },
  {
    label: 'Пункт 1.1',
    subMenu: [
      {
        label: 'Пункт 1.1.1',
      },
      {
        label: 'Пункт 1.1.2',
      },
      {
        label: 'Пункт 1.1.3',
      },
    ],
  },
  {
    label: 'Пункт 1.1.1',
  },
];
