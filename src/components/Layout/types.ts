import { PropsWithHTMLAttributesAndRef } from '@consta/uikit/__internal__/src/utils/types/PropsWithHTMLAttributes';
import React from 'react';

export type LayoutSlotHeight = 'm' | 's';

export type LayoutRow = {
  left: React.ReactNode;
  right: React.ReactNode;
  center: React.ReactNode;
  height?: LayoutSlotHeight;
};

export type LayoutProps = PropsWithHTMLAttributesAndRef<
  {
    rowCenter?: React.ReactNode | LayoutRow;
    rowTop?: React.ReactNode | Omit<LayoutRow, 'height'>;
    rowBottom?: React.ReactNode | Omit<LayoutRow, 'height'>;
  },
  HTMLDivElement
>;
