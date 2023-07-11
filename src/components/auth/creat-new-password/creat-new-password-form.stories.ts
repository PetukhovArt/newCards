import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPasswordForm } from '@/components/auth/forgot-password-form'

const meta = {
  title: 'Auth/CreatNewPasswordForm',
  component: ForgotPasswordForm,
  tags: ['autodocs'],
  argTypes: {
    linkPath: {
      options: ['/login'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof ForgotPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    linkPath: '/login',
  },
}
