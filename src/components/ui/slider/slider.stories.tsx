import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Slider } from './slider.tsx'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    multiple: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultSlider: Story = {
  render: args => {
    const [value, setValue] = useState(30)

    const changeHandler = (value: number[]) => setValue(value[0])

    return <Slider value={[value]} multiple onChange={changeHandler} {...args} />
  },
}
export const DisabledSlider: Story = {
  render: args => {
    const [value, setValue] = useState(30)

    const changeHandler = (value: number[]) => setValue(value[0])

    return <Slider value={[value]} disabled={true} multiple onChange={changeHandler} {...args} />
  },
}

export const MultipleSlider: Story = {
  render: args => {
    const [value, setValue] = useState([30, 60])

    const changeHandler = (value: number[]) => setValue(value)

    return <Slider value={value} multiple onChange={changeHandler} {...args} />
  },
}

export const SliderWithoutPropsValue: Story = {}
