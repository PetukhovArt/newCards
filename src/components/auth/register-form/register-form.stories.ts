import { Meta, StoryObj } from '@storybook/react'

import { RegisterForm } from '@/components/auth/register-form/register-form.tsx'

const meta = {
  title: 'Auth/RegisterForm',
  component: RegisterForm,
  tags: ['autodocs'],
  argTypes: {
    onSubmitHandler: {
      action: 'submit',
    },
  },
} satisfies Meta<typeof RegisterForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    linkPath: '/login',
  },
}
