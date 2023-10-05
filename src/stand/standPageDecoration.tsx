import { Group, Lib } from '@consta/stand';
import { Theme } from '@consta/uikit/Theme';
import React, { StrictMode } from 'react';

export const StandPageDecoration: Lib<Group>['standPageDecoration'] = (
  props,
) => {
  return (
    <StrictMode>
      <Theme preset={props.theme}>{props.children}</Theme>
    </StrictMode>
  );
};
