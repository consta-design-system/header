import {
  SelectMenuPropGetItemHref,
  SelectMenuPropGetItemLabel,
  SelectMenuPropGetItemOnClick,
  SelectMenuPropGetItemTarget,
  SelectMenuPropOnItemClick,
} from '@/SelectMenu'

import { PropsWithHTMLAttributesAndRef } from '@/__private__/utils/types/PropsWithHTMLAttributes'

export type DefaultItem = {
  label: string
  href?: string
  target?: string
  onClick?: React.EventHandler<React.MouseEvent>
}

export type LanguagesProps<ITEM = DefaultItem> = PropsWithHTMLAttributesAndRef<
  {
    items: ITEM[]
    value?: ITEM
    onChange?: SelectMenuPropOnItemClick<ITEM>
    getItemHref?: SelectMenuPropGetItemHref<ITEM>
    getItemLabel?: SelectMenuPropGetItemLabel<ITEM>
    getItemTarget?: SelectMenuPropGetItemTarget<ITEM>
    getItemOnClick?: SelectMenuPropGetItemOnClick<ITEM>
  },
  HTMLDivElement
> &
  (ITEM extends { label: DefaultItem['label'] }
    ? {}
    : { getItemLabel: SelectMenuPropGetItemLabel<ITEM> })

export type LanguagesComponent = <ITEM = DefaultItem>(
  props: LanguagesProps<ITEM>
) => React.ReactElement | null
