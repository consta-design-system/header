/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './SelectMenu.css';

import { IconSelect } from '@consta/icons/IconSelect';
import { ContextMenu } from '@consta/uikit/ContextMenu';
import { Text } from '@consta/uikit/Text';
import { useFlag } from '@consta/uikit/useFlag';
import { useForkRef } from '@consta/uikit/useForkRef';
import { useMutableRef } from '@consta/uikit/useMutableRef';
import React, { forwardRef, useCallback, useRef } from 'react';

import { getItemClick } from '##/helpers/getItemClick';
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

  const getItemAs = useCallback(
    (item: SelectMenuDefaultItem) =>
      getItemHrefRef.current(item) ? 'a' : 'span',
    [],
  );

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
    setOpen.toggle();
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
        <Text
          className={cnSelectMenu('Label')}
          size="s"
          view="primary"
          lineHeight="m"
        >
          {label}
        </Text>
        <span className={cnSelectMenu('ArrowBox', { open })}>
          <IconSelect size="xs" />
        </span>
      </div>
      {items && (
        <ContextMenu
          className={cnSelectMenu('Menu')}
          anchorRef={ref}
          isOpen={open}
          items={items}
          getItemLabel={getItemLabel}
          getItemAs={getItemAs}
          getItemAttributes={getItemHTMLAttributes}
          onClickOutside={setOpen.off}
          onItemClick={(item, { e }) =>
            getItemClick(item, getItemOnClick, onItemClick)(e)
          }
          direction="rightStartDown"
          possibleDirections={[
            'downStartLeft',
            'upStartLeft',
            'downStartRight',
            'upStartRight',
          ]}
          getItemSubMenu={getItemSubMenu}
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
