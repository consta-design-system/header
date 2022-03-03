import {
  SelectMenuPropGetItemHref,
  SelectMenuPropGetItemLabel,
  SelectMenuPropGetItemOnClick,
  SelectMenuPropGetItemTarget,
  SelectMenuPropOnItemClick,
} from '@/SelectMenu'

import { PropsWithHTMLAttributesAndRef } from '@/__private__/utils/types/PropsWithHTMLAttributes'

export type LanguagesDefaultItem = {
  label: string
  href?: string
  target?: string
  onClick?: React.EventHandler<React.MouseEvent>
}

export type LanguagesProps<ITEM = LanguagesDefaultItem> = PropsWithHTMLAttributesAndRef<
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
  (ITEM extends { label: LanguagesDefaultItem['label'] }
    ? {}
    : { getItemLabel: SelectMenuPropGetItemLabel<ITEM> })

export type LanguagesComponent = <ITEM = LanguagesDefaultItem>(
  props: LanguagesProps<ITEM>
) => React.ReactElement | null
