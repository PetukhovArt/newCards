import { Meta, StoryObj } from '@storybook/react'

import { RegisterForm } from '@/components/auth/register-form/register-form.tsx'

const meta = {
  title: 'Auth/RegisterForm',
  component: RegisterForm,
  tags: ['autodocs'],
  argTypes: {
    linkPath: {
      options: ['/login'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof RegisterForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    linkPath: '/login',
  },
}
