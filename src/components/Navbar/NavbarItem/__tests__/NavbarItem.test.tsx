import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';

import { withDefaultGetters } from '../../helpers';
import { DefaultNavbarItem } from '../../types';
import {
  cnNavbarItem,
  mapLevelSpace,
  NavbarItem,
  spaceMap,
} from '../NavbarItem';

export const createNavbarItemProps = (customProps: any = {}) => {
  const baseGetters = withDefaultGetters({
    items: [],
    ...customProps,
  });

  return {
    size: 'm' as const,
    form: 'default' as const,
    level: 0,
    onItemClick: jest.fn(),
    getItemLabel: baseGetters.getItemLabel,
    getItemActive: baseGetters.getItemActive,
    getItemIcon: baseGetters.getItemIcon,
    getItemRightSide: baseGetters.getItemRightSide,
    getItemStatus: baseGetters.getItemStatus,
    getItemAs: baseGetters.getItemAs,
    getItemAttributes: baseGetters.getItemAttributes,
    getItemRef: baseGetters.getItemRef,
    getItemSubMenu: baseGetters.getItemSubMenu,
    getItemAdditionalClassName: baseGetters.getItemAdditionalClassName,
    ...customProps,
  };
};

const defaultItem: DefaultNavbarItem = {
  label: 'Test Item',
};

const itemWithSubMenu: DefaultNavbarItem = {
  label: 'Parent Item',
  active: false,
  subMenu: [
    { label: 'Sub Item 1', active: false },
    { label: 'Sub Item 2', active: true },
  ],
};

const renderComponent = (props: any = {}) => {
  const itemProps = createNavbarItemProps(props);
  return render(<NavbarItem {...itemProps} />);
};

const getNavbarItemElement = (text: string) => {
  const textElement = screen.getByText(text);
  return textElement.closest(`.${cnNavbarItem()}`) as HTMLElement;
};

