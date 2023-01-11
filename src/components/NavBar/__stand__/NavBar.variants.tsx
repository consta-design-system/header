import { useBoolean } from '@consta/stand';
import React, { useState } from 'react';

import { items } from '../__mocks__/mock.data';
import { NavBar } from '../NavBar';
import { NavBarDefaultItem } from '../types';

const Variants = () => {
  const [active, setActive] = useState<NavBarDefaultItem | undefined>();

  const withLeftIcon = useBoolean('withLeftIcon', false);
  const withRightIcon = useBoolean('withRightIcon', false);

  const getLeftIcon = (item: NavBarDefaultItem) =>
    withLeftIcon ? item.iconLeft : undefined;
  const getRightIcon = (item: NavBarDefaultItem) =>
    withRightIcon ? item.iconRight : undefined;

  return (
    <NavBar
      items={items}
      getItemActive={(item) => item.label === active?.label}
      getItemIconLeft={getLeftIcon}
      getItemIconRight={getRightIcon}
      onItemClick={({ item }) => setActive(item)}
    />
  );
};

export default Variants;
