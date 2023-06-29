import { Meta, StoryObj } from '@storybook/react'

import { Header } from './header.tsx'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    isLoggedIn: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderWithButton: Story = {
  args: {
    isLoggedIn: false,
  },
}

export const HeaderWithUser: Story = {
  args: {
    isLoggedIn: true,
  },
}
