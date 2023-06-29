import * as Slider from '@radix-ui/react-slider'

import { Typography } from '../typography'

import s from './range.module.scss'

type RangeProps = {
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

export const Range = (props: RangeProps) => {
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
    <div className={s.range}>
      <div className={s.value}>
        <Typography variant={'body1'}>{value && value[0]}</Typography>
      </div>
      <Slider.Root
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
        <Slider.Track className={s.SliderTrack}>
          <Slider.Range className={s.SliderRange} />
        </Slider.Track>
        <Slider.Thumb className={s.SliderThumb} />
        {multiple && <Slider.Thumb className={s.SliderThumb} />}
      </Slider.Root>
      <div className={s.value}>
        <Typography variant={'body1'}>{(value && value[1]) || max}</Typography>
      </div>
    </div>
  )
}
