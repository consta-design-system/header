import './MegaMenuNavBar.css';

import { List, ListBox } from '@consta/uikit/ListCanary';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import React, { forwardRef } from 'react';

import { getItemClick } from '##/helpers/getItemClick';
import { cn } from '##/utils/bem';

import { withDefaultGetters } from './helper';
import { MegaMenuNavBarComponent, MegaMenuNavBarProps } from './types';

const cnMegaMenuNavBar = cn('MegaMenuNavBar');

const MegaMenuNavBarRender = (
  props: MegaMenuNavBarProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const {
    items,
    onItemClick,
    getItemActive,
    getItemIconLeft,
    getItemIconRight,
    getItemLabel,
    getItemOnClick: getItemOnClickProp,
    getItemAs,
    getItemAttributes,
    className,
    ...otherProps
  } = withDefaultGetters(props);

  return (
    <ListBox
      ref={ref}
      className={cnMegaMenuNavBar(null, [
        className,
        cnMixSpace({
          pV: '2xl',
        }),
      ])}
      {...otherProps}
    >
      <List
        items={items}
        size="m"
        getItemLabel={getItemLabel}
        getItemActive={getItemActive}
        getItemLeftIcon={getItemIconLeft}
        getItemRightIcon={getItemIconRight}
        getItemOnClick={(item) =>
          getItemClick(item, getItemOnClickProp, onItemClick)
        }
        getItemAs={getItemAs}
        itemSpase={{ pV: 's', pH: 'l' }}
        getItemAttributes={getItemAttributes}
        getItemAdditionalClassName={(item) =>
          cnMegaMenuNavBar('Item', { active: getItemActive(item) })
        }
      />
    </ListBox>
  );
};

export const MegaMenuNavBar = forwardRef(
  MegaMenuNavBarRender,
) as MegaMenuNavBarComponent;
