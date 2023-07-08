import { Root } from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

import { RadioButton } from '@/components/ui/radio-group/radio-button'

type OptionType = {
  value: string
  label?: string
  disabled?: boolean
}

type RadioGroupPropsType = {
  options: OptionType[]
  value?: string
  defaultValue?: string
  disabled?: boolean
  onChange?: (value: string) => void
}

export const RadioGroup = (props: RadioGroupPropsType) => {
  const { options, value, defaultValue, disabled = false, onChange } = props

  return (
    <div>
      <Root
        value={value}
        onValueChange={onChange}
        className={s.RadioGroupRoot}
        defaultValue={defaultValue}
        disabled={disabled}
      >
        {options?.map(option => (
          <RadioButton
            key={option.value}
            value={option.value}
            label={option.label}
            disabled={option.disabled || disabled}
          />
        ))}
      </Root>
    </div>
  )
}
