import { BadgePropStatus } from '@consta/uikit/Badge';
import { IconProps } from '@consta/uikit/Icon';
import React from 'react';

import { PropsWithHTMLAttributesAndRef } from '##/utils/types/PropsWithHTMLAttributes';

export type NotificationCardAction = {
  label: string;
  onClick?: React.EventHandler<React.MouseEvent>;
  icon?: React.FC<IconProps>;
};

export type NotificationCardBadge = {
  label: string;
  status?: BadgePropStatus;
};

export type NotificationCardProps = PropsWithHTMLAttributesAndRef<
  {
    title: string;
    description?: string;
    imageUrl?: string;
    read?: boolean;
    date?: Date;
    dateFormat?: (date: Date) => string;
    badges?: NotificationCardBadge[];
    actions?: NotificationCardAction[];
    onClick?: React.EventHandler<React.MouseEvent>;
    children?: never;
    view?: 'user' | 'default';
    actionsMenuOpened?: boolean;
    setVisibleMenu?: (
      setVisibleMenu: React.Dispatch<React.SetStateAction<boolean>>,
    ) => void;
  },
  HTMLDivElement
>;
