import React, { forwardRef, useState } from 'react';

import { SelectMenu } from '##/components/SelectMenu';

import { withDefaultGetters } from './helpers';
import {
  LanguagesComponent,
  LanguagesDefaultItem,
  LanguagesProps,
} from './types';

const LanguagesRender = (
  props: LanguagesProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const {
    value: valueProp,
    onChange,
    ...otherProps
  } = withDefaultGetters(props);
  const [value, setValue] = useState<LanguagesDefaultItem | undefined>(
    valueProp || otherProps.items[0],
  );

  return (
    <SelectMenu
      {...otherProps}
      onItemClick={(args) => {
        onChange?.(args);
        setValue(args.item);
      }}
      label={value ? otherProps.getItemLabel(value) : ''}
      ref={ref}
    />
  );
};

export const Languages = forwardRef(LanguagesRender) as LanguagesComponent;

export * from './types';
