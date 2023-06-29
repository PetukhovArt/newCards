import { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './radio-group.tsx'

import { RadioButton } from '@/components/ui/radio-group/radio-button'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultRadioGroup: Story = {
  render: args => {
    return (
      <RadioGroup {...args}>
        <RadioButton value={'1'} label={'Radio-Group'} />
        <RadioButton value={'2'} label={'Radio-Group'} />
        <RadioButton value={'3'} label={'Radio-Group'} />
      </RadioGroup>
    )
  },
}
export const DisabledRadioGroup: Story = {
  render: args => {
    return (
      <RadioGroup disabled={true} {...args}>
        <RadioButton value={'1'} label={'Radio-Group'} />
        <RadioButton value={'2'} label={'Radio-Group'} />
        <RadioButton value={'3'} label={'Radio-Group'} />
      </RadioGroup>
    )
  },
}
