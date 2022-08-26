import {
  defaultGetItemHref,
  defaultGetItemLabel,
  defaultGetItemOnClick,
  defaultGetItemTarget,
} from '##/components/SelectMenu/helpers';

import { LanguagesProps } from './types';

export function withDefaultGetters<ITEM>(props: LanguagesProps<ITEM>) {
  return {
    ...props,
    getItemLabel: props.getItemLabel || defaultGetItemLabel,
    getItemHref: props.getItemHref || defaultGetItemHref,
    getItemOnClick: props.getItemOnClick || defaultGetItemOnClick,
    getItemTarget: props.getItemTarget || defaultGetItemTarget,
  };
}
