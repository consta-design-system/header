import './GlobalMenuGroup.css';

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
      <div className={cnGlobalMenuGroup('Content')}>
        {items.map((item, index) => {
          const label = getItemLabel(item);
          const onClick: React.MouseEventHandler = (e) => {
            getItemOnClick(item)?.(e);
            onItemClick?.({ e, item });
          };
          return (
            <GlobalMenuItem
              key={cnGlobalMenuGroup('Item', { label, index })}
              as={getItemAs(item)}
              label={label}
              className={cnGlobalMenuGroup('Item')}
              onClick={onClick}
              {...(getItemAttributes(item) ?? {})}
            />
          );
        })}
      </div>
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
