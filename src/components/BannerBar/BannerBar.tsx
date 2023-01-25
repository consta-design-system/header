import './BannerBar.css';

import React, { forwardRef } from 'react';

import { cn } from '##/utils/bem';

import { BannerBarItem } from './BannerBarItem';
import { withDefaultGetters } from './helpers';
import { BannerBarComponent, BannerBarProps } from './types';

const cnBannerBar = cn('BannerBar');

const BannerBarRender = (
  props: BannerBarProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const {
    items,
    getItemAs,
    getItemAttributes,
    getItemDescription,
    getItemImage,
    getItemLabel,
    getItemOnClick,
    onItemClick,
    className,
    view = 'vertical',
    ...otherProps
  } = withDefaultGetters(props);
  return (
    <div
      className={cnBannerBar({ view }, [className])}
      {...otherProps}
      ref={ref}
    >
      {items.map((item, index) => {
        const onClick: React.MouseEventHandler = (e) => {
          getItemOnClick(item)?.(e);
          onItemClick?.({ e, item });
        };

        return (
          <BannerBarItem
            key={cnBannerBar('Item', { index })}
            label={getItemLabel(item)}
            description={getItemDescription(item)}
            image={getItemImage(item)}
            as={getItemAs(item)}
            onClick={onClick}
            view={view}
            {...(getItemAttributes(item) ?? {})}
          />
        );
      })}
    </div>
  );
};

export const BannerBar = forwardRef(BannerBarRender) as BannerBarComponent;
