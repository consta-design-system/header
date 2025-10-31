import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { cnNavbar, Navbar } from '../Navbar';
import { cnNavbarItem } from '../NavbarItem';
import { DefaultNavbarGroup, DefaultNavbarItem } from '../types';

const simpleItems: DefaultNavbarItem[] = [
  { label: 'Item 1' },
  { label: 'Item 2' },
  { label: 'Item 3' },
];

const groupedItems: DefaultNavbarItem[] = [
  { label: 'Item 1', groupId: 'group1' },
  { label: 'Item 2', groupId: 'group1' },
  { label: 'Item 3', groupId: 'group2' },
  { label: 'Item 4', groupId: 'group2' },
];

const groups: DefaultNavbarGroup[] = [
  { id: 'group1', label: 'Group 1' },
  { id: 'group2', label: 'Group 2' },
];

const itemsWithSubMenu: DefaultNavbarItem[] = [
  {
    label: 'Parent Item',
    subMenu: [{ label: 'Sub Item 1' }, { label: 'Sub Item 2' }],
  },
];

const itemsWithIcons: DefaultNavbarItem[] = [
  {
    label: 'Item with Icon',
    icon: () => <span data-testid="icon-1">Icon1</span>,
  },
  {
    label: 'Another Item',
    icon: () => <span data-testid="icon-2">Icon2</span>,
  },
];

