import './VerticalMenuLevel.css';

import { fabricIndex } from '@consta/uikit/__internal__/src/utils/fabricIndex';
import { getGroups } from '@consta/uikit/__internal__/src/utils/getGroups';
import { Button } from '@consta/uikit/Button';
import { IconArrowLeft } from '@consta/uikit/IconArrowLeft';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import React, { forwardRef } from 'react';

import { cn } from '##/utils/bem';

import { VerticalMenuLevelComponent } from '../types';
import { VerticalMenuItem } from '../VerticalMenuItem/VerticalMenuItem';

export const cnVerticalMenuLevel = cn('VerticalMenuLevel');

export const VerticalMenuLevel: VerticalMenuLevelComponent = forwardRef(
  (props, ref) => {
    const {
      items,
      className,
      getItemActive,
      getItemHref,
      getItemLabel,
      getItemOnClick,
      getItemTarget,
      getItemSubMenu,
      addLevel,
      removeLevel,
      label: levelLabel,
      header,
      getItemGroup,
      id,
      footer,
      ...otherProps
    } = props;

    const groups = getGroups(
      items,
      getItemGroup,
      undefined,
      undefined,
      undefined,
    );
    const getIndex = fabricIndex(-1);

    return (
      <div
        {...otherProps}
        ref={ref}
        className={cnVerticalMenuLevel(null, [className])}
      >
        {levelLabel && (
          <div
            className={cnVerticalMenuLevel('Label', [
              cnMixSpace({ pV: 's', pH: 'xl' }),
            ])}
          >
            <Button
              iconLeft={IconArrowLeft}
              view="clear"
              size="s"
              onClick={removeLevel}
            />
            <Text className={cnMixSpace({ mL: 's' })} truncate>
              {levelLabel}
            </Text>
          </div>
        )}
        {header && (
          <div className={cnVerticalMenuLevel('Header')}>{header}</div>
        )}
        <nav className={cnVerticalMenuLevel('Nav')}>
          {groups.map((group, groupIndex) => {
            return (
              <>
                {groupIndex ? (
                  <div
                    className={cnVerticalMenuLevel('Divider', [
                      cnMixSpace({ mV: 's', mH: 'xl' }),
                    ])}
                  />
                ) : undefined}
                {group.items.map((item, index) => {
                  const levelId = getIndex();
                  const subMenu = getItemSubMenu(item);
                  const withSubMenu = (subMenu && subMenu.length > 0) || false;
                  const itemClick = getItemOnClick(item);
                  const label = getItemLabel(item);
                  const onClick = withSubMenu
                    ? (e: React.MouseEvent<Element, MouseEvent>) => {
                        itemClick?.(e);
                        subMenu &&
                          addLevel({
                            items: subMenu,
                            label,
                            id: `${id}-${levelId}`,
                          });
                      }
                    : itemClick;
                  return (
                    <VerticalMenuItem
                      key={cnVerticalMenuLevel('Item', { groupIndex, index })}
                      label={label}
                      href={getItemHref(item)}
                      active={getItemActive(item)}
                      onClick={onClick}
                      target={getItemTarget(item)}
                      withSubMenu={withSubMenu}
                      className={cnMixSpace({ pV: 's', pH: 'xl' })}
                    />
                  );
                })}
              </>
            );
          })}
        </nav>
        {footer && (
          <div className={cnVerticalMenuLevel('Footer')}>
            <div
              className={cnVerticalMenuLevel('Divider', [
                cnMixSpace({ mV: 's', mH: 'xl' }),
              ])}
            />
            {footer}
          </div>
        )}
      </div>
    );
  },
);
