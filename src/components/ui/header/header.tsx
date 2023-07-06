import logo from '../../../assets/images/Logo.svg'
import { Button } from '../button'

import s from './header.module.scss'
import { ProfileInfo } from './profile-info'

type HeaderPropsType = {
  isLoggedIn: boolean
  name: string
  avatar: string
}

export const Header = (props: HeaderPropsType) => {
  const { isLoggedIn, name, avatar } = props

  return (
    <div className={s.header}>
      <div className={s.container}>
        <img src={logo} alt="logo" />

        {isLoggedIn ? (
          <ProfileInfo name={name} avatar={avatar} />
        ) : (
          <Button as={'a'}>Sign in</Button>
        )}
      </div>
    </div>
  )
}
