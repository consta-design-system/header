import './NavbarItem.css';

import { classnames } from '@bem-react/classnames';
import { ListItem } from '@consta/uikit/ListCanary';
import { useComponentSize } from '@consta/uikit/useComponentSize';
import { useFlag } from '@consta/uikit/useFlag';
import React, { forwardRef, useRef } from 'react';

import { cn } from '##/utils/bem';

import {
  defaultNavbarPropSize,
  NavbarItemComponent,
  NavbarItemProps,
} from '../types';

const cnNavbarItem = cn('NavbarItem');

const NavbarItemRender = (
  props: NavbarItemProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const {
    size = defaultNavbarPropSize,
    item,
    getItemLabel,
    getItemActive,
    getItemAdditionalClassName,
    getItemAs,
    getItemAttributes,
    getItemIcon,
    getItemRef,
    getItemRightSide,
    getItemStatus,
    getItemSubMenu,
    onItemClick,
    className,
    level = 0,
  } = props;

  const [open] = useFlag();

  const subMenuRef = useRef<HTMLDivElement>(null);
  const { height } = useComponentSize(subMenuRef);

  const subItems = getItemSubMenu?.(item);

  return (
    <>
      <ListItem
        {...(getItemAttributes?.(item) || {})}
        label={getItemLabel(item)}
        size={size}
        onClick={
          onItemClick
            ? (e: React.MouseEvent) => onItemClick(item, { e })
            : undefined
        }
        leftIcon={getItemIcon?.(item)}
        rightSide={getItemRightSide?.(item)}
        as={getItemAs?.(item)}
        active={getItemActive?.(item)}
        ref={getItemRef?.(item)}
        status={getItemStatus?.(item)}
        className={classnames(className, getItemAdditionalClassName?.(item))}
      />
      {subItems?.length && (
        <div
          ref={subMenuRef}
          style={{
            ['navbar-item-submenu-max-height' as string]: `${height}px`,
          }}
          className={cnNavbarItem('SubMenu', { open })}
        >
          {subItems.map((item, index) => {
            return (
              <NavbarItem
                {...props}
                key={index}
                level={level + 1}
                item={item}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export const NavbarItem = forwardRef(NavbarItemRender) as NavbarItemComponent;
