import './NavbarMixDriverRightAnimate.css';

import { cn } from '##/utils/bem';

type Mods = {
  animate?: 'entered' | 'entering' | 'exiting' | 'exited' | 'unmounted';
  menu: 'rail' | 'draver';
};

type Cn = (mods?: Mods | null, mix?: Array<string | undefined>) => string;

export const cnNavbarMixDriverRightAnimate: Cn = cn(
  'NavbarMixDriverRightAnimate',
);
