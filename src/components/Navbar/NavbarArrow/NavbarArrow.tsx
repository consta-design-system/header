import { AnimateIconSwitcherProvider } from '@consta/icons/AnimateIconSwitcherProvider';
import { IconArrowDown } from '@consta/icons/IconArrowDown';
import { withAnimateSwitcherHOC } from '@consta/icons/withAnimateSwitcherHOC';
import { Button } from '@consta/uikit/Button';
import React from 'react';

const IconArrow = withAnimateSwitcherHOC({
  startIcon: IconArrowDown,
  startDirection: 0,
  endDirection: 180,
});

export const NavbarArrow = ({
  open,
  onClick,
}: {
  open: boolean;
  onClick: React.MouseEventHandler;
}) => (
  <AnimateIconSwitcherProvider active={open}>
    <Button
      size="xs"
      iconLeft={IconArrow}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick(e);
      }}
      view="clear"
      onlyIcon
      tabIndex={-1}
    />
  </AnimateIconSwitcherProvider>
);
