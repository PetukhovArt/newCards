import { FC } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import clsx from 'clsx'

import s from './checkbox.module.scss'

import checkBoxDefaultSelected from '@/assets/icons/checkBoxDefaultSelected.svg'
import checkedDisabled from '@/assets/icons/checkedDisabled.svg'

export type CheckboxPropsType = {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  label?: string
  id?: string
}

export const Checkbox: FC<CheckboxPropsType> = ({
  checked,
  onChange,
  disabled,
  required,
  label,
}) => {
  const classNames = {
    container: s.container,
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled),
    root: s.root,
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled),
  }

  return (
    <div className={classNames.container}>
      <LabelRadix.Root className={classNames.label}>
        <div className={classNames.buttonWrapper}>
          <CheckboxRadix.Root
            className={classNames.root}
            checked={checked}
            onCheckedChange={() => onChange(!checked)}
            disabled={disabled}
            required={required}
          >
            {checked && (
              <CheckboxRadix.Indicator className={classNames.indicator}>
                <img src={!disabled ? checkBoxDefaultSelected : checkedDisabled} alt="selected" />
              </CheckboxRadix.Indicator>
            )}
          </CheckboxRadix.Root>
        </div>
        {label}
      </LabelRadix.Root>
    </div>
  )
}
