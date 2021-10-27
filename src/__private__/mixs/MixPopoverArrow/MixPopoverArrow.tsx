import './MixPopoverArrow.css'
import { Direction } from '@consta/uikit/Popover'

import { cn } from '@/__private__/utils/bem'

type Props = {
  direction?: Direction
}

type CnMixPopoverArrow = (
  elemNameOrBlockMods?: Props | string | null,
  elemModsOrBlockMix?: Props | Array<string | undefined> | null,
  elemMix?: Array<string | undefined>
) => string

export const cnMixPopoverArrow: CnMixPopoverArrow = cn('MixPopoverArrow')
