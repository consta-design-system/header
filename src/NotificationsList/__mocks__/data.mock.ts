import { DefaultItem, DefaultAction, DefaultGroup } from '../types'
import { IconTrash } from '@consta/uikit/IconTrash'
import { IconEye } from '@consta/uikit/IconEye'

import { action } from '@storybook/addon-actions'

const emptyFunction = () => action('emptyFunction')

export const items: DefaultItem[] = [
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
]

export const itemsBadges: DefaultItem[] = [
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
]

export const itemsBasic: DefaultItem[] = [
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
]

export const itemsView: DefaultItem[] = [
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
]

export const itemsActions: DefaultItem[] = [
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
]

export const itemsRead: DefaultItem[] = [
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
]

export const itemsDate: DefaultItem[] = [
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
]

export const actions: DefaultAction[] = [
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
]

export const groups: DefaultGroup[] = [
  {
    label: 'важное',
    id: 'important',
  },
  {
    label: 'неважное',
    id: 'not',
  },
]

export const itemsGroups: DefaultItem[] = [
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
]
