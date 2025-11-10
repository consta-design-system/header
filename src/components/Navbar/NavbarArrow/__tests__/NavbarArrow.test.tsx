import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { NavbarArrow } from '../NavbarArrow';

const defaultProps = {
  open: false,
  onClick: jest.fn(),
};

const renderNavbarArrow = (props = {}) => {
  return render(<NavbarArrow {...defaultProps} {...props} />);
};

describe('Компонент NavbarArrow', () => {
  describe('Базовый рендеринг', () => {
    it('должен рендериться без ошибок', () => {
      expect(() => renderNavbarArrow()).not.toThrow();
    });

    it('должен отображать кнопку', () => {
      renderNavbarArrow();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('должен отображать иконку стрелки', () => {
      renderNavbarArrow();
      const icon = document.querySelector('.IconArrowDown');
      expect(icon).toBeInTheDocument();
    });
  });

  describe('Пропсы и состояние', () => {
    it('должен применять правильные пропсы к Button', () => {
      renderNavbarArrow();

      const button = screen.getByRole('button');

      expect(button).toHaveClass('Button_size_xs');
      expect(button).toHaveClass('Button_view_clear');
      expect(button).toHaveClass('Button_onlyIcon');
      expect(button).toHaveAttribute('tabindex', '-1');
    });

    it('должен передавать open в AnimateIconSwitcherProvider', () => {
      const { rerender } = renderNavbarArrow({ open: false });

      let iconContainer = document.querySelector('.icons--AnimateIconBase');
      expect(iconContainer).toHaveStyle(
        '--animate-icon-direction: rotate(0deg)',
      );

      rerender(<NavbarArrow {...defaultProps} open />);
      iconContainer = document.querySelector('.icons--AnimateIconBase');
      expect(iconContainer).toHaveStyle(
        '--animate-icon-direction: rotate(180deg)',
      );
    });

    it('должен корректно работать с разными состояниями open', () => {
      const { rerender } = renderNavbarArrow({ open: false });

      expect(document.querySelector('.icons--AnimateIconBase')).toHaveStyle(
        '--animate-icon-direction: rotate(0deg)',
      );

      rerender(<NavbarArrow {...defaultProps} open />);
      expect(document.querySelector('.icons--AnimateIconBase')).toHaveStyle(
        '--animate-icon-direction: rotate(180deg)',
      );

      rerender(<NavbarArrow {...defaultProps} open={false} />);
      expect(document.querySelector('.icons--AnimateIconBase')).toHaveStyle(
        '--animate-icon-direction: rotate(0deg)',
      );
    });
  });

  describe('Взаимодействие', () => {
    it('должен вызывать onClick при клике на кнопку', () => {
      const onClick = jest.fn();
      renderNavbarArrow({ onClick });

      fireEvent.click(screen.getByRole('button'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('должен корректно обрабатывать multiple clicks', () => {
      const onClick = jest.fn();
      renderNavbarArrow({ onClick });

      const button = screen.getByRole('button');

      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);

      expect(onClick).toHaveBeenCalledTimes(3);
    });
  });

  describe('Визуальное состояние', () => {
    it('должен иметь правильные стили для размера xs', () => {
      renderNavbarArrow();

      const button = screen.getByRole('button');
      const icon = document.querySelector('.icons--Icon');

      expect(button).toHaveClass('Button_size_xs');
      expect(icon).toHaveClass('icons--Icon_size_xs');
    });

    it('должен иметь прозрачный вид (view="clear")', () => {
      renderNavbarArrow();

      const button = screen.getByRole('button');
      expect(button).toHaveClass('Button_view_clear');
    });

    it('должен быть только с иконкой (onlyIcon)', () => {
      renderNavbarArrow();

      const button = screen.getByRole('button');
      expect(button).toHaveClass('Button_onlyIcon');
    });
  });

  describe('Accessibility', () => {
    it('должен иметь tabIndex -1', () => {
      renderNavbarArrow();

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('tabindex', '-1');
    });

    it('должен быть доступен для кликов', () => {
      renderNavbarArrow();

      const button = screen.getByRole('button');
      expect(button).not.toBeDisabled();
    });
  });

  describe('Интеграция с анимацией', () => {
    it('должен использовать AnimateIconSwitcherProvider', () => {
      renderNavbarArrow();

      const provider = document.querySelector('.icons--AnimateIconBase');
      expect(provider).toBeInTheDocument();
    });

    it('должен использовать HOC withAnimateSwitcherHOC для иконки', () => {
      renderNavbarArrow();

      const arrowIcon = document.querySelector('.IconArrowDown');
      expect(arrowIcon).toBeInTheDocument();
    });
  });
});
