import './GlobalMenu.css';

import { getGroups } from '@consta/uikit/__internal__/src/utils/getGroups';
import { Text } from '@consta/uikit/Text';
import React, { forwardRef, useMemo } from 'react';

import { cn } from '##/utils/bem';

import { GlobalMenuGroup } from './GlobalMenuGroup';
import { withDefaultGetters } from './helper';
import { GlobalMenuComponent, GlobalMenuProps } from './types';

const cnGlobalMenu = cn('GlobalMenu');
const noGroupKey = 'no-group';

const GlobalMenuRender = (
  props: GlobalMenuProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const {
    items,
    getItemAs,
    getItemAttributes,
    getItemGroupId,
    title,
    getItemLabel,
    columns = 3,
    getItemOnClick,
    getGroupKey,
    onItemClick,
    getGroupLabel,
    groups: groupsProp,
    showButtonText = 'Ещё',
    hideButtonText = 'Скрыть',
    maxElements,
    className,
    ...otherProps
  } = withDefaultGetters(props);

  const sortedGroups = useMemo(() => {
    const groups = getGroups(
      items,
      getItemGroupId,
      groupsProp,
      getGroupKey,
      undefined,
      noGroupKey,
    );
    const arr: Array<typeof groups> = [];
    groups.forEach((group, i) => {
      const index = i % columns;
      if (!arr[index]) {
        arr[index] = [];
      }
      arr[index].push(group);
    });
    return arr;
  }, [items, groupsProp, columns]);

  return (
    <div ref={ref} className={cnGlobalMenu(null, [className])} {...otherProps}>
      {title && (
        <Text
          weight="semibold"
          transform="uppercase"
          className={cnGlobalMenu('Title')}
          lineHeight="m"
          size="xl"
        >
          {title}
        </Text>
      )}
      <div
        style={{
          ['--global-menu-columns' as string]: columns,
        }}
        className={cnGlobalMenu('Content')}
      >
        {sortedGroups.map((groups, index) => (
          <div
            key={cnGlobalMenu('Column', { index })}
            className={cnGlobalMenu('Column')}
          >
            {groups.map((group, i) => (
              <GlobalMenuGroup
                title={group.group ? getGroupLabel(group.group) : undefined}
                key={cnGlobalMenu('Group', { index, i })}
                className={cnGlobalMenu('Group')}
                items={group.items}
                showButtonText={showButtonText}
                hideButtonText={hideButtonText}
                onItemClick={onItemClick}
                maxElements={maxElements}
                getItemAs={getItemAs}
                getItemAttributes={getItemAttributes}
                getItemGroupId={getItemGroupId}
                getItemLabel={getItemLabel}
                getItemOnClick={getItemOnClick}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const GlobalMenu = forwardRef(GlobalMenuRender) as GlobalMenuComponent;
