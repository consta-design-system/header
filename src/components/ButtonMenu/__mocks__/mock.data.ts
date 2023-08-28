type MenuItem = {
  name: string;
  href?: string;
  onClick?: React.EventHandler<React.MouseEvent>;
};

export const menu: MenuItem[] = [
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
