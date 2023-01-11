import { IconArrowRight } from '@consta/uikit/IconArrowRight';
import { IconFlagFilled } from '@consta/uikit/IconFlagFilled';
import { IconFolders } from '@consta/uikit/IconFolders';
import { IconGas } from '@consta/uikit/IconGas';
import { IconInfo } from '@consta/uikit/IconInfo';
import { IconLineAndBarChart } from '@consta/uikit/IconLineAndBarChart';
import { IconMail } from '@consta/uikit/IconMail';
import { IconMap } from '@consta/uikit/IconMap';

import { NavBarDefaultItem } from '../types';

export const items: NavBarDefaultItem[] = [
  {
    label: 'Объекты',
    iconLeft: IconFlagFilled,
    iconRight: IconArrowRight,
  },
  {
    label: 'Нефть и газ',
    iconLeft: IconGas,
    iconRight: IconArrowRight,
  },
  {
    label: 'Электроэнергетика',
    iconLeft: IconLineAndBarChart,
    iconRight: IconArrowRight,
  },
  {
    label: 'Карта',
    iconLeft: IconMap,
    iconRight: IconArrowRight,
  },
  {
    label: 'Отображение данных',
    iconLeft: IconFolders,
    iconRight: IconArrowRight,
  },
  {
    label: 'Информация',
    iconLeft: IconInfo,
  },
  {
    label: 'Сообщения',
    iconLeft: IconMail,
  },
];
