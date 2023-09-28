import './NavbarMixFadeAnimate.css';

import { cn } from '##/utils/bem';

const cnFn = cn('NavbarMixFadeAnimate');

type Mods = {
  animate?: 'entered' | 'entering' | 'exiting' | 'exited' | 'unmounted';
  menu: 'rail' | 'draver';
};

type CnNavbarMixFadeAnimate = (
  mods?: Mods | null,
  mix?: Array<string | undefined>,
) => string;

export const cnNavbarMixFadeAnimate: CnNavbarMixFadeAnimate = cnFn;
