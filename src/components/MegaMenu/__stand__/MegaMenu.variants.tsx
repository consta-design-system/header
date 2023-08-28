import { useBoolean, useNumber, useSelect, useText } from '@consta/stand';
import { Button } from '@consta/uikit/Button';
import { useFlag } from '@consta/uikit/useFlag';
import React, { useMemo } from 'react';

import { cn } from '##/utils/bem';

import { banners, getItems, getSubMenu } from '../__mocks__/mock.data';
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
          onItemClick={(item) => console.log(item)}
          items={items}
          banners={
            withBanners && contentType !== 'onlynav' ? banners : undefined
          }
        />
      </MegaMenuBox>
      <Button label="Открыть" onClick={setIsOpen.toggle} />
    </div>
  );
};

export default Variants;
