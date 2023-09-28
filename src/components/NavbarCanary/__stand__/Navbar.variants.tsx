import { useSelect } from '@consta/stand';
import React from 'react';

import { NavbarRailVariants, NavbarVariants } from './variants';

const components = {
  Navbar: NavbarVariants,
  NavbarRail: NavbarRailVariants,
};
const componentsNames = Object.keys(components) as (keyof typeof components)[];

const Variants = () => {
  const componentName =
    useSelect('component', componentsNames, componentsNames[0]) ||
    componentsNames[0];

  const Component = components[componentName] || NavbarVariants;

  return <Component key={componentName} />;
};

export default Variants;
