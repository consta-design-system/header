import { IconComponent } from '@consta/icons/Icon';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { cnNavbarItem } from '../../NavbarRailItem';
import { DefaultNavbarRailItem } from '../../types';
import { NavbarRail } from '../NavbarRail';

const simpleItems: DefaultNavbarRailItem[] = [
  { label: 'Item 1', icon: () => <span>Icon1</span> },
  { label: 'Item 2', icon: () => <span>Icon2</span> },
  { label: 'Item 3', icon: () => <span>Icon3</span> },
];

const itemsWithStatus: DefaultNavbarRailItem[] = [
  {
    label: 'Item with Status',
    icon: () => <span>Icon</span>,
    status: 'error' as const,
  },
  { label: 'Active Item', icon: () => <span>Icon</span>, active: true },
];

const customItems = [
  { id: 1, title: 'Custom Item', iconName: 'home', isActive: true },
];

describe('Компонент NavbarRail', () => {
  describe('Базовый рендеринг', () => {
    it('должен рендериться без ошибок с минимальными пропсами', () => {
      expect(() => render(<NavbarRail items={simpleItems} />)).not.toThrow();
    });

    it('должен отображать все переданные элементы', () => {
      render(<NavbarRail items={simpleItems} />);

      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
      expect(screen.getByText('Item 3')).toBeInTheDocument();
    });

    it('должен применять кастомный className', () => {
      const { container } = render(
        <NavbarRail items={simpleItems} className="custom-rail" />,
      );

      const railElement = container.firstChild as HTMLElement;
      expect(railElement).toHaveClass('custom-rail');
    });
  });

  describe('Размеры и формы', () => {
    it('должен работать с разными размерами', () => {
      const sizes = ['s', 'm'] as const;

      sizes.forEach((size) => {
        const { container, unmount } = render(
          <NavbarRail items={simpleItems} size={size} />,
        );

        const railItems = container.querySelectorAll(`.${cnNavbarItem()}`);
        expect(railItems.length).toBe(3);
        unmount();
      });
    });

    it('должен работать с разными формами', () => {
      const forms = ['default', 'round', 'brick'] as const;

      forms.forEach((form) => {
        const { container, unmount } = render(
          <NavbarRail items={simpleItems} form={form} />,
        );

        const railItems = container.querySelectorAll(`.${cnNavbarItem()}`);
        expect(railItems.length).toBe(3);
        unmount();
      });
    });
  });

  describe('Визуальные элементы', () => {
    it('должен отображать Badge при наличии статуса', () => {
      render(<NavbarRail items={itemsWithStatus} />);

      const badges = document.querySelectorAll('.Badge');
      expect(badges.length).toBeGreaterThan(0);
    });
  });

  describe('Взаимодействие', () => {
    it('должен вызывать onItemClick при клике на элемент', () => {
      const onItemClick = jest.fn();
      render(<NavbarRail items={simpleItems} onItemClick={onItemClick} />);

      fireEvent.click(screen.getByText('Item 1'));
      expect(onItemClick).toHaveBeenCalledWith(simpleItems[0], {
        e: expect.any(Object),
      });
    });

    it('должен корректно обрабатывать клики по разным элементам', () => {
      const onItemClick = jest.fn();
      render(<NavbarRail items={simpleItems} onItemClick={onItemClick} />);

      fireEvent.click(screen.getByText('Item 1'));
      fireEvent.click(screen.getByText('Item 2'));
      fireEvent.click(screen.getByText('Item 3'));

      expect(onItemClick).toHaveBeenCalledTimes(3);
      expect(onItemClick).toHaveBeenCalledWith(simpleItems[0], {
        e: expect.any(Object),
      });
      expect(onItemClick).toHaveBeenCalledWith(simpleItems[1], {
        e: expect.any(Object),
      });
      expect(onItemClick).toHaveBeenCalledWith(simpleItems[2], {
        e: expect.any(Object),
      });
    });
  });

  describe('Кастомизация', () => {
    it('должен применять кастомные геттеры для элементов', () => {
      const getItemLabel = jest.fn((item: any) => item.title);
      const getItemIcon = jest.fn((item: any) => () => <span>CustomIcon</span>);
      const getItemActive = jest.fn((item: any) => item.isActive);

      render(
        <NavbarRail
          items={customItems}
          getItemLabel={getItemLabel}
          getItemIcon={getItemIcon}
          getItemActive={getItemActive}
        />,
      );

      expect(screen.getByText('Custom Item')).toBeInTheDocument();
      expect(getItemLabel).toHaveBeenCalledWith(customItems[0]);
      expect(getItemIcon).toHaveBeenCalledWith(customItems[0]);
      expect(getItemActive).toHaveBeenCalledWith(customItems[0]);
    });

    it('должен применять кастомные атрибуты для элементов', () => {
      const getItemAttributes = jest.fn().mockReturnValue({
        'data-custom': 'value',
        'title': 'Custom Title',
      });

      render(
        <NavbarRail
          items={simpleItems}
          getItemAttributes={getItemAttributes}
        />,
      );

      expect(getItemAttributes).toHaveBeenCalledWith(simpleItems[0]);
    });

    it('должен работать с кастомным элементом через getItemAs', () => {
      const getItemAs = jest.fn().mockReturnValue('button');

      render(<NavbarRail items={simpleItems} getItemAs={getItemAs} />);

      expect(getItemAs).toHaveBeenCalledWith(simpleItems[0]);
    });
  });

  describe('Ref передача', () => {
    it('должен корректно передавать ref на контейнер', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<NavbarRail items={simpleItems} ref={ref} />);

      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('должен работать с getItemRef для элементов', () => {
      const mockRef = React.createRef<HTMLDivElement>();
      const getItemRef = jest.fn().mockReturnValue(mockRef);

      render(<NavbarRail items={simpleItems} getItemRef={getItemRef} />);

      expect(getItemRef).toHaveBeenCalledWith(simpleItems[0]);
    });
  });

  describe('Edge cases', () => {
    const emptyItems: DefaultNavbarRailItem[] = [];

    it('должен работать с пустым массивом items', () => {
      expect(() => render(<NavbarRail items={emptyItems} />)).not.toThrow();

      const { container } = render(<NavbarRail items={emptyItems} />);
      expect(container.firstChild).toBeInTheDocument();
    });

    it('должен корректно обрабатывать отсутствие необязательных геттеров', () => {
      const minimalItems = [
        { label: 'Minimal Item', icon: () => <span>Icon</span> },
      ];

      render(<NavbarRail items={minimalItems} />);

      expect(screen.getByText('Minimal Item')).toBeInTheDocument();
    });

    it('должен работать с кастомными типами данных', () => {
      type CustomRailItem = {
        code: string;
        displayName: string;
        iconComponent: IconComponent;
        isSelected: boolean;
      };

      const customItems: CustomRailItem[] = [
        {
          code: 'home',
          displayName: 'Home Page',
          iconComponent: () => (
            <span data-testid="test-icon">IconComponent</span>
          ),
          isSelected: true,
        },
      ];

      const { getByText } = render(
        <NavbarRail<CustomRailItem>
          items={customItems}
          getItemLabel={(item) => item.displayName}
          getItemIcon={(item) => item.iconComponent}
          getItemActive={(item) => item.isSelected}
        />,
      );

      expect(getByText('Home Page')).toBeInTheDocument();
    });
  });

  describe('Комплексные сценарии', () => {
    it('должен корректно работать с комбинацией всех фич', () => {
      const complexItems: DefaultNavbarRailItem[] = [
        {
          label: 'Active Item',
          icon: () => <span>Icon</span>,
          active: true,
          status: 'success' as const,
          tooltip: 'Active item tooltip',
        },
        {
          label: 'Normal Item',
          icon: () => <span>Icon</span>,
          tooltip: 'Normal item tooltip',
        },
      ];

      const onItemClick = jest.fn();

      render(
        <NavbarRail
          items={complexItems}
          size="s"
          form="round"
          onItemClick={onItemClick}
        />,
      );

      expect(screen.getByText('Active Item')).toBeInTheDocument();
      expect(screen.getByText('Normal Item')).toBeInTheDocument();

      const badges = document.querySelectorAll('.Badge');
      expect(badges.length).toBeGreaterThan(0);

      fireEvent.click(screen.getByText('Active Item'));
      expect(onItemClick).toHaveBeenCalledWith(complexItems[0], {
        e: expect.any(Object),
      });
    });
  });
});