describe('Компонент Navbar', () => {
  describe('Базовый рендеринг', () => {
    it('должен рендериться без ошибок с минимальными пропсами', () => {
      expect(() => render(<Navbar items={simpleItems} />)).not.toThrow();
    });

    it('должен отображать переданные элементы', () => {
      render(<Navbar items={simpleItems} />);

      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
      expect(screen.getByText('Item 3')).toBeInTheDocument();
    });

    it('должен применять базовый класс Navbar', () => {
      const { container } = render(<Navbar items={simpleItems} />);

      const navbarElement = container.querySelector(`.${cnNavbar()}`);
      expect(navbarElement).toBeInTheDocument();
    });

    it('должен применять кастомный className', () => {
      const { container } = render(
        <Navbar items={simpleItems} className="custom-navbar" />,
      );

      const navbarElement = container.querySelector(`.${cnNavbar()}`);
      expect(navbarElement).toHaveClass('custom-navbar');
    });
  });

  describe('Группировка элементов', () => {
    it('должен отображать группы элементы по groupId', () => {
      render(<Navbar items={groupedItems} groups={groups} />);

      expect(screen.getByText('Group 1')).toBeInTheDocument();
      expect(screen.getByText('Group 2')).toBeInTheDocument();
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 3')).toBeInTheDocument();
    });

    it('должен работать с кастомными getGroupKey и getGroupLabel', () => {
      const customGroups = [
        { customId: 'g1', customLabel: 'Custom Group 1' },
        { customId: 'g2', customLabel: 'Custom Group 2' },
      ];

      const customItems = [
        { label: 'Item 1', groupId: 'g1' },
        { label: 'Item 2', groupId: 'g2' },
      ];

      render(
        <Navbar
          items={customItems}
          groups={customGroups}
          getGroupKey={(group: any) => group.customId}
          getGroupLabel={(group: any) => group.customLabel}
        />,
      );

      expect(screen.getByText('Custom Group 1')).toBeInTheDocument();
      expect(screen.getByText('Custom Group 2')).toBeInTheDocument();
    });

    it('должен корректно работать без групп', () => {
      render(<Navbar items={simpleItems} />);

      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
      expect(screen.getByText('Item 3')).toBeInTheDocument();
    });

    it('должен применять кастомные классы для групп', () => {
      const getGroupAdditionalClassName = jest
        .fn()
        .mockReturnValue('custom-group-class');

      render(
        <Navbar
          items={groupedItems}
          groups={groups}
          getGroupAdditionalClassName={getGroupAdditionalClassName}
        />,
      );

      expect(getGroupAdditionalClassName).toHaveBeenCalledWith(groups[0]);
    });
  });

  describe('Размеры и формы', () => {
    it('должен работать с разными размерами', () => {
      const sizes = ['s', 'm'] as const;

      sizes.forEach((size) => {
        const { container, unmount } = render(
          <Navbar items={simpleItems} size={size} />,
        );

        const navbarElement = container.querySelector(`.${cnNavbar()}`);
        expect(navbarElement).toBeInTheDocument();

        const navbarItems = container.querySelectorAll(`.${cnNavbarItem()}`);
        expect(navbarItems.length).toBeGreaterThan(0);

        unmount();
      });
    });

    it('должен работать с разными формами', () => {
      const forms = ['default', 'round', 'brick'] as const;

      forms.forEach((form) => {
        const { container, unmount } = render(
          <Navbar items={simpleItems} form={form} />,
        );

        const navbarElement = container.querySelector(`.${cnNavbar()}`);
        expect(navbarElement).toBeInTheDocument();

        const navbarItems = container.querySelectorAll(`.${cnNavbarItem()}`);
        expect(navbarItems.length).toBe(3);

        unmount();
      });
    });
  });

  describe('Визуальные элементы', () => {
    it('должен отображать иконки элементов', () => {
      render(<Navbar items={itemsWithIcons} />);

      expect(screen.getByTestId('icon-1')).toBeInTheDocument();
      expect(screen.getByTestId('icon-2')).toBeInTheDocument();
    });

    it('должен отображать rightSide элементов', () => {
      const itemsWithRightSide: DefaultNavbarItem[] = [
        {
          label: 'Item with Right Side',
          rightSide: <span data-testid="right-side">RightSide</span>,
        },
      ];

      render(<Navbar items={itemsWithRightSide} />);

      expect(screen.getByTestId('right-side')).toBeInTheDocument();
    });

    it('должен отображать Badge при наличии статуса', () => {
      const itemsWithStatus: DefaultNavbarItem[] = [
        { label: 'Item with Status', status: 'error' as const },
      ];

      render(<Navbar items={itemsWithStatus} />);

      const badge = document.querySelector('.Badge');
      expect(badge).toBeInTheDocument();
    });

    it('должен отображать стрелки для элементов с subMenu', () => {
      render(<Navbar items={itemsWithSubMenu} />);

      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('Взаимодействие', () => {
    it('должен вызывать onItemClick при клике на элемент', () => {
      const onItemClick = jest.fn();
      render(<Navbar items={simpleItems} onItemClick={onItemClick} />);

      fireEvent.click(screen.getByText('Item 1'));
      expect(onItemClick).toHaveBeenCalledWith(simpleItems[0], {
        e: expect.any(Object),
      });
    });

    it('должен передавать subMenu пропсы в NavbarItem при контролируемом состоянии', () => {
      const onItemSubMenuToggle = jest.fn();
      const getItemSubMenuOpen = jest.fn().mockReturnValue(false);

      render(
        <Navbar
          items={itemsWithSubMenu}
          onItemSubMenuToggle={onItemSubMenuToggle}
          getItemSubMenuOpen={getItemSubMenuOpen}
        />,
      );

      fireEvent.click(screen.getByText('Parent Item'));

      expect(onItemSubMenuToggle).toHaveBeenCalledWith(
        itemsWithSubMenu[0],
        true,
        { e: expect.any(Object) },
      );
    });

    it('должен открывать subMenu при клике на элемент', () => {
      render(<Navbar items={itemsWithSubMenu} />);

      expect(screen.queryByText('Sub Item 1')).not.toBeInTheDocument();

      fireEvent.click(screen.getByText('Parent Item'));

      expect(screen.getByText('Sub Item 1')).toBeInTheDocument();
      expect(screen.getByText('Sub Item 2')).toBeInTheDocument();
    });

    it('должен работать с контролируемым subMenu', () => {
      const getItemSubMenuOpen = jest.fn().mockReturnValue(true);
      const onItemSubMenuToggle = jest.fn();

      render(
        <Navbar
          items={itemsWithSubMenu}
          getItemSubMenuOpen={getItemSubMenuOpen}
          onItemSubMenuToggle={onItemSubMenuToggle}
        />,
      );

      expect(screen.getByText('Sub Item 1')).toBeInTheDocument();
      expect(screen.getByText('Sub Item 2')).toBeInTheDocument();
    });
  });

  describe('Кастомизация', () => {
    it('должен применять кастомные геттеры для элементов', () => {
      const customItems = [{ id: 1, title: 'Custom Item', isActive: true }];

      const getItemLabel = jest.fn((item: any) => item.title);
      const getItemActive = jest.fn((item: any) => item.isActive);

      render(
        <Navbar
          items={customItems}
          getItemLabel={getItemLabel}
          getItemActive={getItemActive}
        />,
      );

      expect(screen.getByText('Custom Item')).toBeInTheDocument();
      expect(getItemLabel).toHaveBeenCalledWith(customItems[0]);
      expect(getItemActive).toHaveBeenCalledWith(customItems[0]);
    });

    it('должен применять кастомные атрибуты для элементов', () => {
      const getItemAttributes = jest.fn().mockReturnValue({
        'data-custom': 'value',
        'title': 'Custom Title',
      });

      render(
        <Navbar items={simpleItems} getItemAttributes={getItemAttributes} />,
      );

      expect(getItemAttributes).toHaveBeenCalledWith(simpleItems[0]);
    });

    it('должен применять кастомные классы для элементов', () => {
      const getItemAdditionalClassName = jest
        .fn()
        .mockReturnValue('custom-item-class');

      render(
        <Navbar
          items={simpleItems}
          getItemAdditionalClassName={getItemAdditionalClassName}
        />,
      );

      expect(getItemAdditionalClassName).toHaveBeenCalledWith(simpleItems[0]);
    });
  });

  describe('Сортировка групп', () => {
    it('должен работать с кастомной сортировкой групп', () => {
      const customGroups = [
        { id: 'group1', label: 'Group B' },
        { id: 'group2', label: 'Group A' },
      ];

      const customItems = [
        { label: 'Item 1', groupId: 'group1' },
        { label: 'Item 2', groupId: 'group2' },
      ];

      const sortGroup = jest.fn((a: any, b: any) =>
        a.group.label.localeCompare(b.group.label),
      );

      render(
        <Navbar
          items={customItems}
          groups={customGroups}
          sortGroup={sortGroup}
        />,
      );

      expect(sortGroup).toHaveBeenCalled();
    });
  });

  describe('Edge cases', () => {
    const emptyItems: DefaultNavbarItem[] = [];
    const emptyGroups: DefaultNavbarGroup[] = [];

    it('должен работать с пустым массивом items', () => {
      const { container } = render(<Navbar items={emptyItems} />);

      const navbarElement = container.querySelector(`.${cnNavbar()}`);
      expect(navbarElement).toBeInTheDocument();
    });

    it('должен работать с пустым массивом groups', () => {
      render(<Navbar items={simpleItems} groups={emptyGroups} />);

      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
    });

    it('должен корректно обрабатывать элементы без groupId когда есть группы', () => {
      const mixedItems: DefaultNavbarItem[] = [
        { label: 'Item with Group', groupId: 'group1' },
        { label: 'Item without Group' },
      ];

      render(<Navbar items={mixedItems} groups={groups} />);

      expect(screen.getByText('Item with Group')).toBeInTheDocument();
      expect(screen.getByText('Item without Group')).toBeInTheDocument();
    });

    it('должен работать с кастомными типами и пустыми массивами', () => {
      type CustomItem = { id: string; title: string };
      type CustomGroup = { code: string; name: string };

      const emptyCustomItems: CustomItem[] = [];
      const emptyCustomGroups: CustomGroup[] = [];

      const { container } = render(
        <Navbar<CustomItem, CustomGroup>
          items={emptyCustomItems}
          groups={emptyCustomGroups}
          getItemLabel={(item) => item.title}
          getGroupKey={(group) => group.code}
          getGroupLabel={(group) => group.name}
        />,
      );

      const navbarElement = container.querySelector(`.${cnNavbar()}`);
      expect(navbarElement).toBeInTheDocument();
    });
  });

  describe('Комплексные сценарии', () => {
    it('должен корректно работать с комбинацией всех фич', () => {
      const complexItems: DefaultNavbarItem[] = [
        {
          label: 'Active Item',
          groupId: 'group1',
          active: true,
          icon: () => <span data-testid="complex-icon">Icon</span>,
          status: 'success' as const,
          subMenu: [{ label: 'Nested Item' }],
        },
        {
          label: 'Simple Item',
          groupId: 'group2',
          rightSide: <span data-testid="complex-right">rightSide</span>,
        },
      ];

      const onItemClick = jest.fn();
      const onItemSubMenuToggle = jest.fn();

      render(
        <Navbar
          items={complexItems}
          groups={groups}
          form="round"
          size="s"
          onItemClick={onItemClick}
          onItemSubMenuToggle={onItemSubMenuToggle}
        />,
      );

      expect(screen.getByText('Group 1')).toBeInTheDocument();
      expect(screen.getByText('Group 2')).toBeInTheDocument();

      expect(screen.getByText('Active Item')).toBeInTheDocument();
      expect(screen.getByText('Simple Item')).toBeInTheDocument();

      expect(screen.getByTestId('complex-icon')).toBeInTheDocument();
      expect(screen.getByTestId('complex-right')).toBeInTheDocument();
      expect(document.querySelector('.Badge')).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();

      fireEvent.click(screen.getByText('Active Item'));
      expect(onItemClick).toHaveBeenCalledWith(complexItems[0], {
        e: expect.any(Object),
      });
      expect(onItemClick).toHaveBeenCalled();
    });
  });
});
