import { Button } from '@consta/uikit/Button';
import { Theme } from '@consta/uikit/Theme';
import React, { useState } from 'react';

import { Header } from '##/components/Header';
import { Example } from '##/stand/components/Example';

import {
  breadcrumbs,
  menu,
  notifications,
  notificationsActions,
  ThemeItem,
  themes,
  tileMenu,
} from '../../__mocks__/data.mock';
import { ConstaLogo } from '../ConstaLogo';

export const HeaderExampleBasic = () => (
  <Example>
    <Header
      logo={<ConstaLogo />}
      userName="Иванов Иван"
      userInfo="Владелец"
      loginButtonLabel="Войти"
      userLogined
      notifications={notifications}
      notificationsActions={notificationsActions}
      notificationsTitle="Уведомления"
      notificationsGroupByDay
      tileMenu={tileMenu}
      tileMenuTitle="Сервисы"
      menu={menu}
      style={{ zIndex: 100 }}
    />
  </Example>
);

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
      notificationsGroupByDay
      tileMenu={tileMenu}
      tileMenuTitle="Сервисы"
      menu={menu}
      style={{ zIndex: 100 }}
    />
  </Example>
);

export const HeaderExampleThemeToggler = () => {
  const [theme, setTheme] = useState<ThemeItem>(themes[0]);
  return (
    <Theme preset={theme.preset}>
      <Header
        logo={<ConstaLogo />}
        userName="Иванов Иван"
        userInfo="Владелец"
        loginButtonLabel="Войти"
        userLogined
        notifications={notifications}
        notificationsActions={notificationsActions}
        notificationsTitle="Уведомления"
        notificationsGroupByDay
        tileMenu={tileMenu}
        tileMenuTitle="Сервисы"
        style={{ zIndex: 100 }}
        themeItems={themes}
        theme={theme}
        onThemeChange={({ value }: { value: ThemeItem | null }) =>
          value && setTheme(value)
        }
      />
    </Theme>
  );
};

export const HeaderExampleFixed = () => {
  const [showHeader, setShowHeader] = React.useState(false);
  const clickShow = () => setShowHeader(true);
  const clickHide = () => setShowHeader(false);

  const NoHeader = () => {
    return (
      <Button label="Показать зафиксированную шапку" onClick={clickShow} />
    );
  };

  const FixedHeader = () => {
    return (
      <>
        <Button label="Убрать шапку" onClick={clickHide} />
        <Header
          logo={<ConstaLogo />}
          userName="Иванов Иван"
          userInfo="Владелец"
          loginButtonLabel="Войти"
          userLogined
          notifications={notifications}
          notificationsActions={notificationsActions}
          notificationsTitle="Уведомления"
          notificationsGroupByDay
          tileMenu={tileMenu}
          tileMenuTitle="Сервисы"
          menu={menu}
          style={{ zIndex: 100 }}
          fixed
        />
      </>
    );
  };

  return <Example>{showHeader ? <FixedHeader /> : <NoHeader />}</Example>;
};

export const HeaderExampleBreadcrumbs = () => (
  <Example>
    <Header
      logo={<ConstaLogo />}
      userName="Иванов Иван"
      userInfo="Владелец"
      loginButtonLabel="Войти"
      userLogined
      notifications={notifications}
      notificationsActions={notificationsActions}
      notificationsTitle="Уведомления"
      notificationsGroupByDay
      tileMenu={tileMenu}
      tileMenuTitle="Сервисы"
      menu={menu}
      style={{ zIndex: 100 }}
      breadcrumbs={breadcrumbs}
    />
  </Example>
);
