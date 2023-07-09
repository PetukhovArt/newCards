import { Meta, StoryObj } from '@storybook/react'

import { ProfileAvatarBar } from '@/components/ui/profile-avatar-bar/profile-avatar-bar.tsx'

const meta = {
  title: 'Components/ProfileAvatar/ProfileAvatarBar',
  component: ProfileAvatarBar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProfileAvatarBar>

export default meta
type Story = StoryObj<typeof ProfileAvatarBar>

export const Default: Story = {
  args: {
    name: 'Some Name',
    avatar: '',
  },
}
