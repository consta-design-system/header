import { useText } from '@consta/stand';
import React from 'react';

import { SelectMenu } from '../SelectMenu';

const menu = ['Все ресурсы портала знаний', 'Закупки', 'Контакты'];

const getLabel = (item: string) => item;

export const Variants = () => {
  const label = useText('label', 'Выберите') || '';

  return (
    <div style={{ height: '100vh' }}>
      <SelectMenu items={menu} getItemLabel={getLabel} label={label} />
    </div>
  );
};

export default Variants;
