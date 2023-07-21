import './Sidebar.css';

import { Button } from '@consta/uikit/Button';
import { IconClose } from '@consta/uikit/IconClose';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Sidebar as ConstaSidebar } from '@consta/uikit/Sidebar';
import { Text } from '@consta/uikit/Text';
import { useBreakpoints } from '@consta/uikit/useBreakpoints';
import React from 'react';

import { cn } from '##/utils/bem';

type SidebarProps = Omit<
  React.ComponentProps<typeof ConstaSidebar>,
  'position' | 'onClose'
> & {
  title?: string;
  onClose?: React.EventHandler<React.MouseEvent>;
};

const cnSidebar = cn('Sidebar');

export const Sidebar = (props: SidebarProps) => {
  const { children, title, onClose, className, ...otherProps } = props;
  const { bigScreen } = useBreakpoints({ bigScreen: 520 });
  return (
    <ConstaSidebar
      {...otherProps}
      position={bigScreen ? 'right' : 'bottom'}
      size={bigScreen ? 'l' : 'full'}
      className={cnSidebar(null, [className])}
    >
      {(title || onClose) && (
        <div
          className={cnSidebar('Header', [cnMixSpace({ pV: 'l', pH: 'xl' })])}
        >
          <Text className={cnSidebar('Title')} size="xl" truncate>
            {title}
          </Text>
          {onClose && (
            <Button
              size="s"
              view="clear"
              iconLeft={IconClose}
              onClick={onClose}
            />
          )}
        </div>
      )}

      {children}
    </ConstaSidebar>
  );
};
