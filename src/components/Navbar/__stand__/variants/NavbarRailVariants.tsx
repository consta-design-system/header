import { IconAlert } from '@consta/icons/IconAlert';
import { IconChatFilled } from '@consta/icons/IconChatFilled';
import { IconDataNull } from '@consta/icons/IconDataNull';
import { IconDocFilled } from '@consta/icons/IconDocFilled';
import { IconSendMessage } from '@consta/icons/IconSendMessage';
import { IconTrash } from '@consta/icons/IconTrash';
import { IconWarning } from '@consta/icons/IconWarning';
import { useBoolean, useSelect } from '@consta/stand';
import { useDefaultGetter } from '@consta/uikit/__internal__/src/utils/stand';
import React from 'react';

import {
  defaultNavbarPropForm,
  defaultNavbarPropSize,
  DefaultNavbarRailItem,
  navbarPropForm,
  navbarPropSize,
  NavbarRail,
} from '../..';

const menu: DefaultNavbarRailItem[] = [
  {
    label: 'Входящие',
    icon: IconDataNull,
    status: 'warning',
    active: true,
  },
  {
    label: 'Отправленные',
    icon: IconSendMessage,
  },
  {
    label: 'Черновики',
    icon: IconDocFilled,
  },
  {
    label: 'Удаленные',
    icon: IconTrash,
  },
  {
    label: 'Спам',
    icon: IconWarning,

    status: 'warning',
  },
  {
    label: 'Беседы',
    icon: IconChatFilled,
  },
  {
    label: 'Система',
    icon: IconAlert,
  },
];

const mapWidth = {
  s: 48,
  m: 56,
} as const;

export const NavbarRailVariants = () => {
  const size = useSelect('size', navbarPropSize, defaultNavbarPropSize) || 'm';
  const form = useSelect('form', navbarPropForm, defaultNavbarPropForm);
  const getItemStatus = useDefaultGetter('status');
  const getItemlabel = useDefaultGetter('label');
  const getItemTooltip = useBoolean('tooltip', true)
    ? (item: DefaultNavbarRailItem) => item.label
    : undefined;

  return (
    <div style={{ height: '100%', width: '100%', overflow: 'auto' }}>
      <NavbarRail
        style={{ width: getItemlabel ? mapWidth[size] : 160 }}
        getItemLabel={getItemlabel}
        form={form}
        items={menu}
        getItemStatus={getItemStatus}
        getItemTooltip={getItemTooltip}
        size={size}
      />
    </div>
  );
};
