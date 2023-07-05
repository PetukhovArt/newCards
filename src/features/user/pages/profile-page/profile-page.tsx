import { Profile, UpdateProfileType } from '@/components/auth/profile'

export const ProfilePage = () => {
  const name = 'Some Name'
  const email = 'XXX@gmail.com'
  const avatar =
    'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'

  const logoutHandler = () => console.log('logout')
  const changeProfileHandler = (profile: UpdateProfileType) => console.log(profile)

  return (
    <Profile
      name={name}
      email={email}
      avatar={avatar}
      logoutHandler={logoutHandler}
      changeProfileHandler={changeProfileHandler}
    />
  )
}
