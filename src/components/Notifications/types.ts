import {
  NotificationsDefaultAction,
  NotificationsDefaultGroup,
  NotificationsDefaultItem,
  Props,
} from '##/components/NotificationsList';
import { PropsWithHTMLAttributesAndRef } from '##/utils/types/PropsWithHTMLAttributes';

export type NotificationsProps<
  ITEM = NotificationsDefaultItem,
  GROUP = NotificationsDefaultGroup,
  ACTION = NotificationsDefaultAction,
  GROUP_BY_DAY extends boolean = false,
> = PropsWithHTMLAttributesAndRef<
  Omit<Props<ITEM, GROUP, ACTION, GROUP_BY_DAY>, 'onClose'> & {
    listClassName?: string;
    isMobile?: boolean;
  },
  HTMLButtonElement
>;

export type NotificationsComponent = <
  ITEM = NotificationsDefaultItem,
  GROUP = NotificationsDefaultGroup,
  ACTION = NotificationsDefaultAction,
  GROUP_BY_DAY extends boolean = false,
>(
  props: NotificationsProps<ITEM, GROUP, ACTION, GROUP_BY_DAY>,
) => React.ReactElement | null;
