import {
  buttonPropForm,
  buttonPropFormDefault,
  buttonPropSize,
  buttonPropSizeDefault,
  buttonPropView,
  buttonPropViewDefault,
} from '@consta/uikit/Button';
import { IconDinosaur } from '@consta/uikit/IconDinosaur';
import { boolean, select } from '@storybook/addon-knobs';
import React from 'react';

import { createMetadata } from '../../__private__/storybook';
import { ButtonMenu } from '../ButtonMenu';
import mdx from './ButtonMenu.docs.mdx';

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

const defaultKnobs = () => ({
  form: select('form', buttonPropForm, buttonPropFormDefault),
  size: select('size', buttonPropSize, buttonPropSizeDefault),
  view: select('view', buttonPropView, buttonPropViewDefault),
  withIcon: boolean('withIcon', false),
  onlyIcon: boolean('onlyIcon', false),
});

export function Playground() {
  const { form, size, view, onlyIcon, withIcon } = defaultKnobs();

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
}

export default createMetadata({
  title: 'Компоненты/ButtonMenu',
  id: 'components/ButtonMenu',
  parameters: {
    docs: {
      page: mdx,
    },
  },
});
