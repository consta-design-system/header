import './NavbarRailItem.css';

import { forwardRefWithAs } from '@consta/uikit/__internal__/src/utils/types/PropsWithAsAttributes';
import { Badge } from '@consta/uikit/Badge';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import { withTooltip } from '@consta/uikit/withTooltip';
import React from 'react';

import { cn } from '##/utils/bem';

import {
  defaultNavbarPropForm,
  defaultNavbarPropSize,
  NavbarRailItemProps,
} from '../types';

const cnNavbarItem = cn('NavbarRailItem');

const spaceMap = {
  m: { pV: 's', pH: 'm', mB: '2xs' },
  s: { pV: 'xs', pH: 'm', mB: '2xs' },
} as const;

const bageSizeMap = {
  s: 'xs',
  m: 's',
} as const;

const textSpaceMap = {
  m: { mT: 'xs' },
  s: { mT: '2xs' },
} as const;

const Item = forwardRefWithAs<NavbarRailItemProps, 'div'>((props, ref) => {
  const {
    size = defaultNavbarPropSize,
    icon: Icon,
    status,
    form = defaultNavbarPropForm,
    active,
    label,
    as = 'div',
    className,
    ...otherProps
  } = props;

  const Tag = as as string;

  return (
    <Tag
      {...otherProps}
      ref={ref}
      className={cnNavbarItem({ size, form, active }, [
        cnMixSpace(spaceMap[size]),
        className,
      ])}
    >
      <div className={cnNavbarItem('IconWrapper')}>
        {Icon && <Icon size={size} />}
        {status && (
          <Badge
            className={cnNavbarItem('Badge')}
            size={bageSizeMap[size]}
            status={status}
            minified
          />
        )}
      </div>
      {label && (
        <Text
          className={cnNavbarItem('Label', [cnMixSpace(textSpaceMap[size])])}
          align="center"
          size={size}
          view="primary"
          lineHeight="m"
        >
          {label}
        </Text>
      )}
    </Tag>
  );
});

export const NavbarRailItem = withTooltip({
  direction: 'rightCenter',
  mode: 'mouseover',
  possibleDirections: [
    'rightCenter',
    'rightDown',
    'rightUp',
    'rightStartDown',
    'rightStartUp',
  ],
  spareDirection: 'rightCenter',
})(Item);
