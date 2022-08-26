import React from 'react';

import { PropsWithHTMLAttributesAndRef } from '##/utils/types/PropsWithHTMLAttributes';

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
