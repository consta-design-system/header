import { IconAlert } from '@consta/icons/IconAlert';
import { IconChatFilled } from '@consta/icons/IconChatFilled';
import { IconDataNull } from '@consta/icons/IconDataNull';
import { IconDocFilled } from '@consta/icons/IconDocFilled';
import { IconSendMessage } from '@consta/icons/IconSendMessage';
import { IconTrash } from '@consta/icons/IconTrash';
import { IconWarning } from '@consta/icons/IconWarning';
import { Example } from '@consta/stand';
import React from 'react';

import { DefaultNavbarRailItem, NavbarRail } from '##/components/NavbarCanary';

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
    label: 'Пункт меню 3',
    icon: IconAlert,
  },
];

const onItemClick = (item: DefaultNavbarRailItem) => alert(item.label);

export const NavbarRailExample = () => (
  <Example col={1}>
    <NavbarRail style={{ width: 200 }} items={menu} onItemClick={onItemClick} />
  </Example>
);

const getItemLabel = () => undefined;
const getItemTooltip = (item: DefaultNavbarRailItem) => item.label;

export const NavbarRailTooltipExample = () => (
  <Example col={1}>
    <NavbarRail
      style={{ width: 56 }}
      items={menu}
      getItemLabel={getItemLabel}
      getItemTooltip={getItemTooltip}
      onItemClick={onItemClick}
    />
  </Example>
);
