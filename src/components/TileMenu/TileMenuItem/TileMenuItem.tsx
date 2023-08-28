import './TileMenuItem.css';

import { forwardRefWithAs } from '@consta/uikit/__internal__/src/utils/types/PropsWithAsAttributes';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import React from 'react';

import { cn } from '##/utils/bem';

import { TileMenuItemProps } from './types';

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
      view = 'default',
      as = 'div',
      ...otherProps
    } = props;

    const Tag = as as string;

    return (
      <Tag
        {...otherProps}
        ref={ref}
        className={cnTileMenuItem({ view }, [
          view === 'card'
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
            weight={view === 'default' ? 'bold' : undefined}
            align={view === 'card' ? 'center' : undefined}
            className={cnTileMenuItem('Title', [
              view === 'default' ? cnMixSpace({ pB: '2xs' }) : undefined,
            ])}
          >
            {title}
          </Text>
          {description && view === 'default' && (
            <Text view="secondary" className={cnTileMenuItem('Description')}>
              {description}
            </Text>
          )}
        </div>
      </Tag>
    );
  },
);

export * from './types';
