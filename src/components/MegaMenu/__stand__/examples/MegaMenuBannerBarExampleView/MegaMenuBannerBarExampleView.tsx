import { Example } from '@consta/stand';
import React from 'react';

import {
  MegaMenuBannerBar,
  MegaMenuBannerBarPropView,
} from '##/components/MegaMenu/MegaMenuBannerBar';
import Image from '##/images/Brim.image.jpeg';

const views: MegaMenuBannerBarPropView[] = ['vertical', 'horizontal'];

const items = [
  {
    label: 'Особенности разведки',
    description:
      'Лицензии на пользование недрами (далее для настоящей главы - лицензия) выдаются федеральным органом исполнительной власти ...',
    image: Image,
  },
];

export const MegaMenuBannerBarExampleView = () => {
  return (
    <Example
      items={views}
      getItemLabel={(view) => `view=${view}`}
      getItemNode={(view: MegaMenuBannerBarPropView) => (
        <MegaMenuBannerBar items={items} view={view} />
      )}
    />
  );
};
