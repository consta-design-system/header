import './TileMenuItem.css';

import { forwardRefWithAs } from '@consta/uikit/__internal__/src/utils/types/PropsWithAsAttributes';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import React from 'react';

import { cn } from '##/utils/bem';

export const tileMenuItemPropView = ['card', 'line'] as const;
export type TileMenuItemPropView = typeof tileMenuItemPropView[number];

type TileMenuItemProps = {
  image?: string | React.FC;
  title: string;
  description?: string;
  view?: TileMenuItemPropView;
};

const cnTileMenuItem = cn('TileMenuItem');

const renderImage = (image: string | React.FC, title: string) => {
  if (typeof image === 'string') {
    return <img src={image} alt={title} />;
  }
  const ImageComponent = image;
  return <ImageComponent />;
};

export const TileMenuItem = forwardRefWithAs<TileMenuItemProps>(
  (props, ref) => {
    const {
      image,
      className,
      title,
      description,
      view = 'line',
      as = 'div',
      ...otherProps
    } = props;

    const Tag = as as string;
    const viewIsCard = view === 'card';
    const viewIsLine = view === 'line';

    return (
      <Tag
        {...otherProps}
        ref={ref}
        className={cnTileMenuItem({ view }, [
          viewIsCard
            ? cnMixSpace({ p: 's', pT: 'm' })
            : cnMixSpace({ pV: 's' }),
          className,
        ])}
      >
        {image && (
          <div className={cnTileMenuItem('ImageWrapper')}>
            {renderImage(image, title)}
          </div>
        )}
        <div className={cnTileMenuItem('ContentWrapper')}>
          <Text
            weight={viewIsLine ? 'bold' : undefined}
            align={viewIsCard ? 'center' : undefined}
            className={cnTileMenuItem('Title', [
              viewIsLine ? cnMixSpace({ pB: '2xs' }) : undefined,
            ])}
          >
            {title}
          </Text>
          {description && viewIsLine && (
            <Text view="secondary" className={cnTileMenuItem('Description')}>
              {description}
            </Text>
          )}
        </div>
      </Tag>
    );
  },
);
