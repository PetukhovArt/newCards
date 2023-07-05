import type { Meta, StoryObj } from '@storybook/react'

import { CheckEmail } from './check-email'

const meta = {
  title: 'Auth/CheckEmail',
  component: CheckEmail,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    linkPath: '/login',
    email: 'testEmail@mail.com',
  },
}
