import './MegaMenuGlobalGroup.css';

import { IconArrowDown } from '@consta/icons/IconArrowDown';
import { Button } from '@consta/uikit/Button';
import { List, ListBox } from '@consta/uikit/ListCanary';
import { Text } from '@consta/uikit/Text';
import { useFlag } from '@consta/uikit/useFlag';
import React, { forwardRef, useMemo } from 'react';

import { getItemClick } from '##/helpers/getItemClick';
import { cn } from '##/utils/bem';

import {
  MegaMenuGlobalGroupComponent,
  MegaMenuGlobalGroupProps,
} from '../types';

const cnMegaMenuGlobalGroup = cn('MegaMenuGlobalGroup');

const MegaMenuGlobalGroupRender = (
  props: MegaMenuGlobalGroupProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const {
    items: itemsProp,
    title,
    getItemAs,
    getItemAttributes,
    getItemLabel,
    getItemOnClick,
    getItemGroupId,
    className,
    onClick,
    maxElements: maxElementsProp,
    showButtonText,
    hideButtonText,
    onItemClick,
    ...otherProps
  } = props;
  const [showList, setShowList] = useFlag();

  const maxElements = (maxElementsProp ?? 0) > 0 ? maxElementsProp : undefined;

  const items = useMemo(() => {
    if (!maxElements) {
      return itemsProp;
    }
    return showList ? itemsProp : itemsProp.slice(0, maxElements);
  }, [showList, maxElements, itemsProp]);

  return (
    <div
      ref={ref}
      className={cnMegaMenuGlobalGroup(null, [className])}
      {...otherProps}
    >
      {title && (
        <Text
          onClick={onClick}
          className={cnMegaMenuGlobalGroup('Title', { clickable: !!onClick })}
          size="m"
          lineHeight="m"
          weight="bold"
        >
          {title}
        </Text>
      )}
      <ListBox className={cnMegaMenuGlobalGroup('Content')}>
        <List
          items={items}
          size="m"
          itemSpase={{ p: 0 }}
          getItemLabel={getItemLabel}
          getItemAs={getItemAs}
          getItemAttributes={getItemAttributes}
          getItemOnClick={(item) =>
            getItemClick(item, getItemOnClick, onItemClick)
          }
          getItemAdditionalClassName={() => cnMegaMenuGlobalGroup('Item')}
        />
      </ListBox>
      {maxElements && maxElements < itemsProp.length && (
        <Button
          label={showList ? hideButtonText : showButtonText}
          size="s"
          view="clear"
          onClick={setShowList.toggle}
          iconRight={IconArrowDown}
          className={cnMegaMenuGlobalGroup('Button', { open: showList })}
        />
      )}
    </div>
  );
};

export const MegaMenuGlobalGroup = forwardRef(
  MegaMenuGlobalGroupRender,
) as MegaMenuGlobalGroupComponent;
