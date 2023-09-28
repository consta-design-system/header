import './NavbarDriverExample.css';

import { IconAlert } from '@consta/icons/IconAlert';
import { IconBag } from '@consta/icons/IconBag';
import { IconChatFilled } from '@consta/icons/IconChatFilled';
import { IconDataNull } from '@consta/icons/IconDataNull';
import { IconDocFilled } from '@consta/icons/IconDocFilled';
import { IconHamburger } from '@consta/icons/IconHamburger';
import { IconSendMessage } from '@consta/icons/IconSendMessage';
import { IconSun } from '@consta/icons/IconSun';
import { IconTrash } from '@consta/icons/IconTrash';
import { IconWarning } from '@consta/icons/IconWarning';
import { Example } from '@consta/stand';
import { Button } from '@consta/uikit/Button';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { useClickOutside } from '@consta/uikit/useClickOutside';
import { useFlag } from '@consta/uikit/useFlag';
import { User } from '@consta/uikit/User';
import { useRefs } from '@consta/uikit/useRefs';
import React from 'react';
import { Transition } from 'react-transition-group';

import { cn } from '##/utils/bem';

import {
  cnNavbarMixDriverAnimate,
  cnNavbarMixFadeAnimate,
  Navbar,
  NavbarRail,
} from '../../..';

const menu = [
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

const cnNavbarDriverFadeExample = cn('NavbarDriverFadeExample');

export const NavbarDriverFadeExample = () => {
  const [open, setOpen] = useFlag();
  const menuRefs = useRefs<HTMLDivElement>(2);

  return (
    <Example col={1}>
      <div
        className={cnNavbarDriverFadeExample({ open })}
        onMouseEnter={setOpen.on}
        onMouseLeave={setOpen.off}
      >
        <Transition
          in={!open}
          unmountOnExit
          timeout={300}
          nodeRef={menuRefs[0]}
        >
          {(animate) => (
            <NavbarRail
              className={cnNavbarMixFadeAnimate({ animate, menu: 'rail' })}
              getItemLabel={() => undefined}
              items={menu}
              ref={menuRefs[0]}
            />
          )}
        </Transition>
        <Transition in={open} unmountOnExit timeout={300} nodeRef={menuRefs[1]}>
          {(animate) => (
            <Navbar
              className={cnNavbarMixFadeAnimate({ animate, menu: 'draver' })}
              items={menu}
              ref={menuRefs[1]}
            />
          )}
        </Transition>
      </div>
    </Example>
  );
};

const menuExapleDriver = [
  {
    label: 'Входящие',
    icon: IconDataNull,
    status: 'warning',
    active: true,
    subMenu: [
      { label: 'Работа', icon: IconBag, counter: 20 },
      { label: 'Личное', icon: IconSun, counter: 30 },
      { label: 'Прочее', icon: IconDocFilled, counter: 50 },
    ],
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

const cnNavbarDriverExample = cn('NavbarDriverExample');

export const NavbarDriverExample = () => {
  const [open, setOpen] = useFlag();
  const menuRefs = useRefs<HTMLDivElement>(3);

  useClickOutside({
    isActive: open,
    ignoreClicksInsideRefs: [menuRefs[2]],
    handler: setOpen.off,
  });

  return (
    <Example col={1}>
      <div ref={menuRefs[2]} className={cnNavbarDriverExample({ open })}>
        <Transition
          in={!open}
          unmountOnExit
          timeout={300}
          nodeRef={menuRefs[0]}
        >
          {(animate) => (
            <div
              ref={menuRefs[0]}
              className={cnNavbarDriverExample('Rail', [
                cnNavbarMixDriverAnimate({ animate, menu: 'rail' }),
              ])}
            >
              <Button
                className={cnMixSpace({ mH: 'xs', mV: 'm' })}
                iconLeft={IconHamburger}
                view="clear"
                onClick={setOpen.on}
                onlyIcon
              />
              <NavbarRail
                getItemLabel={() => undefined}
                items={menuExapleDriver}
                getItemTooltip={(item) => item.label}
              />
            </div>
          )}
        </Transition>
        <Transition in={open} unmountOnExit timeout={300} nodeRef={menuRefs[1]}>
          {(animate) => (
            <div
              ref={menuRefs[1]}
              className={cnNavbarDriverExample('Draver', [
                cnNavbarMixDriverAnimate({ animate, menu: 'draver' }),
              ])}
            >
              <User
                className={cnNavbarDriverExample('User', [
                  cnMixSpace({ mV: 'm' }),
                ])}
                name="Петр Уснувкин"
                info="Главный звездочет"
                size="l"
              />
              <Navbar items={menuExapleDriver} />
            </div>
          )}
        </Transition>
      </div>
    </Example>
  );
};
