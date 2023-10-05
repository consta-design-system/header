import { IconAlert } from '@consta/icons/IconAlert';
import { IconBag } from '@consta/icons/IconBag';
import { IconChatFilled } from '@consta/icons/IconChatFilled';
import { IconDataNull } from '@consta/icons/IconDataNull';
import { IconDocFilled } from '@consta/icons/IconDocFilled';
import { IconSendMessage } from '@consta/icons/IconSendMessage';
import { IconSun } from '@consta/icons/IconSun';
import { IconTrash } from '@consta/icons/IconTrash';
import { IconWarning } from '@consta/icons/IconWarning';
import { useBoolean, useSelect } from '@consta/stand';
import { useDefaultGetter } from '@consta/uikit/__internal__/src/utils/stand';
import { Text } from '@consta/uikit/Text';
import React from 'react';

import {
  DefaultNavbarGroup,
  DefaultNavbarItem,
  defaultNavbarPropForm,
  defaultNavbarPropSize,
  Navbar,
  navbarPropForm,
  navbarPropSize,
} from '../..';

type Item = Omit<DefaultNavbarItem, 'subMenu'> & {
  counter?: number;
  subMenu?: Item[];
};

const menu: Item[] = [
  {
    label: 'Входящие',
    icon: IconDataNull,
    status: 'warning',
    counter: 100,
    subMenu: [
      { label: 'Работа', icon: IconBag, counter: 20 },
      { label: 'Личное', icon: IconSun, counter: 30 },
      { label: 'Прочее', icon: IconDocFilled, counter: 50 },
    ],
    groupId: 1,
    active: true,
  },
  {
    label: 'Отправленные',
    icon: IconSendMessage,
    groupId: 1,
  },
  {
    label: 'Черновики',
    icon: IconDocFilled,
    groupId: 1,
  },
  {
    label: 'Удаленные',
    icon: IconTrash,
    groupId: 1,
  },
  {
    label: 'Спам',
    icon: IconWarning,
    groupId: 1,
    status: 'warning',
  },
  {
    groupId: 2,
    label: 'Беседы',
    icon: IconChatFilled,
    subMenu: [{ label: 'Важные' }, { label: 'Все' }],
  },
  {
    label: 'Система',
    groupId: 3,
    icon: IconAlert,
    subMenu: [
      { label: 'Пункт меню 3-1', subMenu: [{ label: 'Пункт меню 3-1-1' }] },
      { label: 'Пункт меню 3-2', subMenu: [{ label: 'Пункт меню 3-2-1' }] },
      {
        label: 'Пункт меню 3-3',
        subMenu: [
          { label: 'Пункт меню 3-1', subMenu: [{ label: 'Пункт меню 3-1-1' }] },
          { label: 'Пункт меню 3-2', subMenu: [{ label: 'Пункт меню 3-2-1' }] },
          {
            label: 'Пункт меню 3-3',
            subMenu: [
              {
                label: 'Пункт меню 3-3-1',
                subMenu: [{ label: 'Пункт меню 3-3-1-1' }],
              },
              {
                label: 'Пункт меню 3-3-2',
                subMenu: [{ label: 'Пункт меню 3-3-2-1' }],
              },
              {
                label: 'Пункт меню 3-3-3',
                subMenu: [{ label: 'Пункт меню 3-3-3-1' }],
              },
            ],
          },
        ],
      },
    ],
  },
];

const groups: DefaultNavbarGroup[] = [
  {
    id: 1,
    rightSide: 'ddd',
  },
  {
    id: 2,
    label: 'Название раздела',
  },
  {
    id: 3,
    label: 'Остальное',
  },
];

export const NavbarVariants = () => {
  const size = useSelect('size', navbarPropSize, defaultNavbarPropSize) || 'm';
  const form = useSelect('form', navbarPropForm, defaultNavbarPropForm);
  const getItemGroupKey = useDefaultGetter('groups');
  const getGroupLabel = useDefaultGetter(
    'groupLabels',
    false,
    !getItemGroupKey,
  );
  const getItemSubMenu = useDefaultGetter('subMenu');
  const getItemStatus = useDefaultGetter('status');

  const rightSide = useBoolean('rightSide');

  return (
    <div style={{ height: '100%', width: '100%', overflow: 'auto' }}>
      <Navbar
        getItemGroupKey={getItemGroupKey}
        getGroupLabel={getGroupLabel}
        size={size}
        form={form}
        items={menu}
        groups={!getItemGroupKey ? groups : undefined}
        getItemSubMenu={getItemSubMenu}
        getItemStatus={getItemStatus}
        getItemRightSide={
          rightSide
            ? (item) => [
                item.counter ? (
                  <Text lineHeight="s" size={size} view="secondary">
                    {item.counter}
                  </Text>
                ) : undefined,
              ]
            : undefined
        }
      />
    </div>
  );
};
