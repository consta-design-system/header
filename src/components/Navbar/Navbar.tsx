import { getGroups } from '@consta/uikit/__internal__/src/utils/getGroups';
import { ListItem, renderHeader } from '@consta/uikit/ListCanary';
import React, { forwardRef, useMemo } from 'react';

import { withDefaultGetters } from './helpers';
import { defaultNavbarPropSize, NavbarComponent, NavbarProps } from './types';

const NavbarRender = (props: NavbarProps, ref: React.Ref<HTMLDivElement>) => {
  const {
    items,
    onItemClick,
    groups: groupsProp,
    getItemLabel,
    getItemIcon,
    getItemRightSide,
    getItemAs,
    getItemAttributes,
    getItemGroupKey,
    getItemActive,
    getItemRef,
    getItemStatus,
    getItemAdditionalClassName,
    getGroupKey,
    getGroupLabel,
    getGroupRightSide,
    getGroupAdditionalClassName,
    size = defaultNavbarPropSize,
    sortGroup,
    className,
    ...otherProps
  } = withDefaultGetters(props);

  const groups = useMemo(
    () => getGroups(items, getItemGroupKey, groupsProp, getGroupKey, sortGroup),
    [groupsProp, items],
  );

  return (
    <div {...otherProps} ref={ref} className={className}>
      {groups.map((group, groupIndex) => {
        return (
          <React.Fragment key={group.key}>
            {renderHeader(
              group.group && getGroupLabel(group.group),
              groupIndex === 0,
              size,
              group.group && getGroupRightSide(group.group),
              undefined,
              undefined,
              getGroupAdditionalClassName &&
                group.group &&
                getGroupAdditionalClassName(group.group),
            )}
            {group.items.map((item, index) => {
              return (
                <React.Fragment key={`${group.key}-${index}`}>
                  <ListItem
                    {...(getItemAttributes?.(item) || {})}
                    label={getItemLabel(item)}
                    size={size}
                    onClick={
                      onItemClick
                        ? (e: React.MouseEvent) => onItemClick(item, { e })
                        : undefined
                    }
                    leftIcon={getItemIcon(item)}
                    rightSide={getItemRightSide(item)}
                    as={getItemAs?.(item)}
                    active={getItemActive(item)}
                    ref={getItemRef?.(item)}
                    status={getItemStatus(item)}
                    className={getItemAdditionalClassName?.(item)}
                  />
                </React.Fragment>
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export const SnackBar = forwardRef(NavbarRender) as NavbarComponent;
