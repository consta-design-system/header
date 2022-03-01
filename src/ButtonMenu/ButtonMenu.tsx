import React, { forwardRef } from 'react'

import { cn } from '@/__private__/utils/bem'

import { withDefaultGetters } from './helpers'
import { ButtonMenuProps, ButtonMenuComponent } from './types'
import { getItemClick } from '@/__private__/helpers/getItemClick'

import './ButtonMenu.css'

import { Button, buttonPropSizeDefault } from '@consta/uikit/Button'

export const cnButtonMenu = cn('ButtonMenu')

const gapMap = {
  xs: '2xs',
  s: 'xs',
  m: 's',
  l: 'm',
} as const

const ButtonMenuRender = (props: ButtonMenuProps, ref: React.Ref<HTMLDivElement>) => {
  const {
    items,
    className,
    getItemHref,
    getItemLabel,
    getItemOnClick,
    getItemTarget,
    onItemClick,
    getItemIcon,
    form,
    size = buttonPropSizeDefault,
    view,
    onlyIcon,
    style,
    ...otherProps
  } = withDefaultGetters(props)

  return (
    <div
      {...otherProps}
      className={cnButtonMenu(null, [className])}
      ref={ref}
      style={{
        ...style,
        ['--button-menu-gap' as string]: `var(--space-${gapMap[size]})`,
      }}
    >
      {items.map((item, index) => {
        const target = getItemTarget(item)
        const href = getItemHref(item)

        const linkProps =
          (target || href) &&
          ({
            as: 'a',
            target,
            href,
          } as const)

        return (
          <Button
            {...linkProps}
            key={index}
            form={form}
            size={size}
            view={view}
            onlyIcon={onlyIcon}
            iconLeft={getItemIcon(item)}
            label={getItemLabel(item)}
            onClick={getItemClick(item, getItemOnClick, onItemClick)}
          />
        )
      })}
    </div>
  )
}

export const ButtonMenu = forwardRef(ButtonMenuRender) as ButtonMenuComponent

export * from './types'
