import './BannerBarItem.css';

import { Button } from '@consta/uikit/Button';
import { IconForward } from '@consta/uikit/IconForward';
import { cnMixCard } from '@consta/uikit/MixCard';
import { Text } from '@consta/uikit/Text';
import React, { forwardRef } from 'react';

import { cn } from '##/utils/bem';

import { BannerBarItemComponent, BannerBarItemProps } from '../types';

const cnBannerBarItem = cn('BannerBarItem');

const BannerBarItemRender = (
  props: BannerBarItemProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const {
    label,
    description,
    image,
    onClick,
    as: Tag = 'div',
    className,
    view = 'vertical',
    ...otherProps
  } = props;

  return (
    <Tag
      className={cnBannerBarItem({ view }, [
        className,
        cnMixCard({
          verticalSpace: 'l',
          horizontalSpace: 'l',
          shadow: true,
          form: 'round',
        }),
      ])}
      ref={ref}
      {...otherProps}
    >
      {image && (
        <div className={cnBannerBarItem('ImageContainer')}>
          <img className={cnBannerBarItem('Image')} alt={label} src={image} />
        </div>
      )}
      <div className={cnBannerBarItem('Content')}>
        <Text
          weight="semibold"
          size="m"
          lineHeight="m"
          className={cnBannerBarItem('Title')}
        >
          {label}
        </Text>
        {description && (
          <Text
            className={cnBannerBarItem('Description')}
            size="m"
            lineHeight="m"
          >
            {description}
          </Text>
        )}
        <Button
          className={cnBannerBarItem('Button')}
          label="Подробнее"
          iconRight={IconForward}
          size="s"
          view="clear"
          onClick={onClick}
        />
      </div>
    </Tag>
  );
};

export const BannerBarItem = forwardRef(
  BannerBarItemRender,
) as BannerBarItemComponent;
