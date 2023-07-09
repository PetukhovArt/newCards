import * as SliderRadix from '@radix-ui/react-slider'
import clsx from 'clsx'

import s from './slider.module.scss'

import { Typography } from '@/components/ui/typography'

type SliderPropsType = {
  value?: number[]
  defaultValue?: number[]
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  multiple?: boolean
  label?: string
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
    label,
    disabled = false,
    multiple = false,
    onChange,
    onChangeCommit,
  } = props

  const classNames = {
    sliderContainer: clsx(s.sliderContainer, disabled && s.disabled),
    slider: s.slider,
    sliderRoot: s.SliderRoot,
    sliderTrack: s.SliderTrack,
    sliderRange: s.SliderRange,
    sliderThumb: s.SliderThumb,
    value: s.value,
  }

  return (
    <div className={classNames.sliderContainer}>
      {label && <Typography variant={'body2'}>{label}</Typography>}
      <div className={classNames.slider}>
        <div className={classNames.value}>{value && value[0]}</div>
        <SliderRadix.Root
          value={value}
          defaultValue={defaultValue}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          onValueChange={onChange}
          onValueCommit={onChangeCommit}
          className={classNames.sliderRoot}
        >
          <SliderRadix.Track className={classNames.sliderTrack}>
            <SliderRadix.Range className={classNames.sliderRange} />
          </SliderRadix.Track>
          <SliderRadix.Thumb className={classNames.sliderThumb} />
          {multiple && <SliderRadix.Thumb className={classNames.sliderThumb} />}
        </SliderRadix.Root>
        <div className={classNames.value}>{(value && value[1]) || max}</div>
      </div>
    </div>
  )
}
