import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';

import { cnNavbarItem, NavbarRailItem, spaceMap } from '../NavbarRailItem';

export const createNavbarRailItemProps = (customProps: any = {}) => ({
  size: 'm' as const,
  form: 'default' as const,
  active: false,
  ...customProps,
});

const defaultItemProps = {
  label: 'Test Item',
  icon: () => <span data-testid="test-icon">Icon</span>,
};

const activeItem = {
  label: 'Active Item',
  icon: () => <span data-testid="active-icon">Icon</span>,
  active: true,
};

const itemWithStatus = {
  label: 'Item with Status',
  icon: () => <span data-testid="status-icon">Icon</span>,
  status: 'error' as const,
};

const minimalItem = {
  label: 'Minimal Item',
  icon: () => <span data-testid="minimal-icon">Icon</span>,
};

const renderComponent = (props: any = {}) => {
  const itemProps = createNavbarRailItemProps(props);
  return render(<NavbarRailItem {...itemProps} />);
};

const getNavbarRailItemElement = () => {
  return document.querySelector(`.${cnNavbarItem()}`) as HTMLElement;
};

describe('Компонент NavbarRailItem', () => {
  describe('Базовый рендеринг', () => {
    it('должен рендериться без ошибок с минимальными пропсами', () => {
      expect(() => renderComponent(minimalItem)).not.toThrow();
    });

    it('должен отображать label и icon', () => {
      renderComponent(defaultItemProps);

      expect(screen.getByText('Test Item')).toBeInTheDocument();
      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });

    it('должен корректно рендериться со всеми комбинациями размеров и форм', () => {
      const sizes = Object.keys(spaceMap) as (keyof typeof spaceMap)[];
      const forms = ['default', 'round', 'brick'] as const;

      sizes.forEach((size) => {
        forms.forEach((form) => {
          expect(() =>
            renderComponent({ ...defaultItemProps, size, form }),
          ).not.toThrow();
        });
      });
    });
  });

  describe('Состояния и статусы', () => {
    it('должен применять модификатор active', () => {
      renderComponent(activeItem);
      const element = getNavbarRailItemElement();
      expect(element).toHaveClass(cnNavbarItem({ active: true }));
    });

    it('должен отображать Badge при наличии статуса', () => {
      renderComponent(itemWithStatus);

      const badge = document.querySelector('.Badge');
      expect(badge).toBeInTheDocument();
    });

    it('не должен отображать Badge если статуса нет', () => {
      renderComponent(defaultItemProps);

      const badge = document.querySelector('.Badge');
      expect(badge).not.toBeInTheDocument();
    });
  });

  describe('Размеры и отступы', () => {
    it('должен применять правильные размеры из spaceMap', () => {
      const sizes = Object.keys(spaceMap) as (keyof typeof spaceMap)[];

      sizes.forEach((size) => {
        const { unmount } = renderComponent({ ...defaultItemProps, size });
        const element = getNavbarRailItemElement();

        expect(element).toHaveClass(cnNavbarItem({ size }));
        unmount();
      });
    });
  });

  describe('Структура компонента', () => {
    it('должен иметь правильную структуру с иконкой и текстом', () => {
      renderComponent(defaultItemProps);

      const iconWrapper = document.querySelector(
        `.${cnNavbarItem('IconWrapper')}`,
      );
      const label = document.querySelector(`.${cnNavbarItem('Label')}`);

      expect(iconWrapper).toBeInTheDocument();
      expect(label).toBeInTheDocument();
      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
      expect(screen.getByText('Test Item')).toBeInTheDocument();
    });

    it('должен отображать только иконку если label не передан', () => {
      renderComponent({
        icon: () => <span data-testid="icon-only">Icon</span>,
        label: undefined,
      });

      expect(screen.getByTestId('icon-only')).toBeInTheDocument();
      expect(screen.queryByText('Test Item')).not.toBeInTheDocument();

      const label = document.querySelector(`.${cnNavbarItem('Label')}`);
      expect(label).not.toBeInTheDocument();
    });

    it('должен позиционировать Badge внутри IconWrapper', () => {
      renderComponent(itemWithStatus);

      const iconWrapper = document.querySelector(
        `.${cnNavbarItem('IconWrapper')}`,
      );
      const badge = document.querySelector('.Badge') as HTMLElement;

      expect(iconWrapper).toBeInTheDocument();
      expect(badge).toBeInTheDocument();
      expect(iconWrapper).toContainElement(badge);
    });
  });

  describe('Кастомизация', () => {
    it('должен применять кастомный className', () => {
      renderComponent({
        ...defaultItemProps,
        className: 'custom-class',
      });

      const element = getNavbarRailItemElement();
      expect(element).toHaveClass('custom-class');
    });

    it('должен рендериться как кастомный HTML элемент через prop as', () => {
      renderComponent({
        ...defaultItemProps,
        as: 'button',
      });

      const element = getNavbarRailItemElement();
      expect(element.tagName.toLowerCase()).toBe('button');
    });

    it('должен передавать все дополнительные HTML атрибуты', () => {
      renderComponent({
        ...defaultItemProps,
        'data-testid': 'rail-item',
        'title': 'Custom title',
        'id': 'test-id',
      });

      const element = getNavbarRailItemElement();
      expect(element).toHaveAttribute('data-testid', 'rail-item');
      expect(element).toHaveAttribute('title', 'Custom title');
      expect(element).toHaveAttribute('id', 'test-id');
    });
  });

  describe('Обработка событий', () => {
    it('должен обрабатывать клики', () => {
      const onClick = jest.fn();
      renderComponent({
        ...defaultItemProps,
        as: 'button',
        onClick,
      });

      fireEvent.click(screen.getByText('Test Item'));
      expect(onClick).toHaveBeenCalled();
    });

    it('должен обрабатывать hover события (для tooltip)', () => {
      renderComponent(defaultItemProps);

      const element = getNavbarRailItemElement();
      fireEvent.mouseEnter(element);
      fireEvent.mouseLeave(element);

      expect(screen.getByText('Test Item')).toBeInTheDocument();
    });
  });

  describe('Edge cases', () => {
    it('не должен работать с пустой строкой в label', () => {
      renderComponent({
        icon: () => <span data-testid="empty-label-icon">Icon</span>,
        label: '',
      });

      expect(screen.getByTestId('empty-label-icon')).toBeInTheDocument();
      const label = document.querySelector(`.${cnNavbarItem('Label')}`);
      expect(label).not.toBeInTheDocument();
    });

    it('должен работать когда переданы только обязательные пропсы', () => {
      expect(() => renderComponent({})).not.toThrow();

      const element = getNavbarRailItemElement();
      expect(element).toBeInTheDocument();
    });

    it('должен корректно обрабатывать null в icon', () => {
      renderComponent({
        label: 'Item with Null Icon',
        icon: null,
      });

      expect(screen.getByText('Item with Null Icon')).toBeInTheDocument();
      expect(screen.queryByTestId('test-icon')).not.toBeInTheDocument();
    });

    it('должен обрабатывать все возможные комбинации пропсов', () => {
      const complexProps = {
        'label': 'Complex Item',
        'icon': () => <span data-testid="complex-icon">Icon</span>,
        'status': 'warning' as const,
        'active': true,
        'size': 's' as const,
        'form': 'brick' as const,
        'as': 'span' as const,
        'className': 'complex-class',
        'data-complex': 'true',
      };

      expect(() => renderComponent(complexProps)).not.toThrow();

      const element = getNavbarRailItemElement();
      expect(element).toHaveClass(
        cnNavbarItem({
          size: 's',
          form: 'brick',
          active: true,
        }),
      );
      expect(element).toHaveClass('complex-class');
      expect(element).toHaveAttribute('data-complex', 'true');
      expect(element.tagName.toLowerCase()).toBe('span');
    });
  });

  describe('Специфика Rail версии', () => {
    it('должен быть компактным (иконка + подпись)', () => {
      renderComponent(defaultItemProps);

      const iconWrapper = document.querySelector(
        `.${cnNavbarItem('IconWrapper')}`,
      );
      const label = document.querySelector(`.${cnNavbarItem('Label')}`);

      expect(iconWrapper).toBeInTheDocument();
      expect(label).toBeInTheDocument();
    });

    it('не должен поддерживать subMenu (в отличие от обычного NavbarItem)', () => {
      renderComponent(defaultItemProps);

      const arrows = document.querySelectorAll('[class*="Arrow"]');
      expect(arrows.length).toBe(0);
    });
  });
});
