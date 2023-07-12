import { useState } from 'react'

import { Profile, UpdateProfileType } from '@/components/auth/profile'

export const ProfilePage = () => {
  const avatarLink =
    'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'

  const [name, setName] = useState('Some name')
  const [avatar, setAvatar] = useState(avatarLink)
  const logoutHandler = () => console.log('logout')
  const changeProfileHandler = (profile: UpdateProfileType) => {
    setName(profile.name || name)
    setAvatar(profile.avatar || avatar)
  }

  return (
    <Profile
      name={name}
      email={'XXX@gmail.com'}
      avatar={avatar}
      onLogout={logoutHandler}
      onChangeProfile={changeProfileHandler}
    />
  )
}
