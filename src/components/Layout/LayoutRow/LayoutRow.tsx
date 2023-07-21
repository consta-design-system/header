import './LayoutRow.css';

import { cnMixSpace } from '@consta/uikit/MixSpace';
import React from 'react';

import { cn } from '##/utils/bem';
import { PropsWithHTMLAttributes } from '##/utils/types/PropsWithHTMLAttributes';

import { LayoutRowIsObject } from '../helpers';
import { LayoutRow as LayoutRowType, LayoutSlotHeight } from '../types';

const cnLayoutRow = cn('LayoutRow');

type LayoutRowProps = PropsWithHTMLAttributes<
  {
    content?: React.ReactNode | LayoutRowType;
    children?: never;
    height?: LayoutSlotHeight;
  },
  HTMLDivElement
>;

export const LayoutRow: React.FC<LayoutRowProps> = (props) => {
  const { className, content, height = 'm' } = props;
  if (!content) {
    return null;
  }
  if (LayoutRowIsObject(content)) {
    const { left, center, right } = content;
    return (
      <div
        className={cnLayoutRow({ height }, [
          className,
          cnMixSpace({ pH: 'xl' }),
        ])}
      >
        {left && (
          <div className={cnLayoutRow('Side', { position: 'left' })}>
            {left}
          </div>
        )}
        {center && (
          <div className={cnLayoutRow('Side', { position: 'center' })}>
            {center}
          </div>
        )}
        {right && (
          <div className={cnLayoutRow('Side', { position: 'right' })}>
            {right}
          </div>
        )}
      </div>
    );
  }
  return (
    <div className={cnLayoutRow({ height }, [className])}>
      <div className={cnLayoutRow('Side', { position: 'left' })}>{content}</div>
    </div>
  );
};
