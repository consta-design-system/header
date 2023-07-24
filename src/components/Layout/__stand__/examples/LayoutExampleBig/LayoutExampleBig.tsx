import './LayoutExampleBig.css';

import { IconSearchStroked } from '@consta/icons/IconSearchStroked';
import { IconSelect } from '@consta/icons/IconSelect';
import { IconVKontakte } from '@consta/icons/IconVKontakte';
import { IconYandexDzen } from '@consta/icons/IconYandexDzen';
import { IconYoutube } from '@consta/icons/IconYoutube';
import { Example } from '@consta/stand';
import { Breadcrumbs } from '@consta/uikit/Breadcrumbs';
import { Button } from '@consta/uikit/Button';
import { ContextMenu } from '@consta/uikit/ContextMenu';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { useFlag } from '@consta/uikit/useFlag';
import { User } from '@consta/uikit/User';
import React, { useRef, useState } from 'react';

import { Layout } from '##/components/Layout/Layout';
import { Menu } from '##/components/Menu';
import { Notifications } from '##/components/Notifications';
import { TileMenu } from '##/components/TileMenu';
import { cn } from '##/utils/bem';

import { breadcrumbs, menu, notifications, tiles } from './helper';
import Logo from './Logo.image.svg';

type Language = 'En' | 'Ru';

const languages: Language[] = ['Ru', 'En'];

const cnLayoutExampleBig = cn('LayoutExampleBig');

const RowTopCenter = () => (
  <div className={cnLayoutExampleBig('TopButtons')}>
    <Button
      size="s"
      view="clear"
      form="round"
      onlyIcon
      iconLeft={IconVKontakte}
    />
    <Button
      size="s"
      view="clear"
      form="round"
      onlyIcon
      iconLeft={IconYoutube}
    />
    <Button
      size="s"
      view="clear"
      form="round"
      onlyIcon
      iconLeft={IconYandexDzen}
    />
  </div>
);

const RowTopRight = () => {
  const [language, setLanguage] = useState<Language>('Ru');
  const [isOpen, setIsOpen] = useFlag();

  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={cnLayoutExampleBig('TopRight')}>
      <div className={cnLayoutExampleBig('Links')}>
        <Button size="s" view="clear" form="round" label="Закупки" />
        <Button size="s" view="clear" form="round" label="Контакты" />
      </div>
      <div className={cnLayoutExampleBig('Controls')}>
        <Button
          size="s"
          view="clear"
          form="round"
          label={language}
          iconRight={IconSelect}
          ref={buttonRef}
          onClick={setIsOpen.toggle}
        />
        <ContextMenu
          isOpen={isOpen}
          onClickOutside={setIsOpen.off}
          anchorRef={buttonRef}
          items={languages}
          style={{
            zIndex: 1,
          }}
          getItemLabel={(item: Language) => item.toUpperCase()}
          onItemClick={({ item }) => setLanguage(item)}
          size="m"
        />
        <Button
          size="s"
          view="clear"
          form="round"
          onlyIcon
          iconLeft={IconSearchStroked}
        />
      </div>
    </div>
  );
};

const RowCenterRight = () => (
  <div className={cnLayoutExampleBig('CenterRight')}>
    <Notifications items={notifications} />
    <TileMenu items={tiles} />
    <User
      className={cnMixSpace({ mL: 'xs' })}
      avatarUrl="https://avatars.githubusercontent.com/u/13190808?v=4"
      name="Имя Фамилия"
      info="Доп. информация"
    />
  </div>
);

export const LayoutExampleBig = () => {
  return (
    <Example>
      <Layout
        className={cnLayoutExampleBig()}
        rowTop={{
          left: (
            <div className={cnLayoutExampleBig('Logo')}>
              <Logo />
            </div>
          ),
          center: <RowTopCenter />,
          right: <RowTopRight />,
        }}
        rowCenter={{
          left: <Menu className={cnLayoutExampleBig('Menu')} items={menu} />,
          center: undefined,
          right: <RowCenterRight />,
        }}
        rowBottom={{
          left: (
            <Breadcrumbs
              onlyIconRoot
              className={cnLayoutExampleBig('Crumbs')}
              items={breadcrumbs}
            />
          ),
          center: undefined,
          right: undefined,
        }}
      />
    </Example>
  );
};
