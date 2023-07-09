import { Avatar } from '../avatar'
import { ProfileAvatarBarPropsType } from '../profile-avatar-bar'

import s from './profile-avatar-card.module.scss'

import { Typography } from '@/components/ui/typography'

type ProfileMoreInfoPropsType = {
  email: string
} & ProfileAvatarBarPropsType

export const ProfileAvatarCard = (props: ProfileMoreInfoPropsType) => {
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
