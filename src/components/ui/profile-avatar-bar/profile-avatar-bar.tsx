import { Typography } from '../typography'

import s from './profile-avatar-bar.module.scss'

import { Avatar } from '@/components/ui/avatar'

export type ProfileAvatarBarPropsType = {
  name: string
  avatar: string
}
export const ProfileAvatarBar = (props: ProfileAvatarBarPropsType) => {
  const { name, avatar } = props

  return (
    <div className={s.profileInfo}>
      <Typography variant={'subtitle1'} className={s.subtitle}>
        {name}
      </Typography>
      <Avatar src={avatar} name={name} />
    </div>
  )
}
