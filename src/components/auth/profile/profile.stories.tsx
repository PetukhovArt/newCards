import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Profile, UpdateProfileType } from '@/components/auth/profile/profile.tsx'

const meta = {
  title: 'Auth/Profile',
  component: Profile,
  tags: ['autodocs'],
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => {
    const [name, setName] = useState(args.name)
    const [avatar, setAvatar] = useState(args.avatar)
    const changeProfile = (profile: UpdateProfileType) => {
      setName(profile.name || name)
      setAvatar(profile.avatar || avatar)
    }
    const logout = () => console.log('logout')

    return (
      <Profile
        name={name}
        email={args.email}
        avatar={avatar}
        onLogout={logout}
        onChangeProfile={changeProfile}
      />
    )
  },
  args: {
    name: 'Some Name',
    avatar: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    email: 'test@gmail.com',
  },
}
