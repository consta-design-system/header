import { IconMeatball } from '@consta/icons/IconMeatball';
import { Button } from '@consta/uikit/Button';
import { ContextMenu } from '@consta/uikit/ContextMenu';
import { useFlag } from '@consta/uikit/useFlag';
import { useForkRef } from '@consta/uikit/useForkRef';
import { useMutableRef } from '@consta/uikit/useMutableRef';
import { withTooltip } from '@consta/uikit/withTooltip';
import React, { forwardRef, useEffect, useRef } from 'react';

import { getItemClick } from '##/helpers/getItemClick';

import { withDefaultGetters } from './helpers';
import {
  NotificationsActionsComponent,
  NotificationsActionsProps,
} from './types';

const ButtonWithTooltip = withTooltip()(Button);

const NotificationsActionsRender = (
  props: NotificationsActionsProps,
  ref: React.Ref<HTMLButtonElement>,
) => {
  const {
    items = [],
    className,
    children,
    mainButtonOnlyIcon,
    opened = false,
    onOpen: onOpenProp,
    getItemIcon,
    getItemLabel,
    getItemOnClick,
    onItemClick,
    ...otherProps
  } = withDefaultGetters(props);
  const buttonRef = useRef(null);

  const [visibleMenu, setVisibleMenu] = useFlag(opened);

  const onOpen = useMutableRef(onOpenProp);
  const menuRef = useForkRef([buttonRef, ref]);

  const elementZIndex =
    typeof props.style?.zIndex === 'number'
      ? props.style.zIndex + 1
      : undefined;

  useEffect(() => {
    setVisibleMenu[opened ? 'on' : 'off']();
  }, [opened]);

  useEffect(() => {
    onOpen.current?.(visibleMenu);
  }, [visibleMenu, onOpen]);

  if (items.length === 1 && !mainButtonOnlyIcon) {
    return (
      <Button
        {...otherProps}
        className={className}
        size="xs"
        view="clear"
        iconLeft={getItemIcon(items[0])}
        onClick={getItemClick(items[0], getItemOnClick, onItemClick)}
        label={getItemLabel(items[0])}
        ref={ref}
      />
    );
  }

  if (items.length === 1 && getItemIcon(items[0]) && mainButtonOnlyIcon) {
    return (
      <ButtonWithTooltip
        {...otherProps}
        className={className}
        size="xs"
        view="clear"
        iconLeft={getItemIcon(items[0])}
        onClick={getItemClick(items[0], getItemOnClick, onItemClick)}
        tooltipProps={{
          content: getItemLabel(items[0]),
        }}
        ref={ref}
      />
    );
  }

  return (
    <>
      <Button
        {...otherProps}
        className={className}
        size="xs"
        view="clear"
        iconLeft={IconMeatball}
        ref={menuRef}
        onClick={setVisibleMenu.toggle}
      />
      <ContextMenu
        isOpen={visibleMenu}
        items={items}
        getItemLabel={getItemLabel}
        onItemClick={(item, { e }) =>
          getItemClick(item, getItemOnClick, onItemClick)(e)
        }
        getItemKey={getItemLabel}
        getItemLeftIcon={getItemIcon}
        anchorRef={buttonRef}
        onClickOutside={setVisibleMenu.off}
        possibleDirections={['downStartRight', 'upStartRight']}
        direction="downStartRight"
        style={{ width: 280, zIndex: elementZIndex }}
      />
    </>
  );
};

export const NotificationsActions = forwardRef(
  NotificationsActionsRender,
) as NotificationsActionsComponent;
