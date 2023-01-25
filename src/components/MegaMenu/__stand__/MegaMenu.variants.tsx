import './MegaMenu.variants.css';

import { useBoolean, useNumber, useSelect, useText } from '@consta/stand';
import { Button } from '@consta/uikit/Button';
import { useFlag } from '@consta/uikit/useFlag';
import React, { useMemo } from 'react';

import { items as banners } from '##/components/BannerBar/__mocks__/mock.data';
import { cn } from '##/utils/bem';

import { getItems, getSubMenu } from '../__mocks__/mock.data';
import { MegaMenu } from '../MegaMenu';
import { MegaMenuBox } from '../MegaMenuBox';

const cnMegaMenuVariants = cn('MegaMenuVariants');

const Variants = () => {
  const contentType = useSelect(
    'contentType',
    ['onlynav', 'onlymenu', 'full'],
    'full',
  );
  const withBanners = useBoolean('withBanners', true);
  const bannerPosition = useSelect(
    'bannerPosition',
    ['right', 'bottom'],
    'right',
  );
  const menuMaxElements = useNumber('menuMaxElements', 4);
  const menuHideButtonText = useText('menuHideButtonText', 'Скрыть');
  const menuShowButtonText = useText('menuShowButtonText', 'Ещё');
  const menuTitle = useText('menuTitle');

  const [isOpen, setIsOpen] = useFlag();

  const items = useMemo(() => {
    if (contentType === 'onlynav') {
      return getItems(false);
    }
    if (contentType === 'onlymenu') {
      return getSubMenu();
    }
    return getItems(true);
  }, [contentType]);

  return (
    <div className={cnMegaMenuVariants()}>
      <MegaMenuBox isOpen={isOpen} onClickOutside={setIsOpen.off}>
        <MegaMenu
          bannerPosition={bannerPosition}
          menuMaxElements={menuMaxElements}
          menuHideButtonText={menuHideButtonText}
          menuShowButtonText={menuShowButtonText}
          menuTitle={menuTitle}
          items={items}
          banners={
            withBanners && contentType !== 'onlynav' ? banners : undefined
          }
        />
      </MegaMenuBox>
      <Button label="Открыть" onClick={setIsOpen.toogle} />
    </div>
  );
};

export default Variants;
