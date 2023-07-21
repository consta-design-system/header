import './MegaMenuBannerBarItem.css';

import { IconForward } from '@consta/icons/IconForward';
import { Button } from '@consta/uikit/Button';
import { cnMixCard } from '@consta/uikit/MixCard';
import { Text } from '@consta/uikit/Text';
import React, { forwardRef } from 'react';

import { cn } from '##/utils/bem';

import {
  MegaMenuBannerBarItemComponent,
  MegaMenuBannerBarItemProps,
} from '../types';

const cnMegaMenuBannerBarItem = cn('MegaMenuBannerBarItem');

const MegaMenuBannerBarItemRender = (
  props: MegaMenuBannerBarItemProps,
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
      className={cnMegaMenuBannerBarItem({ view }, [
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
        <div className={cnMegaMenuBannerBarItem('ImageContainer')}>
          <img
            className={cnMegaMenuBannerBarItem('Image')}
            alt={label}
            src={image}
          />
        </div>
      )}
      <div className={cnMegaMenuBannerBarItem('Content')}>
        <Text
          weight="semibold"
          size="m"
          lineHeight="m"
          className={cnMegaMenuBannerBarItem('Title')}
        >
          {label}
        </Text>
        {description && (
          <Text
            className={cnMegaMenuBannerBarItem('Description')}
            size="m"
            lineHeight="m"
          >
            {description}
          </Text>
        )}
        <Button
          className={cnMegaMenuBannerBarItem('Button')}
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

export const MegaMenuBannerBarItem = forwardRef(
  MegaMenuBannerBarItemRender,
) as MegaMenuBannerBarItemComponent;
