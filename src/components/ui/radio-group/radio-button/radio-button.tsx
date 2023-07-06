import { Item, Indicator } from '@radix-ui/react-radio-group'

import s from './radio-button.module.scss'

import { Typography } from '@/components/ui/typography'

type RadioButtonProps = {
  value: string
  label?: string
  disabled?: boolean
}
export const RadioButton = (props: RadioButtonProps) => {
  const { value, label, disabled = false } = props

  return (
    <div className={`${s.radioButtonContainer} ${disabled && s.disabled}`}>
      <div className={s.radioButtonBackGround}>
        <Item disabled={disabled} className={s.RadioGroupItem} value={value} id={value}>
          <Indicator className={s.RadioGroupIndicator} />
        </Item>
      </div>
      {label && (
        <Typography as={'label'} className={s.label} variant={'body2'} htmlFor={value}>
          {label}
        </Typography>
      )}
    </div>
  )
}
