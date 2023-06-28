import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    search: {
      options: [true, false],
    },
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof TextField>

export const Primary: Story = {
  args: {
    search: false,
    label: 'Primary',
  },
}
export const Invalid: Story = {
  args: {
    search: false,
    label: 'Error input',
    errorMessage: 'error',
    value: 'error',
  },
}
export const Search: Story = {
  args: {
    search: true,
    label: 'Search input',
  },
}
export const Password: Story = {
  args: {
    search: false,
    label: 'Password input',
    inputType: 'password',
  },
}
