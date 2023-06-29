import { ReactNode } from 'react'

import * as Radiogroup from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

type RadioGroupPropsType = {
  value?: string
  defaultValue?: string
  disabled?: boolean
  children?: ReactNode
  onChange?: (value: string) => void
}

export const RadioGroup = (props: RadioGroupPropsType) => {
  const { value, defaultValue, disabled = false, children, onChange } = props

  return (
    <div>
      <Radiogroup.Root
        value={value}
        onValueChange={onChange}
        className={`${s.RadioGroupRoot} ${disabled && s.disabled}`}
        defaultValue={defaultValue}
        disabled={disabled}
      >
        {children}
      </Radiogroup.Root>
    </div>
  )
}
