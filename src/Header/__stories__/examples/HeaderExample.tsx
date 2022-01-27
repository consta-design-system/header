import React from 'react'

import { Example } from '@/__private__/storybook'

import { ConstaLogo } from '../ConstaLogo'
import { menu, notifications, notificationsActions, tileMenu } from '../../__mocks__/data.mock'

import { Header } from '@/Header'

export const HeaderExampleBasic = () => (
  <Example>
    <Header
      logo={<ConstaLogo />}
      userName="Иванов Иван"
      userInfo="Владелец"
      loginButtonLabel="Войти"
      userLogined={true}
      notifications={notifications}
      notificationsActions={notificationsActions}
      notificationsTitle="Уведомления"
      notificationsGroupByDay={true}
      tileMenu={tileMenu}
      tileMenuTitle="Сервисы"
      menu={menu}
      style={{ zIndex: 100 }}
    />
  </Example>
)

export const HeaderExampleNotLogined = () => (
  <Example>
    <Header
      logo={<ConstaLogo />}
      userName="Иванов Иван"
      userInfo="Владелец"
      loginButtonLabel="Войти"
      userLogined={false}
      notifications={notifications}
      notificationsActions={notificationsActions}
      notificationsTitle="Уведомления"
      notificationsGroupByDay={true}
      tileMenu={tileMenu}
      tileMenuTitle="Сервисы"
      menu={menu}
      style={{ zIndex: 100 }}
    />
  </Example>
)
