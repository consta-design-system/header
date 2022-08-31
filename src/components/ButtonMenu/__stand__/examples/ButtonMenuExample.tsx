import {
  buttonPropForm,
  buttonPropSize,
  buttonPropView,
} from '@consta/uikit/Button';
import { IconDinosaur } from '@consta/uikit/IconDinosaur';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import React from 'react';

import { ButtonMenu } from '##/components/ButtonMenu';
import { Example } from '##/stand/components/Example';

type MenuItem = {
  name: string;
  href?: string;
  onClick?: React.EventHandler<React.MouseEvent>;
};

const menu: MenuItem[] = [
  {
    name: 'Пункт меню 1',
    href: '#',
    onClick: (e) => {
      e.preventDefault();
      e.stopPropagation();
    },
  },
  { name: 'Пункт меню 2' },
];

export const ButtonMenuExample = () => (
  <Example>
    <ButtonMenu items={menu} getItemLabel={(item) => item.name} />
  </Example>
);

export const ButtonMenuExample100 = () => (
  <Example width="100px">
    <ButtonMenu items={menu} getItemLabel={(item) => item.name} />
  </Example>
);

export const ButtonMenuExample50 = () => (
  <Example width="50px">
    <ButtonMenu items={menu} getItemLabel={(item) => item.name} />
  </Example>
);

export const ButtonMenuExampleForm = () => (
  <Example>
    {buttonPropForm.map((buttonForm, index) => (
      <div key={index}>
        <Text size="s" view="ghost">
          {`Форма кнопок ${buttonForm}`}
        </Text>
        <ButtonMenu
          className={cnMixSpace({ m: 'm' })}
          items={menu}
          getItemLabel={(item) => item.name}
          form={buttonForm}
        />
      </div>
    ))}
  </Example>
);

export const ButtonMenuExampleSize = () => (
  <Example>
    {buttonPropSize.map((buttonSize, index) => (
      <div key={index}>
        <Text size="s" view="ghost">
          {`Размер кнопок ${buttonSize}`}
        </Text>
        <ButtonMenu
          className={cnMixSpace({ m: 'm' })}
          items={menu}
          getItemLabel={(item) => item.name}
          size={buttonSize}
        />
      </div>
    ))}
  </Example>
);

export const ButtonMenuExampleView = () => (
  <Example>
    {buttonPropView.map((buttonView, index) => (
      <div key={index}>
        <Text size="s" view="ghost">
          {`Вид кнопок ${buttonView}`}
        </Text>
        <ButtonMenu
          className={cnMixSpace({ m: 'm' })}
          items={menu}
          getItemLabel={(item) => item.name}
          view={buttonView}
        />
      </div>
    ))}
  </Example>
);

export const ButtonMenuExampleIcon = () => (
  <Example>
    <ButtonMenu
      items={menu}
      getItemLabel={(item) => item.name}
      getItemIcon={() => IconDinosaur}
    />
  </Example>
);

export const ButtonMenuExampleOnlyIcon = () => (
  <Example>
    <ButtonMenu
      items={menu}
      getItemLabel={(item) => item.name}
      getItemIcon={() => IconDinosaur}
      onlyIcon
    />
  </Example>
);
