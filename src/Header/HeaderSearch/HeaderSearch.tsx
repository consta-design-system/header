import React, { useState, useEffect, useCallback } from 'react'

import './HeaderSearch.css'

import {
  TextField,
  TextFieldPropValue,
  TextFieldPropOnChange,
  TextFieldOnChangeArguments,
} from '@consta/uikit/TextField'

import { useMutableRef } from '@consta/uikit/useMutableRef'
import { IconSearch } from '@consta/uikit/IconSearch'
import { cn } from '@/__private__/utils/bem'

export type HeaderSearchProps = {
  value?: TextFieldPropValue
  onChange?: TextFieldPropOnChange
  onSubmit?: (props: { e: React.FormEvent<HTMLFormElement>; value?: string | null }) => void
  placeholder?: string
  className?: string
  children?: never
}

const cnHeaderSearch = cn('HeaderSearch')

export const HeaderSearch: React.FC<HeaderSearchProps> = props => {
  const {
    onChange: onChangeProp,
    onSubmit: onSubmitProp,
    value: valueProp,
    className,
    placeholder = 'Поиск',
  } = props
  const [value, setValue] = useState<TextFieldPropValue>()
  const onChangeRef = useMutableRef(onChangeProp)
  const onSubmitRef = useMutableRef(onSubmitProp)
  const valueRef = useMutableRef(value)

  const onChange = useCallback((args: TextFieldOnChangeArguments) => {
    setValue(args.value)
    onChangeRef.current?.(args)
  }, [])

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    onSubmitRef.current?.({ e, value: valueRef.current })
  }, [])

  useEffect(() => setValue(valueProp), [valueProp])

  return (
    <form onSubmit={onSubmit} className={cnHeaderSearch(null, [className])}>
      <TextField
        leftSide={IconSearch}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        width="full"
      />
    </form>
  )
}
