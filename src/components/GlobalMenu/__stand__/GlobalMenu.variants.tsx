import './GlobalMenu.variants.css';

import { useNumber, useText } from '@consta/stand';
import React from 'react';

import { cn } from '##/utils/bem';

import { groups, items } from '../__mocks__/mock.data';
import { GlobalMenu } from '../GlobalMenu';

const cnGlobalMenuVariants = cn('GlobalMenuVariants');

const Variants = () => {
  const title = useText('title', 'Объекты');
  const columns = useNumber('columns', 3);
  const maxElements = useNumber('maxElements', 5);
  const showButtonText = useText('showButtonText', 'Ещё');
  const hideButtonText = useText('hideButtonText', 'Скрыть');

  return (
    <div className={cnGlobalMenuVariants()}>
      <GlobalMenu
        items={items}
        groups={groups}
        title={title}
        columns={columns}
        maxElements={maxElements}
        showButtonText={showButtonText}
        hideButtonText={hideButtonText}
      />
    </div>
  );
};

export default Variants;
