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
    name: 'User',
    avatar: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    email: 'testmail@gmail.com',
  },
}

export const HeaderWithUser: Story = {
  args: {
    isLoggedIn: true,
    name: 'User',
    avatar: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    email: 'testmail@gmail.com',
  },
}
