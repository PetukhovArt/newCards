import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radio-button.module.scss'

import { Typography } from '@/components/ui/typography'

type RadioButtonProps = {
  value: string
  label?: string
}
export const RadioButton = (props: RadioButtonProps) => {
  const { value, label } = props

  return (
    <div className={s.radioButtonContainer}>
      <div className={s.radioButtonBackGround}>
        <RadioGroup.Item className={s.RadioGroupItem} value={value} id={value}>
          <RadioGroup.Indicator className={s.RadioGroupIndicator} />
        </RadioGroup.Item>
      </div>
      {label && (
        <Typography as={'label'} className={s.label} variant={'body2'} htmlFor={value}>
          {label}
        </Typography>
      )}
    </div>
  )
}
