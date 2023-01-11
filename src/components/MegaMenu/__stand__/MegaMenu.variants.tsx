import './MegaMenu.variants.css';

import { useBoolean, useNumber, useSelect, useText } from '@consta/stand';
import { Button } from '@consta/uikit/Button';
import { useFlag } from '@consta/uikit/useFlag';
import React, { useMemo } from 'react';

import { items as banners } from '##/components/BannerBar/__mocks__/mock.data';
import { cn } from '##/utils/bem';

import { getItems, getSubMenu } from '../__mocks__/mock.data';
import { MegaMenu } from '../MegaMenu';

const cnMegaMenuVariants = cn('MegaMenuVariants');

const Variants = () => {
  const contentType = useSelect(
    'contentType',
    ['onlynav', 'onlymenu', 'full'],
    'onlynav',
  );
  const withBanners = useBoolean('withBanners', false);
  const view = useSelect('view', ['vertical', 'horizontal'], 'vertical');
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
      <MegaMenu
        view={view}
        isOpen={isOpen}
        menuMaxElements={menuMaxElements}
        menuHideButtonText={menuHideButtonText}
        menuShowButtonText={menuShowButtonText}
        menuTitle={menuTitle}
        onClickOutside={setIsOpen.off}
        items={items}
        banners={withBanners ? banners : undefined}
      />
      <Button label="Открыть" onClick={setIsOpen.toogle} />
    </div>
  );
};

export default Variants;
