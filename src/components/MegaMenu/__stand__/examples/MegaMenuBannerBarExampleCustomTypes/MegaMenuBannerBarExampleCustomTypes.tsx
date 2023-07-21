import { Example } from '@consta/stand';
import React from 'react';

import { MegaMenuBannerBar } from '##/components/MegaMenu/MegaMenuBannerBar';

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
    photo:
      'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=',
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
