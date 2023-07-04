import * as SliderRadix from '@radix-ui/react-slider'

import { Typography } from '../typography'

import s from './slider.module.scss'

type SliderPropsType = {
  value?: number[]
  defaultValue?: number[]
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  multiple?: boolean
  onChange?: (value: number[]) => void
  onChangeCommit?: () => void
}

export const Slider = (props: SliderPropsType) => {
  const {
    value,
    defaultValue,
    min = 0,
    max = 100,
    step = 1,
    disabled = false,
    multiple = false,
  } = props

  return (
    <div className={`${s.range} ${disabled && s.disabled}`}>
      <div className={s.value}>
        <Typography variant={'body1'}>{value && value[0]}</Typography>
      </div>
      <SliderRadix.Root
        value={value}
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onValueChange={props.onChange}
        onValueCommit={props.onChangeCommit}
        className={s.SliderRoot}
      >
        <SliderRadix.Track className={s.SliderTrack}>
          <SliderRadix.Range className={s.SliderRange} />
        </SliderRadix.Track>
        <SliderRadix.Thumb className={s.SliderThumb} />
        {multiple && <SliderRadix.Thumb className={s.SliderThumb} />}
      </SliderRadix.Root>
      <div className={s.value}>
        <Typography variant={'body1'}>{(value && value[1]) || max}</Typography>
      </div>
    </div>
  )
}