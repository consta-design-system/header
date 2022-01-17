import './MixPopoverAnimate.css'
import { cnForCssTransition } from '@consta/uikit/__internal__/src/utils/cnForCssTransition'

import { cn } from '@/__private__/utils/bem'

export const cnMixPopoverAnimate = cn('MixPopoverAnimate')
export const cnMixPopoverAnimateForCssTransition = cnForCssTransition(cnMixPopoverAnimate)
export const animateTimeout = 200
