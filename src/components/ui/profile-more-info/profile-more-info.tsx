import { Avatar } from '../avatar'
import { ProfileInfoPropsType } from '../profile-info'

import s from './profile-more-info.module.scss'

import { Typography } from '@/components/ui/typography'

type ProfileMoreInfoPropsType = {
  email: string
} & ProfileInfoPropsType

export const ProfileMoreInfo = (props: ProfileMoreInfoPropsType) => {
  const { name, email, avatar } = props

  return (
    <div className={s.profileInfo}>
      <Avatar src={avatar} name={name} className={s.avatar} />
      <div className={s.info}>
        <Typography variant={'subtitle2'}>{name}</Typography>
        <Typography variant={'caption'} className={s.email}>
          {email}
        </Typography>
      </div>
    </div>
  )
}
