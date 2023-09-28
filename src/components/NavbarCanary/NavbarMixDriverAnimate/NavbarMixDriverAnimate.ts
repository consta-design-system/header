import './NavbarMixDriverAnimate.css';

import { cn } from '##/utils/bem';

const cnFn = cn('NavbarMixDriverAnimate');

type Mods = {
  animate?: 'entered' | 'entering' | 'exiting' | 'exited' | 'unmounted';
  menu: 'rail' | 'draver';
};

type CnNavbarMixDriverAnimate = (
  mods?: Mods | null,
  mix?: Array<string | undefined>,
) => string;

export const cnNavbarMixDriverAnimate: CnNavbarMixDriverAnimate = cnFn;
