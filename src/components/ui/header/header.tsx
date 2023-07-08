import logo from '../../../assets/images/Logo.svg'
import { Button } from '../button'

import s from './header.module.scss'
import { ProfileInfo } from './profile-info'

import LogoutIcon from '@/assets/icons/logout-icon.tsx'
import PersonIcon from '@/assets/icons/person-icon.tsx'
import { Dropdown } from '@/components/ui/dropDownMenu'
import { DropdownItem } from '@/components/ui/dropDownMenu/drop-down-item'
import { DropDownSeparator } from '@/components/ui/dropDownMenu/drop-down-separator'
import { ProfileMoreInfo } from '@/components/ui/header/profile-more-info'
import { Typography } from '@/components/ui/typography'

type HeaderPropsType = {
  isLoggedIn: boolean
  name: string
  avatar: string
  email: string
}

export const Header = (props: HeaderPropsType) => {
  const { isLoggedIn, name, avatar, email } = props

  return (
    <div className={s.header}>
      <div className={s.container}>
        <img src={logo} alt="logo" />

        {isLoggedIn ? (
          <Dropdown trigger={<ProfileInfo name={name} avatar={avatar} />}>
            <DropdownItem isOption={false}>
              <ProfileMoreInfo name={name} email={email} avatar={avatar} />
            </DropdownItem>
            <DropDownSeparator />
            <DropdownItem>
              <PersonIcon />
              <Typography>My Profile</Typography>
            </DropdownItem>
            <DropDownSeparator />
            <DropdownItem>
              <LogoutIcon />
              <Typography>Sign Out</Typography>
            </DropdownItem>
          </Dropdown>
        ) : (
          <Button as={'a'}>Sign in</Button>
        )}
      </div>
    </div>
  )
}
