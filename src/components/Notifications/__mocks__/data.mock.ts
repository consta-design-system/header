import { IconEye } from '@consta/icons/IconEye';
import { IconTrash } from '@consta/icons/IconTrash';

import { NotificationsItemAction } from '../NotificationsItem';
import {
  NotificationsListDefaultGroup,
  NotificationsListDefaultItem,
} from '../NotificationsList';

const emptyFunction = () => {};

export const items: NotificationsListDefaultItem[] = [
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

export const itemsBadges: NotificationsListDefaultItem[] = [
  {
    label: 'Один человек',
    description: 'Принёс краску',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
    badges: [
      {
        label: 'готов к работе',
        status: 'warning',
      },
      {
        label: 'горит',
        status: 'error',
      },
    ],
  },
  {
    label: 'Другой человек',
    description: 'Покрасил забор',
    image: 'https://avatars.githubusercontent.com/u/12581569?s=40&v=4',
    badges: [
      {
        label: 'покрашен',
        status: 'success',
      },
    ],
  },
];

export const itemsBasic: NotificationsListDefaultItem[] = [
  {
    label: 'Один человек',
    description: 'Принёс краску',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Другой человек',
    description: 'Покрасил забор',
    image: 'https://avatars.githubusercontent.com/u/12581569?s=40&v=4',
  },
];

export const itemsView: NotificationsListDefaultItem[] = [
  {
    label: 'Иванов Иван Иванович',
    description: 'Принёс краску',
    view: 'default',
  },
  {
    label: 'Петров Петр Петрович',
    description: 'Покрасил забор',
    view: 'user',
  },
];

export const itemsActions: NotificationsListDefaultItem[] = [
  {
    label: 'Иванов Иван Иванович',
    description: 'Принёс краску',
    image: 'https://avatars.githubusercontent.com/u/12581569?s=40&v=4',
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
  },
  {
    label: 'Петров Петр Петрович',
    description: 'Покрасил забор',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
    actions: [
      {
        label: 'Положить в корзину',
        onClick: emptyFunction,
        icon: IconTrash,
      },
      {
        label: 'Я посмотрел',
        onClick: emptyFunction,
        icon: IconEye,
      },
    ],
  },
];

export const itemsRead: NotificationsListDefaultItem[] = [
  {
    label: 'Прочитанное уведомление',
    description: 'Принёс краску',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
    read: true,
  },
  {
    label: 'Непрочитанное уведомление',
    description: 'Покрасил забор',
    image: 'https://avatars.githubusercontent.com/u/12581569?s=40&v=4',
    read: false,
  },
];

export const itemsDate: NotificationsListDefaultItem[] = [
  {
    label: 'Первое уведомление',
    description: 'Привет, мир',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
    date: new Date(2021, 10, 12, 13, 57, 0),
  },
  {
    label: 'Второе уведомление',
    description: 'Пока-пока',
    image: 'https://avatars.githubusercontent.com/u/12581569?s=40&v=4',
    date: new Date(2021, 10, 12, 13, 57, 0),
  },
  {
    label: 'Третее уведомление',
    description: 'Пока-пока',
    image: 'https://avatars.githubusercontent.com/u/12581569?s=40&v=4',
    date: new Date(),
  },
  {
    label: 'Четвёртое уведомление',
    description: 'Пока-пока',
    image: 'https://avatars.githubusercontent.com/u/12581569?s=40&v=4',
    date: new Date(),
  },
];

export const actions: NotificationsItemAction[] = [
  {
    label: 'Отметить все как прочитанное',
    onClick: emptyFunction,
    icon: IconEye,
  },
  {
    label: 'Удалить все',
    onClick: emptyFunction,
    icon: IconTrash,
  },
];

export const groups: NotificationsListDefaultGroup[] = [
  {
    label: 'важное',
    id: 'important',
  },
  {
    label: 'неважное',
    id: 'not',
  },
];

export const itemsGroups: NotificationsListDefaultItem[] = [
  {
    label: 'Первое уведомление',
    description: 'Привет, мир',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
    group: 'important',
  },
  {
    label: 'Второе уведомление',
    description: 'Пока-пока',
    image: 'https://avatars.githubusercontent.com/u/12581569?s=40&v=4',
    group: 'not',
  },
  {
    label: 'Третее уведомление',
    description: 'Пока-пока',
    image: 'https://avatars.githubusercontent.com/u/12581569?s=40&v=4',
    group: 'not',
  },
  {
    label: 'Четвёртое уведомление',
    description: 'Пока-пока',
    image: 'https://avatars.githubusercontent.com/u/12581569?s=40&v=4',
    group: 'important',
  },
];
