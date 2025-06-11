import { PropsWithHTMLAttributesAndRef } from '@consta/uikit/__internal__/src/utils/types/PropsWithHTMLAttributes';
import { BadgePropStatus } from '@consta/uikit/Badge';

export type NotificationsItemBadge = {
  label: string;
  status?: BadgePropStatus;
};

export type NotificationsItemFooterProps = PropsWithHTMLAttributesAndRef<
  {
    date?: Date;
    dateFormat?: (date: Date) => string;
    badges?: NotificationsItemBadge[];
    children?: never;
  },
  HTMLDivElement
>;
