import { Meta, StoryObj } from '@storybook/react'

import { ProfileAvatarCard } from '@/components/ui/profile-avatar-card/profile-avatar-card.tsx'

const meta = {
  title: 'Components/ProfileAvatar/ProfileAvatarCard',
  component: ProfileAvatarCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProfileAvatarCard>

export default meta
type Story = StoryObj<typeof ProfileAvatarCard>

export const Default: Story = {
  args: {
    name: 'Some Name',
    avatar: '',
    email: 'testmail@yandex.com',
  },
}
