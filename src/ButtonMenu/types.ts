import { PropsWithHTMLAttributesAndRef } from '@/__private__/utils/types/PropsWithHTMLAttributes'
import { IconComponent } from '@consta/uikit/Icon'
import { ButtonPropForm, ButtonPropSize, ButtonPropView } from '@consta/uikit/Button'

export type DefaultItem = {
  label: string
  href?: string
  target?: string
  icon?: IconComponent
  onClick?: React.EventHandler<React.MouseEvent>
}

export type ButtonMenuPropGetItemLabel<ITEM> = (item: ITEM) => string
export type ButtonMenuPropGetItemHref<ITEM> = (item: ITEM) => string | undefined
export type ButtonMenuPropGetItemTarget<ITEM> = (item: ITEM) => string | undefined
export type ButtonMenuPropGetItemIcon<ITEM> = (item: ITEM) => IconComponent | undefined
export type ButtonMenuPropGetItemOnClick<ITEM> = (
  item: ITEM
) => React.EventHandler<React.MouseEvent> | undefined
export type ButtonMenuPropOnItemClick<ITEM> = (props: { e: React.MouseEvent; item: ITEM }) => void

export type ButtonMenuProps<ITEM = DefaultItem> = PropsWithHTMLAttributesAndRef<
  {
    items: ITEM[]
    onItemClick?: ButtonMenuPropOnItemClick<ITEM>
    getItemHref?: ButtonMenuPropGetItemHref<ITEM>
    getItemLabel?: ButtonMenuPropGetItemLabel<ITEM>
    getItemTarget?: ButtonMenuPropGetItemTarget<ITEM>
    getItemOnClick?: ButtonMenuPropGetItemOnClick<ITEM>
    getItemIcon?: ButtonMenuPropGetItemIcon<ITEM>
    form?: ButtonPropForm
    size?: ButtonPropSize
    view?: ButtonPropView
    onlyIcon?: boolean
  },
  HTMLDivElement
> &
  (ITEM extends { label: DefaultItem['label'] }
    ? {}
    : { getItemLabel: ButtonMenuPropGetItemLabel<ITEM> })

export type ButtonMenuComponent = <ITEM = DefaultItem>(
  props: ButtonMenuProps<ITEM>
) => React.ReactElement | null
