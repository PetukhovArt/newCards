import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPasswordForm } from './forgot-password-form.tsx'

const meta = {
  title: 'Auth/ForgotPasswordForm',
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
