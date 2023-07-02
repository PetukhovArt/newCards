import { ChangeEvent, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['search', 'password', 'text'],
    },
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof TextField>

export const Primary: Story = {
  args: {
    type: 'text',
    label: 'Primary',
  },
}
export const Invalid: Story = {
  args: {
    type: 'text',
    label: 'Error input',
    errorMessage: 'error',
    value: 'error',
  },
}

export const Search: Story = {
  render: args => {
    const [value, setValue] = useState<string>('')
    const handler = (value: ChangeEvent<HTMLInputElement>) => {
      setValue(value.target.value)
    }

    return (
      <>
        <TextField
          {...args}
          value={value}
          onChange={e => handler(e)}
          type={'search'}
          onClearValue={() => setValue('')}
        />
      </>
    )
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    label: 'Password input',
  },
}
export const Disabled: Story = {
  args: {
    type: 'text',
    label: 'disabled',
    disabled: true,
  },
}
