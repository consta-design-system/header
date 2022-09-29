import './Layout.css';

import React, { forwardRef } from 'react';

import { cn } from '##/utils/bem';

import { LayoutRowIsObject } from './helpers';
import { LayoutRow } from './LayoutRow/LayoutRow';
import { LayoutProps } from './types';

const cnLayout = cn('Layout');

export const Layout = forwardRef(
  (props: LayoutProps, ref: React.Ref<HTMLDivElement>) => {
    const { className, rowTop, rowBottom, rowCenter, children, ...otherProps } =
      props;

    return (
      <div {...otherProps} className={cnLayout(null, [className])} ref={ref}>
        {rowTop && (
          <LayoutRow
            className={cnLayout('Row', { top: true })}
            content={rowTop}
            height="s"
          />
        )}
        {(rowCenter || children) && (
          <LayoutRow
            className={cnLayout('Row', { center: true })}
            content={rowCenter || children}
            height={LayoutRowIsObject(rowCenter) ? rowCenter.height : undefined}
          />
        )}
        {rowBottom && (
          <LayoutRow
            className={cnLayout('Row', { botton: true })}
            content={rowBottom}
            height="s"
          />
        )}
      </div>
    );
  },
);

export * from './types';
