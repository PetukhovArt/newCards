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

      {isLoggedIn ? <ProfileInfo /> : <Button as={'a'}>Sign in</Button>}
    </div>
  )
}