describe('Компонент NavbarItem', () => {
  describe('Базовый рендеринг', () => {
    it('должен рендериться без ошибок', () => {
      expect(() => renderComponent({ item: defaultItem })).not.toThrow();
    });

    it('должен отображать label элемента', () => {
      renderComponent({ item: defaultItem });
      expect(screen.getByText('Test Item')).toBeInTheDocument();
    });

    it('должен корректно рендериться со всеми комбинациями размеров и форм', () => {
      const sizes = Object.keys(spaceMap) as (keyof typeof spaceMap)[];
      const forms = ['default', 'round', 'brick'] as const;

      sizes.forEach((size) => {
        forms.forEach((form) => {
          expect(() =>
            renderComponent({ item: defaultItem, size, form }),
          ).not.toThrow();
        });
      });
    });
  });

  describe('Визуальные элементы', () => {
    it('должен отображать иконку если она есть', () => {
      const itemWithIcon: DefaultNavbarItem = {
        label: 'Item with Icon',
        active: true,
        icon: () => <span data-testid="test-icon">Icon</span>,
      };

      renderComponent({ item: itemWithIcon });
      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });

    it('должен отображать rightSide если он есть', () => {
      const itemWithRightSide: DefaultNavbarItem = {
        label: 'Item with Right Side',
        rightSide: <span data-testid="test-right-side">RightSideText</span>,
      };
      renderComponent({ item: itemWithRightSide });
      expect(screen.getByTestId('test-right-side')).toBeInTheDocument();
    });

    it('должен отображать все элементы из массива rightSide', () => {
      const itemWithMultipleRightSide: DefaultNavbarItem = {
        label: 'Item with Multiple Right Side',
        rightSide: [
          <span key="1" data-testid="right-1">
            Right1
          </span>,
          <span key="2" data-testid="right-2">
            Right2
          </span>,
          <span key="3" data-testid="right-3">
            Right3
          </span>,
        ],
      };
      renderComponent({ item: itemWithMultipleRightSide });

      expect(screen.getByTestId('right-1')).toBeInTheDocument();
      expect(screen.getByTestId('right-2')).toBeInTheDocument();
      expect(screen.getByTestId('right-3')).toBeInTheDocument();
    });

    it('должен отображать Badge при наличии статуса', () => {
      const itemWithStatus: DefaultNavbarItem = {
        label: 'Item with Status',
        status: 'error' as const,
      };

      renderComponent({ item: itemWithStatus });
      const badge = document.querySelector('.Badge');
      expect(badge).toBeInTheDocument();
    });

    it('не должен отображать Badge если статуса нет', () => {
      renderComponent({ item: defaultItem });
      const badge = document.querySelector('.Badge');
      expect(badge).not.toBeInTheDocument();
    });

    it('должен комбинировать rightSide с Badge и subMeny', () => {
      const itemWithEverything: DefaultNavbarItem = {
        label: 'Item with Everything',
        rightSide: [
          <span key="1" data-testid="right-1">
            Right1
          </span>,
          <span key="2" data-testid="right-2">
            Right2
          </span>,
          <span key="3" data-testid="right-3">
            Right3
          </span>,
        ],
        status: 'success' as const,
        subMenu: [{ label: 'Sub Item 1' }, { label: 'Sub Item 2' }],
      };

      renderComponent({ item: itemWithEverything });

      expect(screen.getByTestId('right-1')).toBeInTheDocument();
      expect(screen.getByTestId('right-2')).toBeInTheDocument();
      expect(screen.getByTestId('right-3')).toBeInTheDocument();
      expect(document.querySelector('.Badge')).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('должен корректно обрабатывать пустой массив rightSide', () => {
      const itemWithEmptyRightSide: DefaultNavbarItem = {
        label: 'Item with Empty Right Side',
        rightSide: [],
        status: 'error' as const,
        subMenu: [{ label: 'Sub Item' }],
      };

      renderComponent({ item: itemWithEmptyRightSide });

      expect(document.querySelector('.Badge')).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();

      expect(
        screen.getByText('Item with Empty Right Side'),
      ).toBeInTheDocument();
    });
  });

  describe('БЭМ классы и стили', () => {
    it('должен применять базовый класс NavbarItem', () => {
      renderComponent({ item: defaultItem });
      const element = getNavbarItemElement('Test Item');
      expect(element).toHaveClass(cnNavbarItem());
    });

    it('должен применять модификатор active', () => {
      const activeItem = { ...defaultItem, active: true };
      renderComponent({ item: activeItem });
      const element = getNavbarItemElement('Test Item');
      expect(element).toHaveClass(cnNavbarItem({ active: true }));
    });

    it('должен применять модификаторы формы', () => {
      const forms = ['default', 'round', 'brick'] as const;

      forms.forEach((form) => {
        const { unmount } = renderComponent({ item: defaultItem, form });
        const element = getNavbarItemElement('Test Item');
        expect(element).toHaveClass(cnNavbarItem({ form }));
        unmount();
      });
    });

    it('должен применять правильные CSS переменные для разных размеров', () => {
      const sizes = Object.keys(spaceMap) as (keyof typeof spaceMap)[];

      sizes.forEach((size) => {
        const { unmount } = renderComponent({ item: defaultItem, size });
        const element = getNavbarItemElement('Test Item');
        expect(element).toHaveStyle({
          '--navbar-item-ph': `var(--space-${spaceMap[size].pH})`,
          '--navbar-item-level-space': `var(--space-${mapLevelSpace[size]})`,
        });
        unmount();
      });
    });

    it('должен применять правильные уровни вложенности', () => {
      const levels = [0, 1, 2, 3];

      levels.forEach((level) => {
        const { unmount } = renderComponent({ item: defaultItem, level });
        const element = getNavbarItemElement('Test Item');
        expect(element).toHaveStyle({
          '--navbar-item-level': level.toString(),
        });
        unmount();
      });
    });

    it('должен корректно передавать размер для иконки соответствующий размеру Navbar', () => {
      const itemWithIcon: DefaultNavbarItem = {
        label: 'Item with Icon',
        icon: () => <span data-testid="test-icon">Icon</span>,
      };

      const sizes = ['s', 'm'] as const;

      sizes.forEach((size) => {
        const { unmount } = renderComponent({
          item: itemWithIcon,
          size,
        });

        expect(screen.getByTestId('test-icon')).toBeInTheDocument();
        expect(screen.getByText('Item with Icon')).toBeInTheDocument();

        const element = getNavbarItemElement('Item with Icon');
        expect(element).toHaveStyle({
          '--navbar-item-ph': `var(--space-${spaceMap[size].pH})`,
          '--navbar-item-level-space': `var(--space-${mapLevelSpace[size]})`,
        });

        unmount();
      });
    });
  });

  describe('Взаимодействие', () => {
    describe('SubMenu функциональность неконтролируемое состояние', () => {
      it('должен вызывать onItemClick при клике', () => {
        const onItemClick = jest.fn();
        renderComponent({ item: defaultItem, onItemClick });

        fireEvent.click(screen.getByText('Test Item'));
        expect(onItemClick).toHaveBeenCalledWith(defaultItem, {
          e: expect.any(Object),
        });
      });

      it('должен отображать стрелку если есть subMenu', () => {
        renderComponent({ item: itemWithSubMenu });
        expect(screen.getByRole('button')).toBeInTheDocument();
      });

      it('не должен отображать стрелку если нет subMenu', () => {
        renderComponent({ item: defaultItem });
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
      });

      it('должен открывать subMenu при клике на стрелку', () => {
        renderComponent({ item: itemWithSubMenu });

        fireEvent.click(screen.getByRole('button'));

        expect(screen.getByText('Sub Item 1')).toBeInTheDocument();
        expect(screen.getByText('Sub Item 2')).toBeInTheDocument();
      });

      it('должен открывать subMenu при клике на сам элемент если есть subMenu', () => {
        renderComponent({ item: itemWithSubMenu });

        fireEvent.click(screen.getByText('Parent Item'));

        expect(screen.getByText('Sub Item 1')).toBeInTheDocument();
      });

      it('должен закрывать subMenu при повторном клике на элемент', () => {
        renderComponent({ item: itemWithSubMenu });

        fireEvent.click(screen.getByText('Parent Item'));
        expect(screen.getByText('Sub Item 1')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Parent Item'));
        expect(screen.queryByText('Sub Item 1')).not.toBeInTheDocument();
      });

      it('должен закрывать subMenu при повторном клике на стрелку', () => {
        renderComponent({ item: itemWithSubMenu });

        fireEvent.click(screen.getByRole('button'));
        expect(screen.getByText('Sub Item 1')).toBeInTheDocument();

        fireEvent.click(screen.getByRole('button'));
        expect(screen.queryByText('Sub Item 1')).not.toBeInTheDocument();
      });
    });

    describe('SubMenu функциональность контролируемое состояние', () => {
      it('должен вызывать onItemClick даже в контролируемом режиме', () => {
        const onItemClick = jest.fn();
        const getItemSubMenuOpen = jest.fn().mockReturnValue(false);
        const onItemSubMenuToggle = jest.fn();

        renderComponent({
          item: itemWithSubMenu,
          onItemClick,
          getItemSubMenuOpen,
          onItemSubMenuToggle,
        });

        fireEvent.click(screen.getByText('Parent Item'));

        expect(onItemClick).toHaveBeenCalledWith(itemWithSubMenu, {
          e: expect.any(Object),
        });
        expect(onItemSubMenuToggle).toHaveBeenCalledWith(
          itemWithSubMenu,
          true,
          { e: expect.any(Object) },
        );
      });

      it('должен отображать стрелку если есть subMenu в контролируемом режиме', () => {
        const getItemSubMenuOpen = jest.fn().mockReturnValue(false);
        const onItemSubMenuToggle = jest.fn();

        renderComponent({
          item: itemWithSubMenu,
          getItemSubMenuOpen,
          onItemSubMenuToggle,
        });

        expect(screen.getByRole('button')).toBeInTheDocument();
      });

      it('должен использовать переданное значение открытия извне', () => {
        const getItemSubMenuOpen = jest.fn().mockReturnValue(true);
        const onItemSubMenuToggle = jest.fn();

        renderComponent({
          item: itemWithSubMenu,
          getItemSubMenuOpen,
          onItemSubMenuToggle,
        });

        expect(screen.getByText('Sub Item 1')).toBeInTheDocument();
        expect(screen.getByText('Sub Item 2')).toBeInTheDocument();
      });

      it('должен использовать переданное значение закрытия извне', () => {
        const getItemSubMenuOpen = jest.fn().mockReturnValue(false);
        const onItemSubMenuToggle = jest.fn();

        renderComponent({
          item: itemWithSubMenu,
          getItemSubMenuOpen,
          onItemSubMenuToggle,
        });

        expect(screen.queryByText('Sub Item 1')).not.toBeInTheDocument();
        expect(screen.queryByText('Sub Item 2')).not.toBeInTheDocument();
      });

      it('должен вызывать onItemSubMenuToggle при клике, но не менять состояние самостоятельно', () => {
        const getItemSubMenuOpen = jest.fn().mockReturnValue(false);
        const onItemSubMenuToggle = jest.fn();

        const { rerender } = renderComponent({
          item: itemWithSubMenu,
          getItemSubMenuOpen,
          onItemSubMenuToggle,
        });

        expect(screen.queryByText('Sub Item 1')).not.toBeInTheDocument();

        fireEvent.click(screen.getByText('Parent Item'));
        expect(onItemSubMenuToggle).toHaveBeenCalledWith(
          itemWithSubMenu,
          true,
          { e: expect.any(Object) },
        );

        expect(screen.queryByText('Sub Item 1')).not.toBeInTheDocument();

        getItemSubMenuOpen.mockReturnValue(true);
        rerender(
          <NavbarItem
            {...createNavbarItemProps({
              item: itemWithSubMenu,
              getItemSubMenuOpen,
              onItemSubMenuToggle,
            })}
          />,
        );

        expect(screen.getByText('Sub Item 1')).toBeInTheDocument();
      });

      it('должен работать полный цикл открытия/закрытия через контролируемое состояние', () => {
        let isOpen = false;
        const getItemSubMenuOpen = jest.fn(() => isOpen);
        const onItemSubMenuToggle = jest.fn((item, newOpen) => {
          isOpen = newOpen;
        });

        const { rerender } = renderComponent({
          item: itemWithSubMenu,
          getItemSubMenuOpen,
          onItemSubMenuToggle,
        });

        expect(screen.queryByText('Sub Item 1')).not.toBeInTheDocument();

        fireEvent.click(screen.getByText('Parent Item'));
        expect(onItemSubMenuToggle).toHaveBeenCalledWith(
          itemWithSubMenu,
          true,
          { e: expect.any(Object) },
        );

        rerender(
          <NavbarItem
            {...createNavbarItemProps({
              item: itemWithSubMenu,
              getItemSubMenuOpen,
              onItemSubMenuToggle,
            })}
          />,
        );

        expect(screen.getByText('Sub Item 1')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Parent Item'));
        expect(onItemSubMenuToggle).toHaveBeenCalledWith(
          itemWithSubMenu,
          false,
          { e: expect.any(Object) },
        );

        rerender(
          <NavbarItem
            {...createNavbarItemProps({
              item: itemWithSubMenu,
              getItemSubMenuOpen,
              onItemSubMenuToggle,
            })}
          />,
        );

        expect(screen.queryByText('Sub Item 1')).not.toBeInTheDocument();
      });

      it('должен работать полный цикл открытия/закрытия через стрелку в контролируемом состоянии', () => {
        let isOpen = false;
        const getItemSubMenuOpen = jest.fn(() => isOpen);
        const onItemSubMenuToggle = jest.fn((item, newOpen) => {
          isOpen = newOpen;
        });

        const { rerender } = renderComponent({
          item: itemWithSubMenu,
          getItemSubMenuOpen,
          onItemSubMenuToggle,
        });

        expect(screen.queryByText('Sub Item 1')).not.toBeInTheDocument();

        fireEvent.click(screen.getByRole('button'));
        expect(onItemSubMenuToggle).toHaveBeenCalledWith(
          itemWithSubMenu,
          true,
          { e: expect.any(Object) },
        );

        rerender(
          <NavbarItem
            {...createNavbarItemProps({
              item: itemWithSubMenu,
              getItemSubMenuOpen,
              onItemSubMenuToggle,
            })}
          />,
        );

        expect(screen.getByText('Sub Item 1')).toBeInTheDocument();

        fireEvent.click(screen.getByRole('button'));
        expect(onItemSubMenuToggle).toHaveBeenCalledWith(
          itemWithSubMenu,
          false,
          { e: expect.any(Object) },
        );

        rerender(
          <NavbarItem
            {...createNavbarItemProps({
              item: itemWithSubMenu,
              getItemSubMenuOpen,
              onItemSubMenuToggle,
            })}
          />,
        );

        expect(screen.queryByText('Sub Item 1')).not.toBeInTheDocument();
      });

      it('должен использовать локальное состояние когда не переданы контролируемые пропсы', () => {
        renderComponent({
          item: itemWithSubMenu,
        });

        expect(screen.queryByText('Sub Item 1')).not.toBeInTheDocument();

        fireEvent.click(screen.getByText('Parent Item'));

        expect(screen.getByText('Sub Item 1')).toBeInTheDocument();
      });

      it('должен вызывать и onItemClick и onItemSubMenuToggle при клике на элемент с subMenu', () => {
        const onItemClick = jest.fn();
        const getItemSubMenuOpen = jest.fn().mockReturnValue(false);
        const onItemSubMenuToggle = jest.fn();

        renderComponent({
          item: itemWithSubMenu,
          onItemClick,
          getItemSubMenuOpen,
          onItemSubMenuToggle,
        });

        fireEvent.click(screen.getByText('Parent Item'));

        expect(onItemClick).toHaveBeenCalledWith(itemWithSubMenu, {
          e: expect.any(Object),
        });
        expect(onItemSubMenuToggle).toHaveBeenCalledWith(
          itemWithSubMenu,
          true,
          { e: expect.any(Object) },
        );
      });

      it('должен вызывать только onItemClick при клике на элемент без subMenu в контролируемом режиме', () => {
        const onItemClick = jest.fn();
        const getItemSubMenuOpen = jest.fn().mockReturnValue(false);
        const onItemSubMenuToggle = jest.fn();

        renderComponent({
          item: defaultItem,
          onItemClick,
          getItemSubMenuOpen,
          onItemSubMenuToggle,
        });

        fireEvent.click(screen.getByText('Test Item'));

        expect(onItemClick).toHaveBeenCalledWith(defaultItem, {
          e: expect.any(Object),
        });
        expect(onItemSubMenuToggle).not.toHaveBeenCalled();
      });
    });

    describe('Cascade subMenuu с контролируемым состоянием', () => {
      const deepNestedItems: DefaultNavbarItem = {
        label: 'Level 1',
        subMenu: [
          {
            label: 'Level 2',
            subMenu: [
              {
                label: 'Level 3',
                subMenu: [{ label: 'Level 4' }],
              },
            ],
          },
        ],
      };

      it('не должен отображать вложенные уровни даже с открытым состоянием если родитель закрыт', () => {
        const openStates: Record<string, boolean> = {
          'Level 1': false,
          'Level 2': true,
          'Level 3': true,
        };

        const getItemSubMenuOpen = jest.fn((item) => openStates[item.label]);
        const onItemSubMenuToggle = jest.fn();

        renderComponent({
          item: deepNestedItems,
          getItemSubMenuOpen,
          onItemSubMenuToggle,
        });

        expect(screen.getByText('Level 1')).toBeInTheDocument();
        expect(screen.queryByText('Level 2')).not.toBeInTheDocument();
        expect(screen.queryByText('Level 3')).not.toBeInTheDocument();
        expect(screen.queryByText('Level 4')).not.toBeInTheDocument();
      });

      it('должен отображать все уровни когда все родители открыты в контролируемом режиме', () => {
        const openStates: Record<string, boolean> = {
          'Level 1': true,
          'Level 2': true,
          'Level 3': true,
        };

        const getItemSubMenuOpen = jest.fn((item) => openStates[item.label]);
        const onItemSubMenuToggle = jest.fn();

        renderComponent({
          item: deepNestedItems,
          getItemSubMenuOpen,
          onItemSubMenuToggle,
        });

        expect(screen.getByText('Level 1')).toBeInTheDocument();
        expect(screen.getByText('Level 2')).toBeInTheDocument();
        expect(screen.getByText('Level 3')).toBeInTheDocument();
        expect(screen.getByText('Level 4')).toBeInTheDocument();
      });

      it('должен скрывать все вложенные уровни при закрытии родителя в контролируемом режиме', () => {
        const openStates: Record<string, boolean> = {
          'Level 1': true,
          'Level 2': true,
          'Level 3': true,
        };

        const getItemSubMenuOpen = jest.fn((item) => openStates[item.label]);
        const onItemSubMenuToggle = jest.fn((item, newOpen) => {
          openStates[item.label] = newOpen;
        });

        const { rerender } = renderComponent({
          item: deepNestedItems,
          getItemSubMenuOpen,
          onItemSubMenuToggle,
        });

        expect(screen.getByText('Level 2')).toBeInTheDocument();
        expect(screen.getByText('Level 3')).toBeInTheDocument();
        expect(screen.getByText('Level 4')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Level 1'));
        expect(onItemSubMenuToggle).toHaveBeenCalledWith(
          deepNestedItems,
          false,
          { e: expect.any(Object) },
        );

        expect(openStates['Level 1']).toBe(false);
        rerender(
          <NavbarItem
            {...createNavbarItemProps({
              item: deepNestedItems,
              getItemSubMenuOpen,
              onItemSubMenuToggle,
            })}
          />,
        );

        expect(screen.queryByText('Level 2')).not.toBeInTheDocument();
        expect(screen.queryByText('Level 3')).not.toBeInTheDocument();
        expect(screen.queryByText('Level 4')).not.toBeInTheDocument();

        expect(openStates['Level 2']).toBe(true);
        expect(openStates['Level 3']).toBe(true);
      });

      it('должен показывать вложенные уровни только когда все родительские цепочки открыты', () => {
        const openStates: Record<string, boolean> = {
          'Level 1': true,
          'Level 2': false,
          'Level 3': true,
        };

        const getItemSubMenuOpen = jest.fn((item) => openStates[item.label]);
        const onItemSubMenuToggle = jest.fn();

        renderComponent({
          item: deepNestedItems,
          getItemSubMenuOpen,
          onItemSubMenuToggle,
        });

        expect(screen.getByText('Level 1')).toBeInTheDocument();
        expect(screen.getByText('Level 2')).toBeInTheDocument();

        expect(screen.queryByText('Level 3')).not.toBeInTheDocument();
        expect(screen.queryByText('Level 4')).not.toBeInTheDocument();
      });

      it('должен работать с частично открытой цепочкой в контролируемом режиме', () => {
        const openStates: Record<string, boolean> = {
          'Level 1': true,
          'Level 2': true,
          'Level 3': false,
        };

        const getItemSubMenuOpen = jest.fn((item) => openStates[item.label]);
        const onItemSubMenuToggle = jest.fn();

        renderComponent({
          item: deepNestedItems,
          getItemSubMenuOpen,
          onItemSubMenuToggle,
        });

        expect(screen.getByText('Level 1')).toBeInTheDocument();
        expect(screen.getByText('Level 2')).toBeInTheDocument();
        expect(screen.getByText('Level 3')).toBeInTheDocument();

        expect(screen.queryByText('Level 4')).not.toBeInTheDocument();
      });
    });
  });

  describe('Кастомизация', () => {
    it('должен применять кастомный класс из getItemAdditionalClassName', () => {
      const getItemAdditionalClassName = jest
        .fn()
        .mockReturnValue('custom-class');
      const itemWithCustomClassName: DefaultNavbarItem = {
        label: 'Item with Custom Class',
      };

      renderComponent({
        item: itemWithCustomClassName,
        getItemAdditionalClassName,
      });

      const element = getNavbarItemElement('Item with Custom Class');
      expect(element).toHaveClass('custom-class');
      expect(getItemAdditionalClassName).toHaveBeenCalledWith(
        itemWithCustomClassName,
      );
    });

    it('должен комбинировать кастомный класс с БЭМ классами', () => {
      const getItemAdditionalClassName = jest
        .fn()
        .mockReturnValue('custom-class');
      renderComponent({
        item: defaultItem,
        getItemAdditionalClassName,
        form: 'round',
      });

      const element = getNavbarItemElement('Test Item');
      expect(element).toHaveClass(cnNavbarItem({ form: 'round' }));
      expect(element).toHaveClass('custom-class');
    });

    it('должен применять кастомные атрибуты из getItemAttributes', () => {
      const getItemAttributes = jest.fn().mockReturnValue({
        'data-test': 'custom-attr',
        'title': 'Custom Title',
      });

      renderComponent({
        item: defaultItem,
        getItemAttributes,
      });

      const element = getNavbarItemElement('Test Item');
      expect(element).toHaveAttribute('data-test', 'custom-attr');
      expect(element).toHaveAttribute('title', 'Custom Title');
    });
  });

  describe('Комбинации состояний', () => {
    it('должен корректно работать с активным элементом в форме round', () => {
      const activeItem = { ...defaultItem, active: true };
      renderComponent({ item: activeItem, form: 'round' });

      const element = getNavbarItemElement('Test Item');
      expect(element).toHaveClass(
        cnNavbarItem({ active: true, form: 'round' }),
      );
    });

    it('должен корректно работать с subMenu и активным состоянием', () => {
      const activeItemWithSubMenu = { ...itemWithSubMenu, active: true };
      renderComponent({ item: activeItemWithSubMenu });

      const element = getNavbarItemElement('Parent Item');
      expect(element).toHaveClass(cnNavbarItem({ active: true }));
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('Кастомные геттеры и структуры данных', () => {
    type CustomNavbarItem = {
      id: number;
      name: string;
      isActive: boolean;
      iconName: string;
      badge: string;
      children: CustomNavbarItem[];
      customClass: string;
      htmlAttributes: Record<string, string>;
    };

    const customItem: CustomNavbarItem = {
      id: 1,
      name: 'Custom Item',
      isActive: true,
      iconName: 'home',
      badge: 'warning',
      children: [
        {
          id: 2,
          name: 'Child Item',
          isActive: false,
          iconName: 'child',
          badge: 'success',
          children: [],
          customClass: 'child-class',
          htmlAttributes: {},
        },
      ],
      customClass: 'parent-class',
      htmlAttributes: { 'data-custom': 'value', 'title': 'Custom Title' },
    };

    it('должен работать с кастомными геттерами для всех полей', () => {
      const onItemClick = jest.fn();
      const onItemSubMenuToggle = jest.fn();

      renderComponent({
        item: customItem,

        getItemLabel: (item: CustomNavbarItem) => item.name,
        getItemActive: (item: CustomNavbarItem) => item.isActive,
        getItemIcon: (item: CustomNavbarItem) => () =>
          <span data-testid={`icon-${item.iconName}`}>{item.iconName}</span>,
        getItemStatus: (item: CustomNavbarItem) => item.badge as any,
        getItemSubMenu: (item: CustomNavbarItem) => item.children,
        getItemAdditionalClassName: (item: CustomNavbarItem) =>
          item.customClass,
        getItemAttributes: (item: CustomNavbarItem) => item.htmlAttributes,

        onItemClick,
        onItemSubMenuToggle,
      });

      expect(screen.getByText('Custom Item')).toBeInTheDocument();
      expect(screen.getByTestId('icon-home')).toBeInTheDocument();

      const element = getNavbarItemElement('Custom Item');
      expect(element).toHaveClass('parent-class');
      expect(element).toHaveAttribute('data-custom', 'value');
      expect(element).toHaveAttribute('title', 'Custom Title');

      fireEvent.click(screen.getByText('Custom Item'));
      expect(onItemClick).toHaveBeenCalledWith(customItem, {
        e: expect.any(Object),
      });
    });

    it('должен работать с кастомными геттерами для subMenu', () => {
      const getItemSubMenuOpen = jest.fn().mockReturnValue(false);
      const onItemSubMenuToggle = jest.fn();

      renderComponent({
        item: customItem,
        getItemLabel: (item: CustomNavbarItem) => item.name,
        getItemSubMenu: (item: CustomNavbarItem) => item.children,
        getItemSubMenuOpen,
        onItemSubMenuToggle,
      });

      expect(screen.getByRole('button')).toBeInTheDocument();

      fireEvent.click(screen.getByText('Custom Item'));
      expect(onItemSubMenuToggle).toHaveBeenCalledWith(customItem, true, {
        e: expect.any(Object),
      });
    });

    it('должен работать с кастомными геттерами для вложенных элементов', () => {
      renderComponent({
        item: customItem,
        getItemLabel: (item: CustomNavbarItem) => item.name,
        getItemSubMenu: (item: CustomNavbarItem) => item.children,
        getItemSubMenuOpen: (item: CustomNavbarItem) => item.isActive,
        onItemSubMenuToggle: jest.fn(),
      });

      fireEvent.click(screen.getByText('Custom Item'));

      expect(screen.getByText('Child Item')).toBeInTheDocument();
    });

    it('должен работать с частично кастомными геттерами', () => {
      const mixedItem = {
        label: 'Standard Label',
        customActive: true,
        icon: () => <span data-testid="mixed-icon">Icon</span>,
      };

      renderComponent({
        item: mixedItem,
        getItemActive: (item: any) => item.customActive,
      });

      expect(screen.getByText('Standard Label')).toBeInTheDocument();
      expect(screen.getByTestId('mixed-icon')).toBeInTheDocument();

      const element = getNavbarItemElement('Standard Label');
      expect(element).toHaveClass(cnNavbarItem({ active: true }));
    });

    it('должен корректно обрабатывать отсутствие необязательных геттеров', () => {
      const minimalItem = {
        name: 'Minimal Item',
      };

      renderComponent({
        item: minimalItem,
        getItemLabel: (item: any) => item.name,
      });

      expect(screen.getByText('Minimal Item')).toBeInTheDocument();

      const element = getNavbarItemElement('Minimal Item');
      expect(element).toBeInTheDocument();
    });

    it('должен работать с кастомным rightSide через геттер', () => {
      const customItemWithRightSide = {
        id: 1,
        name: 'Item with Custom Right Side',
        rightContent: <span data-testid="custom-right">Custom Right</span>,
      };

      renderComponent({
        item: customItemWithRightSide,
        getItemLabel: (item: any) => item.name,
        getItemRightSide: (item: any) => item.rightContent,
      });

      expect(screen.getByTestId('custom-right')).toBeInTheDocument();
      expect(
        screen.getByText('Item with Custom Right Side'),
      ).toBeInTheDocument();
    });

    it('должен комбинировать кастомные геттеры с контролируемым состоянием', () => {
      const customItem = {
        id: 1,
        title: 'Controlled Item',
        expanded: false,
        items: [{ id: 2, title: 'Nested Item', expanded: false, items: [] }],
      };

      const { rerender } = renderComponent({
        item: customItem,
        getItemLabel: (item: any) => item.title,
        getItemSubMenu: (item: any) => item.items,
        getItemSubMenuOpen: (item: any) => item.expanded,
        onItemSubMenuToggle: jest.fn((item, newOpen) => {
          item.expanded = newOpen;
        }),
      });

      expect(screen.queryByText('Nested Item')).not.toBeInTheDocument();

      customItem.expanded = true;
      rerender(
        <NavbarItem
          {...createNavbarItemProps({
            item: customItem,
            getItemLabel: (item: any) => item.title,
            getItemSubMenu: (item: any) => item.items,
            getItemSubMenuOpen: (item: any) => item.expanded,
            onItemSubMenuToggle: jest.fn(),
          })}
        />,
      );

      expect(screen.getByText('Nested Item')).toBeInTheDocument();
    });
  });

  describe('Edge cases с кастомными геттерами', () => {
    it('должен обрабатывать null и undefined значения в кастомных геттерах', () => {
      const itemWithNulls = {
        name: 'Item with Nulls',
        active: null,
        icon: undefined,
        status: null,
      };

      renderComponent({
        item: itemWithNulls,
        getItemLabel: (item: any) => item.name,
        getItemActive: (item: any) => item.active,
        getItemIcon: (item: any) => item.icon,
        getItemStatus: (item: any) => item.status,
      });

      expect(screen.getByText('Item with Nulls')).toBeInTheDocument();
    });

    it('должен работать с функциями-геттерами которые возвращают сложную логику', () => {
      const complexItem = {
        data: {
          title: 'Complex Item',
          metadata: {
            isSelected: true,
            priority: 'high',
          },
        },
      };

      renderComponent({
        item: complexItem,
        getItemLabel: (item: any) => item.data.title,
        getItemActive: (item: any) => item.data.metadata.isSelected,
        getItemAdditionalClassName: (item: any) =>
          item.data.metadata.priority === 'high' ? 'high-priority' : '',
        getItemAttributes: (item: any) => ({
          'data-priority': item.data.metadata.priority,
        }),
      });

      expect(screen.getByText('Complex Item')).toBeInTheDocument();

      const element = getNavbarItemElement('Complex Item');
      expect(element).toHaveClass('high-priority');
      expect(element).toHaveAttribute('data-priority', 'high');
    });
  });
});
