import React, { forwardRef } from 'react'

import { cn } from '@/__private__/utils/bem'

import { LayoutRowIsObject } from './helpers'
import { LayoutProps } from './types'
import './Layout.css'
import { LayoutRow } from './LayoutRow/LayoutRow'

const cnLayout = cn('Layout')

export const Layout = forwardRef((props: LayoutProps, ref: React.Ref<HTMLDivElement>) => {
  const { className, rowTop, rowBottom, rowCenter, children } = props

  return (
    <div ref={ref} className={cnLayout(null, [className])}>
      {rowTop && <LayoutRow className={cnLayout('Row')} content={rowTop} height="s" />}
      {(rowCenter || children) && (
        <LayoutRow
          className={cnLayout('Row')}
          content={rowCenter || children}
          height={LayoutRowIsObject(rowCenter) ? rowCenter.height : undefined}
        />
      )}
      {rowBottom && <LayoutRow className={cnLayout('Row')} content={rowBottom} height="s" />}
    </div>
  )
})

export * from './types'
