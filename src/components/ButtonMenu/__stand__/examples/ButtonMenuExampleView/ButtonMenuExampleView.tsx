import { Example } from '@consta/stand';
import { buttonPropView } from '@consta/uikit/Button';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import React from 'react';

import { ButtonMenu } from '##/components/ButtonMenu';
import { menu } from '##/components/ButtonMenu/__mocks__/mock.data';

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
