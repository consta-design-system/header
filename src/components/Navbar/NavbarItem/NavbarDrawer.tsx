import { getGroups } from '@consta/uikit/__internal__/src/utils/getGroups';
import { renderHeader } from '@consta/uikit/ListCanary';
import React, { forwardRef, useMemo } from 'react';

import { withDefaultGetters } from '../helpers';
import {
  defaultNavbarPropForm,
  defaultNavbarPropSize,
  NavbarComponent,
  NavbarProps,
} from '../types';
import { NavbarItem } from '.';

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
    getItemAdditionalClassName,
    getGroupKey,
    getGroupLabel,
    getGroupRightSide,
    getGroupAdditionalClassName,
    size = defaultNavbarPropSize,
    form = defaultNavbarPropForm,
    getItemSubMenu,
    sortGroup,
    className,
    getItemStatus,
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
              { pV: 'xs', mH: 'm', mB: '2xs' },
              undefined,
              getGroupAdditionalClassName &&
                group.group &&
                getGroupAdditionalClassName(group.group),
            )}
            {group.items.map((item, index) => {
              return (
                <React.Fragment key={`${group.key}-${index}`}>
                  <NavbarItem
                    size={size}
                    item={item}
                    level={0}
                    onItemClick={onItemClick}
                    getItemLabel={getItemLabel}
                    getItemActive={getItemActive}
                    getItemAdditionalClassName={getItemAdditionalClassName}
                    getItemAs={getItemAs}
                    getItemAttributes={getItemAttributes}
                    getItemIcon={getItemIcon}
                    getItemRef={getItemRef}
                    getItemRightSide={getItemRightSide}
                    getItemSubMenu={getItemSubMenu}
                    form={form}
                    getItemStatus={getItemStatus}
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

export const Navbar = forwardRef(NavbarRender) as NavbarComponent;
