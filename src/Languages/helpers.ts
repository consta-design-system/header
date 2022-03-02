import { LanguagesProps } from './types'

import {
  defaultGetItemTarget,
  defaultGetItemOnClick,
  defaultGetItemHref,
  defaultGetItemLabel,
} from '@/SelectMenu/helpers'

export function withDefaultGetters<ITEM>(props: LanguagesProps<ITEM>) {
  return {
    ...props,
    getItemLabel: props.getItemLabel || defaultGetItemLabel,
    getItemHref: props.getItemHref || defaultGetItemHref,
    getItemOnClick: props.getItemOnClick || defaultGetItemOnClick,
    getItemTarget: props.getItemTarget || defaultGetItemTarget,
  }
}
