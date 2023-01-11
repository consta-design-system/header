import React from 'react';

import { BannerBar } from '##/components/BannerBar/BannerBar';
import { Example } from '##/stand/components';

type Item = {
  label: string;
  description: string;
  image?: string;
};

const items: Item[] = [
  {
    label: 'Особенности разведки',
    description:
      'Лицензии на пользование недрами (далее для настоящей главы - лицензия) выдаются федеральным органом исполнительной власти ...',
    image:
      'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=',
  },
];

export const BannerBarExample = () => {
  return (
    <Example>
      <BannerBar items={items} view="vertical" />
    </Example>
  );
};
