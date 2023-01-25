import { Example } from '@consta/stand';
import React from 'react';

import { BannerBar, BannerBarPropView } from '##/components/BannerBar';

const views: BannerBarPropView[] = ['vertical', 'horizontal'];

const items = [
  {
    label: 'Особенности разведки',
    description:
      'Лицензии на пользование недрами (далее для настоящей главы - лицензия) выдаются федеральным органом исполнительной власти ...',
    image:
      'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=',
  },
];

export const BannerBarExampleView = () => {
  return (
    <Example
      items={views}
      getItemLabel={(view) => `view=${view}`}
      getItemNode={(view: BannerBarPropView) => (
        <BannerBar items={items} view={view} />
      )}
    />
  );
};
