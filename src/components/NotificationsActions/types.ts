import { IconComponent } from '@consta/uikit/Icon';

import { PropsWithHTMLAttributes } from '##/utils/types/PropsWithHTMLAttributes';

export type DefaultItem = {
  label: string;
  onClick?: React.EventHandler<React.MouseEvent>;
  icon?: IconComponent;
};

export type NotificationsActionsPropGetItemLabel<ITEM> = (item: ITEM) => string;
export type NotificationsActionsPropGetItemIcon<ITEM> = (
  item: ITEM,
) => IconComponent | undefined;
export type NotificationsActionsPropGetItemOnClick<ITEM> = (
  item: ITEM,
) => React.EventHandler<React.MouseEvent> | undefined;

export type NotificationsActionsOnItemClick<ITEM> = (props: {
  e: React.MouseEvent;
  item: ITEM;
}) => void;

export type NotificationsActionsProps<ITEM = DefaultItem> =
  PropsWithHTMLAttributes<
    {
      items?: ITEM[];
      mainButtonOnlyIcon?: boolean;
      opened?: boolean;
      onOpen?: (value: boolean) => void;
      setVisibleMenu?: (
        setVisibleMenu: React.Dispatch<React.SetStateAction<boolean>>,
      ) => void;
      onItemClick?: NotificationsActionsOnItemClick<ITEM>;
    },
    HTMLButtonElement
  > & {
    getItemLabel?: NotificationsActionsPropGetItemLabel<ITEM>;
    getItemOnClick?: NotificationsActionsPropGetItemOnClick<ITEM>;
    getItemIcon?: NotificationsActionsPropGetItemIcon<ITEM>;
  } & (ITEM extends { label: DefaultItem['label'] }
      ? {}
      : { getItemLabel: NotificationsActionsPropGetItemLabel<ITEM> });

export type NotificationsActionsComponent = <ITEM = DefaultItem>(
  props: NotificationsActionsProps<ITEM>,
) => React.ReactElement | null;
