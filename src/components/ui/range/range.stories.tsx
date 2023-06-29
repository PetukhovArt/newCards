import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Range } from './range.tsx'

const meta = {
  title: 'Components/Range',
  component: Range,
  tags: ['autodocs'],
  argTypes: {
    multiple: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Range>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultRange: Story = {
  render: args => {
    const [value, setValue] = useState(30)

    const changeHandler = (value: number[]) => setValue(value[0])

    return <Range value={[value]} multiple onChange={changeHandler} {...args} />
  },
}

export const MultipleRange: Story = {
  render: args => {
    const [value, setValue] = useState([30, 60])

    const changeHandler = (value: number[]) => setValue(value)

    return <Range value={value} multiple onChange={changeHandler} {...args} />
  },
}

export const Simple: Story = {}
