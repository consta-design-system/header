import './GlobalMenuGroup.css';

import { Button } from '@consta/uikit/Button';
import { IconArrowDown } from '@consta/uikit/IconArrowDown';
import { List, ListBox } from '@consta/uikit/ListCanary';
import { Text } from '@consta/uikit/Text';
import { useFlag } from '@consta/uikit/useFlag';
import React, { forwardRef, useMemo } from 'react';

import { cn } from '##/utils/bem';

import { GlobalMenuGroupComponent, GlobalMenuGroupProps } from '../types';

const cnGlobalMenuGroup = cn('GlobalMenuGroup');

const GlobalMenuGroupRender = (
  props: GlobalMenuGroupProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const {
    items: itemsProp,
    title,
    getItemAs,
    getItemAttributes,
    getItemLabel,
    getItemOnClick: getItemOnClickProp,
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

  type ITEM = (typeof itemsProp)[number];

  const maxElements = (maxElementsProp ?? 0) > 0 ? maxElementsProp : undefined;

  const items = useMemo(() => {
    if (!maxElements) {
      return itemsProp;
    }
    return showList ? itemsProp : itemsProp.slice(0, maxElements);
  }, [showList, maxElements, itemsProp]);

  const getItemOnClick = (item: ITEM) => {
    const onClick = getItemOnClickProp(item);
    if (onClick || onItemClick) {
      return (e: React.MouseEvent) => {
        onClick?.(e);
        onItemClick?.({ e, item });
      };
    }
    return undefined;
  };

  return (
    <div
      ref={ref}
      className={cnGlobalMenuGroup(null, [className])}
      {...otherProps}
    >
      {title && (
        <Text
          onClick={onClick}
          className={cnGlobalMenuGroup('Title', { clickable: !!onClick })}
          size="m"
          lineHeight="m"
          weight="bold"
        >
          {title}
        </Text>
      )}
      <ListBox className={cnGlobalMenuGroup('Content')}>
        <List
          items={items}
          size="m"
          itemSpase={{ p: 0 }}
          getItemLabel={getItemLabel}
          getItemAs={getItemAs}
          getItemAttributes={getItemAttributes}
          getItemOnClick={getItemOnClick}
          getItemAdditionalClassName={() => cnGlobalMenuGroup('Item')}
        />
      </ListBox>
      {maxElements && maxElements < itemsProp.length && (
        <Button
          label={showList ? hideButtonText : showButtonText}
          size="s"
          view="clear"
          onClick={setShowList.toggle}
          iconRight={IconArrowDown}
          className={cnGlobalMenuGroup('Button', { open: showList })}
        />
      )}
    </div>
  );
};

export const GlobalMenuGroup = forwardRef(
  GlobalMenuGroupRender,
) as GlobalMenuGroupComponent;
