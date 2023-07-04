import { Meta, StoryObj } from '@storybook/react'

import { Profile } from '@/components/auth/profile/profile.tsx'

const meta = {
  title: 'Auth/Profile',
  component: Profile,
  tags: ['autodocs'],
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    name: 'Some Name',
    avatar: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    email: 'SomeName@gmail.com',
  },
}
