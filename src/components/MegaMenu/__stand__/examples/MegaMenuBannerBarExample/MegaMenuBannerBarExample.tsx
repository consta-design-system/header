import { Example } from '@consta/stand';
import React from 'react';

import { MegaMenuBannerBar } from '##/components/MegaMenu/MegaMenuBannerBar';
import Image from '##/images/Brim.image.jpeg';

const items = [
  {
    label: 'Особенности разведки',
    description:
      'Лицензии на пользование недрами (далее для настоящей главы - лицензия) выдаются федеральным органом исполнительной власти ...',
    image: Image,
  },
];

export const MegaMenuBannerBarExample = () => {
  return (
    <Example>
      <MegaMenuBannerBar items={items} view="horizontal" />
    </Example>
  );
};
