import { useSelect } from '@consta/stand';
import {
  badgePropForm,
  badgePropSize,
  badgePropView,
} from '@consta/uikit/Badge';
import React from 'react';

import { Badges } from '../Badges';

const items = [
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
];

export const Variants = () => {
  const size = useSelect('size', badgePropSize, 'm');
  const form = useSelect('form', badgePropForm, 'default');
  const view = useSelect('view', badgePropView, 'filled');

  return (
    <Badges
      style={{ width: 600 }}
      items={items}
      size={size}
      form={form}
      view={view}
    />
  );
};

export default Variants;
