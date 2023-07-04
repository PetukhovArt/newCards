import logo from '../../../assets/images/Logo.svg'
import { Button } from '../button'

import s from './header.module.scss'
import { ProfileInfo } from './profile-info'

type HeaderPropsType = {
  isLoggedIn: boolean
}

export const Header = ({ isLoggedIn }: HeaderPropsType) => {
  return (
    <div className={s.header}>
      <img src={logo} alt="logo" />

      {isLoggedIn ? (
        <ProfileInfo
          name={'User'}
          avatar={
            'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
          }
        />
      ) : (
        <Button as={'a'}>Sign in</Button>
      )}
    </div>
  )
}
