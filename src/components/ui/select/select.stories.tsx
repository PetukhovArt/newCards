import { Meta, StoryObj } from '@storybook/react'

import { SuperSelect } from './super-select.tsx'

const meta = {
  title: 'Components/SuperSelect',
  component: SuperSelect,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    label: {
      options: ['label', null],
      control: { type: 'radio' },
    },
    errorMessage: {
      options: ['error message', null],
      control: { type: 'radio' },
    },
    showOptionSeparator: {
      options: [true, false],
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof SuperSelect>

export default meta
type Story = StoryObj<typeof SuperSelect>

export const Simple: Story = {
  args: {
    options: [1, 2, 3, 4, 5],
  },
}
export const WithLabel: Story = {
  args: {
    label: 'label',
    options: [1, 2, 3, 4, 5],
  },
}
export const WithItemSeparator: Story = {
  args: {
    showOptionSeparator: true,
    options: [1, 2, 3, 4, 5],
  },
}
export const WithErrorMessage: Story = {
  args: {
    errorMessage: 'error message',
    options: [1, 2, 3, 4, 5],
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    options: [1, 2, 3, 4, 5],
  },
}
