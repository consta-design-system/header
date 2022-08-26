/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './SelectMenu.css';

import { IconSelect } from '@consta/uikit/IconSelect';
import { Text } from '@consta/uikit/Text';
import { useFlag } from '@consta/uikit/useFlag';
import { useForkRef } from '@consta/uikit/useForkRef';
import { useMutableRef } from '@consta/uikit/useMutableRef';
import React, { forwardRef, useCallback, useRef } from 'react';

import { AnimatedContextMenu } from '##/components/AnimatedContextMenu/AnimatedContextMenu';
import { cn } from '##/utils/bem';

import { withDefaultGetters } from './helpers';
import {
  SelectMenuComponent,
  SelectMenuDefaultItem,
  SelectMenuProps,
} from './types';

export const cnSelectMenu = cn('SelectMenu');

const SelectMenuRender = (
  props: SelectMenuProps,
  componentRef: React.Ref<HTMLDivElement>,
) => {
  const {
    items,
    className,
    getItemHref,
    getItemLabel,
    getItemOnClick,
    getItemTarget,
    onItemClick,
    label,
    onClick: onClickProp,
    getItemSubMenu,
    style,
    ...otherProps
  } = withDefaultGetters(props);

  const [open, setOpen] = useFlag();

  const ref = useRef<HTMLDivElement>(null);

  const getItemHrefRef = useMutableRef(getItemHref);
  const getItemTargetRef = useMutableRef(getItemTarget);
  const onClickRef = useMutableRef(onClickProp);

  const getItemAs = useCallback((item: SelectMenuDefaultItem) => {
    if (getItemHrefRef.current(item)) {
      return 'a';
    }
    return 'span';
  }, []);

  const getItemHTMLAttributes = useCallback((item: SelectMenuDefaultItem) => {
    const href = getItemHrefRef.current(item);
    const target = getItemTargetRef.current(item);

    return {
      ...(href && { href: getItemHrefRef.current(item) }),
      ...(target && { href: getItemTargetRef.current(item) }),
    };
  }, []);

  const onClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    onClickRef.current?.(e);
    setOpen.toogle();
  }, []);

  return (
    <>
      <div
        {...otherProps}
        className={cnSelectMenu(null, [className])}
        ref={useForkRef([ref, componentRef])}
        onClick={onClick}
        style={style}
      >
        <Text className={cnSelectMenu('Label')} size="s">
          {label}
        </Text>
        <span className={cnSelectMenu('ArrowBox', { open })}>
          <IconSelect size="xs" />
        </span>
      </div>
      {items && (
        <AnimatedContextMenu
          className={cnSelectMenu('Menu')}
          anchorRef={ref}
          isOpen={open}
          items={items}
          getLabel={getItemLabel}
          getItemOnClick={getItemOnClick}
          getItemAs={getItemAs}
          getItemHTMLAttributes={getItemHTMLAttributes}
          onClickOutside={setOpen.off}
          onItemClick={onItemClick}
          direction="rightStartDown"
          possibleDirections={[
            'downStartLeft',
            'upStartLeft',
            'downStartRight',
            'upStartRight',
          ]}
          getSubItems={getItemSubMenu}
          style={{
            zIndex:
              typeof style?.zIndex === 'number' ? style.zIndex + 1 : 'auto',
          }}
        />
      )}
    </>
  );
};

export const SelectMenu = forwardRef(SelectMenuRender) as SelectMenuComponent;

export * from './types';
