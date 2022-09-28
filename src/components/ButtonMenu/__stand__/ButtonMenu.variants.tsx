import { useBoolean, useSelect } from '@consta/stand';
import {
  buttonPropForm,
  buttonPropFormDefault,
  buttonPropSize,
  buttonPropSizeDefault,
  buttonPropView,
  buttonPropViewDefault,
} from '@consta/uikit/Button';
import { IconDinosaur } from '@consta/uikit/IconDinosaur';
import React from 'react';

import { ButtonMenu } from '../ButtonMenu';

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

export const Variants = () => {
  const form = useSelect('form', buttonPropForm, buttonPropFormDefault);
  const size = useSelect('size', buttonPropSize, buttonPropSizeDefault);
  const view = useSelect('view', buttonPropView, buttonPropViewDefault);
  const withIcon = useBoolean('withIcon', false);
  const onlyIcon = useBoolean('onlyIcon', false, Boolean(withIcon));

  return (
    <div style={{ height: '100vh' }}>
      <ButtonMenu
        items={menu}
        form={form}
        size={size}
        view={view}
        onlyIcon={onlyIcon}
        getItemLabel={(item) => item.name}
        {...(withIcon && {
          getItemIcon: () => IconDinosaur,
        })}
      />
    </div>
  );
};

export default Variants;
