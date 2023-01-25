import { useBoolean, useSelect, useText } from '@consta/stand';
import React from 'react';

import { items } from '../__mocks__/mock.data';
import { BannerBar } from '../BannerBar';

const Variants = () => {
  const view = useSelect('view', ['horizontal', 'vertical'], 'vertical');
  const withImage = useBoolean('withImage', false);
  const image = useText(
    'image',
    'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=',
  );

  const getItemImage = () => {
    return withImage ? image : undefined;
  };
  return <BannerBar view={view} items={items} getItemImage={getItemImage} />;
};

export default Variants;
