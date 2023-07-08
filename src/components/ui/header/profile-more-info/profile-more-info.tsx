import s from './profile-more-info.module.scss'

import { Avatar } from '@/components/auth/profile/avatar'
import { ProfileInfoPropsType } from '@/components/ui/header/profile-info'
import { Typography } from '@/components/ui/typography'

type ProfileMoreInfoPropsType = {
  email: string
} & ProfileInfoPropsType

export const ProfileMoreInfo = (props: ProfileMoreInfoPropsType) => {
  const { name, email, avatar } = props

  return (
    <div className={s.profileInfo}>
      <Avatar avatar={avatar} name={name} className={s.avatar} />
      <div className={s.info}>
        <Typography variant={'subtitle2'}>{name}</Typography>
        <Typography variant={'caption'} className={s.email}>
          {email}
        </Typography>
      </div>
    </div>
  )
}
