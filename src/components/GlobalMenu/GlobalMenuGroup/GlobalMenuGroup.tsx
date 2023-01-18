import './GlobalMenuGroup.css';

import { List } from '@consta/uikit/__internal__/src/components/ListCanary';
import { Button } from '@consta/uikit/Button';
import { IconArrowDown } from '@consta/uikit/IconArrowDown';
import { Text } from '@consta/uikit/Text';
import { useFlag } from '@consta/uikit/useFlag';
import React, { forwardRef, useMemo } from 'react';

import { cn } from '##/utils/bem';

import { GlobalMenuItem } from '../GlobalMenuItem';
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
    getItemOnClick,
    getItemGroupId,
    className,
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
      className={cnGlobalMenuGroup(null, [className])}
      {...otherProps}
    >
      {title && (
        <Text size="m" lineHeight="m" weight="bold">
          {title}
        </Text>
      )}
      <List
        className={cnGlobalMenuGroup('Content')}
        items={items}
        size="m"
        getItemKey={getItemLabel}
        getItemLabel={getItemLabel}
        renderItem={(item) => {
          const onClick: React.MouseEventHandler = (e) => {
            getItemOnClick(item)?.(e);
            onItemClick?.({ e, item });
          };
          return (
            <GlobalMenuItem
              as={getItemAs(item)}
              label={getItemLabel(item)}
              className={cnGlobalMenuGroup('Item')}
              onClick={onClick}
              {...(getItemAttributes(item) ?? {})}
            />
          );
        }}
      />
      {maxElements && maxElements < itemsProp.length && (
        <Button
          label={showList ? hideButtonText : showButtonText}
          size="s"
          view="clear"
          onClick={setShowList.toogle}
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
