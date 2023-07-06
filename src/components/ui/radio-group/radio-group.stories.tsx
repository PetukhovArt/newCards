import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './radio-group.tsx'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultRadioGroup: Story = {
  render: args => {
    const [value, setValue] = useState('1')

    return <RadioGroup {...args} value={value} onChange={setValue} />
  },
  args: {
    options: [
      { value: '1', label: 'Radio-Group' },
      { value: '2', label: 'Radio-Group' },
      { value: '3', label: 'Radio-Group' },
    ],
  },
}
export const DisabledRadioGroup: Story = {
  render: args => {
    const [value, setValue] = useState('1')

    return <RadioGroup {...args} value={value} onChange={setValue} />
  },
  args: {
    options: [
      { value: '1', label: 'Radio-Group' },
      { value: '2', label: 'Radio-Group' },
      { value: '3', label: 'Radio-Group' },
    ],
    disabled: true,
  },
}

export const DisabledRadioButton: Story = {
  render: args => {
    const [value, setValue] = useState('1')

    return <RadioGroup {...args} value={value} onChange={setValue} />
  },
  args: {
    options: [
      { value: '1', label: 'Radio-Group' },
      { value: '2', label: 'Radio-Group' },
      { value: '3', label: 'Radio-Group', disabled: true },
    ],
  },
}
