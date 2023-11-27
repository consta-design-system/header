import { Example } from '@consta/stand';
import { buttonPropSize } from '@consta/uikit/Button';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import React from 'react';

import { ButtonMenu } from '##/components/ButtonMenu';
import { menu } from '##/components/ButtonMenu/__mocks__/mock.data';

export const ButtonMenuExampleSize = () => (
  <Example>
    {buttonPropSize.map((buttonSize, index) => (
      <div key={index}>
        <Text size="s" view="ghost" lineHeight="m">
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
