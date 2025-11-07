import './NavbarControlledExample.css';

import { Example } from '@consta/stand';
import { Button } from '@consta/uikit/Button';
import React from 'react';

import { Navbar } from '##/components/Navbar';
import { cn } from '##/utils/bem';

const cnNavbarControlledExample = cn('NavbarControlledExample');

type MenuItem = {
  label: string;
  subMenu?: MenuItem[];
};

const menu: MenuItem[] = [
  {
    label: 'Пункт 1',
    subMenu: [{ label: 'Подпункт 1.1' }, { label: 'Подпункт 1.2' }],
  },
  {
    label: 'Пункт 2',
    subMenu: [{ label: 'Подпункт 2.1' }, { label: 'Подпункт 2.2' }],
  },
  {
    label: 'Пункт 3',
    subMenu: [{ label: 'Подпункт 3.1' }, { label: 'Подпункт 3.2' }],
  },
];

export const NavbarControlledExample = () => {
  const [openStates, setOpenStates] = React.useState<Record<string, boolean>>({
    'Пункт 1': true,
    'Пункт 2': false,
    'Пункт 3': false,
  });

  const getItemSubMenuOpen = (item: MenuItem) =>
    openStates[item.label] || false;

  const onSubMenuToggle = (
    item: MenuItem,
    { open }: { open: boolean; e?: React.MouseEvent },
  ) => {
    setOpenStates((prev) => ({ ...prev, [item.label]: open }));
  };

  const toggleMenu = (menuLabel: string) => {
    setOpenStates((prev) => ({
      ...prev,
      [menuLabel]: !prev[menuLabel],
    }));
  };

  return (
    <Example col={1}>
      <div className={cnNavbarControlledExample()}>
        <div className={cnNavbarControlledExample('Navbar')}>
          <Navbar
            items={menu}
            getItemSubMenuOpen={getItemSubMenuOpen}
            onSubMenuToggle={onSubMenuToggle}
          />
        </div>
        <div className={cnNavbarControlledExample('Controls')}>
          {menu.map((item) => (
            <Button
              key={item.label}
              size="s"
              label={
                openStates[item.label]
                  ? `Закрыть ${item.label}`
                  : `Открыть ${item.label}`
              }
              onClick={() => toggleMenu(item.label)}
            />
          ))}
        </div>
      </div>
    </Example>
  );
};
