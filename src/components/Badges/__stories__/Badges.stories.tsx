import React from 'react';

import { Badges } from '##/components/Badges';

import { createMetadata } from '../../__private__/storybook';
import mdx from './Badges.docs.mdx';

export function Playground() {
  return (
    <Badges
      items={[
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
      ]}
    />
  );
}

export default createMetadata({
  title: 'Компоненты/Badges',
  id: 'components/Badges',
  parameters: {
    docs: {
      page: mdx,
    },
  },
});
