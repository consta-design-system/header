import React from 'react'

import { Header } from '@/Header'

import { createMetadata } from '../../__private__/storybook'
import { ConstaLogo } from './ConstaLogo'
import { select, boolean } from '@storybook/addon-knobs'
import { getByMap } from '@consta/uikit/__internal__/src/utils/getByMap'
import { menu, notifications, notificationsActions, tileMenu } from '../__mocks__/data.mock'

import mdx from './Header.docs.mdx'

const logoMap = {
  undefined,
  Text: 'Consta',
  Svg: <ConstaLogo />,
}

const defaultKnobs = () => ({
  logo: select('logo', ['undefined', 'Text', 'Svg'], 'Svg'),
  withMenu: boolean('widthMenu', true),
  withTileMenu: boolean('widthTileMenu', true),
  withNotifications: boolean('widthNotifications', true),
  withLogin: boolean('withLogin', true),
})

export function Playground() {
  const { logo, withMenu, withTileMenu, withNotifications, withLogin } = defaultKnobs()

  const tileMenuProps = withTileMenu && { tileMenu, tileMenuTitle: 'Сервисы' }
  const menuProps = withMenu && { menu }
  const notificationsProps = withNotifications && {
    notifications,
    notificationsActions,
    notificationsTitle: 'Уведомления',
    notificationsGroupByDay: true,
  }
  const loginProps = withLogin && {
    userName: 'Иванов Иван',
    userInfo: 'Владелец',
    loginButtonLabel: 'Войти',
    userLogined: true,
  }

  return (
    <Header
      style={{ zIndex: 1000 }}
      fixed
      logo={getByMap(logoMap, logo)}
      {...loginProps}
      {...notificationsProps}
      {...tileMenuProps}
      {...menuProps}
    />
  )
}

export default createMetadata({
  title: 'Компоненты|/Header',
  id: 'components/Header',
  parameters: {
    docs: {
      page: mdx,
    },
  },
})
