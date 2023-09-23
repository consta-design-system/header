import './MegaMenuBannerBar.css';

import { cnMixSpace } from '@consta/uikit/MixSpace';
import React, { forwardRef } from 'react';

import { getItemClick } from '##/helpers/getItemClick';
import { cn } from '##/utils/bem';

import { withDefaultGetters } from './helpers';
import { MegaMenuBannerBarItem } from './MegaMenuBannerBarItem';
import { MegaMenuBannerBarComponent, MegaMenuBannerBarProps } from './types';

const cnMegaMenuBannerBar = cn('MegaMenuBannerBar');

const MegaMenuBannerBarRender = (
  props: MegaMenuBannerBarProps,
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
      className={cnMegaMenuBannerBar({ view }, [
        className,
        cnMixSpace({
          pV: view === 'horizontal' ? 'xl' : '2xl',
          pH: view === 'horizontal' ? '2xl' : 'xl',
        }),
      ])}
      {...otherProps}
      ref={ref}
    >
      {items.map((item, index) => (
        <MegaMenuBannerBarItem
          {...(getItemAttributes(item) ?? {})}
          key={cnMegaMenuBannerBar('Item', { index })}
          label={getItemLabel(item)}
          description={getItemDescription(item)}
          image={getItemImage(item)}
          onClick={getItemClick(item, getItemOnClick, onItemClick)}
          view={view}
          as={getItemAs(item)}
        />
      ))}
    </div>
  );
};

export const MegaMenuBannerBar = forwardRef(
  MegaMenuBannerBarRender,
) as MegaMenuBannerBarComponent;
