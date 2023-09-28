import './NavbarItem.css';

import { Badge } from '@consta/uikit/Badge';
import { ListItem } from '@consta/uikit/ListCanary';
import { useFlag } from '@consta/uikit/useFlag';
import { useForkRef } from '@consta/uikit/useForkRef';
import React, { forwardRef } from 'react';

import { cn } from '##/utils/bem';

import { NavbarArrow } from '../NavbarArrow';
import {
  defaultNavbarPropSize,
  NavbarItemComponent,
  NavbarItemProps,
} from '../types';

const cnNavbarItem = cn('NavbarItem');

const spaceMap = {
  m: { pV: 's', pH: 'm', mB: '2xs' },
  s: { pV: 'xs', pH: 'm', mB: '2xs' },
} as const;

const mapLevelSpace = {
  m: '2xl',
  s: 'xl',
} as const;

const bageSizeMap = {
  s: 'xs',
  m: 's',
} as const;

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
    getItemSubMenu,
    onItemClick,
    className,
    getItemStatus,
    level = 0,
    form,
  } = props;

  const [open, setOpen] = useFlag();
  const subItems = getItemSubMenu?.(item);
  const rightSide = getItemRightSide?.(item);
  const active = getItemActive?.(item);
  const status = getItemStatus?.(item);

  return (
    <>
      <ListItem
        {...(getItemAttributes?.(item) || {})}
        label={getItemLabel(item)}
        size={size}
        onClick={(e: React.MouseEvent) => {
          subItems?.length && setOpen.toggle();
          onItemClick?.(item, { e });
        }}
        leftIcon={getItemIcon?.(item)}
        iconSize={size}
        rightSide={[
          ...(Array.isArray(rightSide) ? rightSide : [rightSide]),
          status ? (
            <Badge size={bageSizeMap[size]} status={status} minified />
          ) : undefined,
          subItems?.length ? (
            <NavbarArrow open={open} onClick={setOpen.toggle} />
          ) : undefined,
        ]}
        as={getItemAs?.(item)}
        active={active}
        ref={useForkRef([getItemRef?.(item), ref])}
        className={cnNavbarItem({ form, active }, [
          className,
          getItemAdditionalClassName?.(item),
        ])}
        space={spaceMap[size]}
        style={{
          ['--navbar-item-level' as string]: level,
          ['--navbar-item-ph' as string]: `var(--space-${spaceMap[size].pH})`,
          ['--navbar-item-level-space' as string]: `var(--space-${mapLevelSpace[size]})`,
        }}
      />
      {open &&
        subItems?.map((item, index) => (
          <NavbarItem {...props} key={index} level={level + 1} item={item} />
        ))}
    </>
  );
};

export const NavbarItem = forwardRef(NavbarItemRender) as NavbarItemComponent;
