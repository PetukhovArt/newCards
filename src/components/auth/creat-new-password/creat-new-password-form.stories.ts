import type { Meta, StoryObj } from '@storybook/react'

import { CreatNewPasswordForm } from '@/components/auth/creat-new-password/creat-new-password-form.tsx'

const meta = {
  title: 'Auth/CreatNewPasswordForm',
  component: CreatNewPasswordForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CreatNewPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
