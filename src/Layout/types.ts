import { PropsWithHTMLAttributesAndRef } from '@/__private__/utils/types/PropsWithHTMLAttributes'

export type LayoutRow = {
  left: React.ReactNode
  right: React.ReactNode
  center: React.ReactNode
  height?: LayoutSlotHeight
}

export type LayoutSlotHeight = 'm' | 's'

export type LayoutPropRowCenter = React.ReactNode | LayoutRow
export type LayoutPropRowTop = React.ReactNode | Omit<LayoutRow, 'height'>
export type LayoutPropRowBottom = React.ReactNode | Omit<LayoutRow, 'height'>

export type LayoutProps = PropsWithHTMLAttributesAndRef<
  {
    rowCenter?: LayoutPropRowCenter
    rowTop?: LayoutPropRowTop
    rowBottom?: LayoutPropRowBottom
  },
  HTMLDivElement
>
