import { DefaultItem, DefaultAction } from '@/NotificationsList'
import { IconTrash } from '@consta/uikit/IconTrash'
import { IconEye } from '@consta/uikit/IconEye'

import { action } from '@storybook/addon-actions'

const emptyFunction = () => action('emptyFunction')

export const notifications: DefaultItem[] = [
  {
    label: 'Андриевский Дмитрий Олегович',
    description: 'Добавил файлы в проект, план/факт по расчету предварительные',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
    date: new Date(2021, 10, 12, 13, 57, 0),
    read: false,
    badges: [
      {
        label: 'отчеты',
        status: 'normal',
      },
      {
        label: 'файлы',
        status: 'warning',
      },
      {
        label: 'система',
        status: 'success',
      },
      {
        label: 'отчеты 4',
        status: 'normal',
      },
      {
        label: 'файлы',
        status: 'warning',
      },
      {
        label: 'система',
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
    label: 'Андриевский Дмитрий Олегович',
    description: 'Добавил файлы в проект, план/факт по расчету предварительные',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
    date: new Date(),
    read: true,
    badges: [
      {
        label: 'отчеты',
        status: 'normal',
      },
      {
        label: 'файлы',
        status: 'warning',
      },
      {
        label: 'система',
        status: 'success',
      },
      {
        label: 'отчеты 4',
        status: 'normal',
      },
      {
        label: 'файлы',
        status: 'warning',
      },
      {
        label: 'система',
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
    label: 'Андриевский Дмитрий Олегович',
    description: 'Добавил файлы в проект, план/факт по расчету предварительные',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
    date: new Date(),
    read: true,
    badges: [
      {
        label: 'отчеты',
        status: 'normal',
      },
      {
        label: 'файлы',
        status: 'warning',
      },
      {
        label: 'система',
        status: 'success',
      },
      {
        label: 'отчеты 4',
        status: 'normal',
      },
      {
        label: 'файлы',
        status: 'warning',
      },
      {
        label: 'система',
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
    label: 'Андриевский Дмитрий Олегович',
    description: 'Добавил файлы в проект, план/факт по расчету предварительные',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
    date: new Date(),
    read: true,
    badges: [
      {
        label: 'отчеты',
        status: 'normal',
      },
      {
        label: 'файлы',
        status: 'warning',
      },
      {
        label: 'система',
        status: 'success',
      },
      {
        label: 'отчеты 4',
        status: 'normal',
      },
      {
        label: 'файлы',
        status: 'warning',
      },
      {
        label: 'система',
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
    label: 'Андриевский Дмитрий Олегович',
    description: 'Добавил файлы в проект, план/факт по расчету предварительные',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
    date: new Date(),
    read: true,
    badges: [
      {
        label: 'отчеты',
        status: 'normal',
      },
      {
        label: 'файлы',
        status: 'warning',
      },
      {
        label: 'система',
        status: 'success',
      },
      {
        label: 'отчеты 4',
        status: 'normal',
      },
      {
        label: 'файлы',
        status: 'warning',
      },
      {
        label: 'система',
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
    label: 'Андриевский Дмитрий Олегович',
    description: 'Добавил файлы в проект, план/факт по расчету предварительные',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
    date: new Date(),
    read: true,
    badges: [
      {
        label: 'отчеты',
        status: 'normal',
      },
      {
        label: 'файлы',
        status: 'warning',
      },
      {
        label: 'система',
        status: 'success',
      },
      {
        label: 'отчеты 4',
        status: 'normal',
      },
      {
        label: 'файлы',
        status: 'warning',
      },
      {
        label: 'система',
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

export const notificationsActions: DefaultAction[] = [
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

type MenuItem = {
  label: string
  subMenu?: MenuItem[]
  href?: string
  onClick?: React.EventHandler<React.MouseEvent>
}

export const menu: MenuItem[] = [
  {
    label: 'Пункт меню 1',
    href: '#',
    onClick: e => {
      e.preventDefault()
      e.stopPropagation()
    },
    subMenu: [{ label: 'Пункт меню 1-1' }, { label: 'Пункт меню 1-2' }],
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
              { label: 'Пункт меню 3-3-1', subMenu: [{ label: 'Пункт меню 3-3-1-1' }] },
              { label: 'Пункт меню 3-3-2', subMenu: [{ label: 'Пункт меню 3-3-2-1' }] },
              { label: 'Пункт меню 3-3-3', subMenu: [{ label: 'Пункт меню 3-3-3-1' }] },
            ],
          },
        ],
      },
    ],
  },
]

type TileMenuItem = {
  title: string
  description: string
  image: string
}

export const tileMenu: TileMenuItem[] = [
  {
    title: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    title: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    title: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    title: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    title: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    title: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    title: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    title: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
]
