import { Typography } from '../typography'

import s from './profile-info.module.scss'

import { Avatar } from '@/components/ui/avatar'

export type ProfileInfoPropsType = {
  name: string
  avatar: string
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
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
