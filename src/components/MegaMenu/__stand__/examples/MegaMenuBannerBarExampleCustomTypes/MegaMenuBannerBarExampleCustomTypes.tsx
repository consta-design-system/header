import { Example } from '@consta/stand';
import React from 'react';

import { MegaMenuBannerBar } from '##/components/MegaMenu/MegaMenuBannerBar';
import Image from '##/images/Brim.image.jpeg';

type Item = {
  text: string;
  description: string;
  photo?: string;
};

const items: Item[] = [
  {
    text: 'Особенности разведки',
    description:
      'Лицензии на пользование недрами (далее для настоящей главы - лицензия) выдаются федеральным органом исполнительной власти ...',
    photo: Image,
  },
];

export const MegaMenuBannerBarExampleCustomTypes = () => {
  return (
    <Example>
      <MegaMenuBannerBar
        getItemLabel={(item) => item.text}
        getItemImage={(item) => item.photo}
        items={items}
        view="horizontal"
      />
    </Example>
  );
};
