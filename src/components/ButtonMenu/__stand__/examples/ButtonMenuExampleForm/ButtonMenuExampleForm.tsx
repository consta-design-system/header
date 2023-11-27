import { Example } from '@consta/stand';
import { buttonPropForm } from '@consta/uikit/Button';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import React from 'react';

import { ButtonMenu } from '##/components/ButtonMenu';
import { menu } from '##/components/ButtonMenu/__mocks__/mock.data';

export const ButtonMenuExampleForm = () => (
  <Example>
    {buttonPropForm.map((buttonForm, index) => (
      <div key={index}>
        <Text size="s" view="ghost" lineHeight="m">
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
