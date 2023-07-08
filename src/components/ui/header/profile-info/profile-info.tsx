import * as Avatar from '@radix-ui/react-avatar'

import { Typography } from '../../typography'

import s from './profile-info.module.scss'

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
      <Avatar.Root className={s.AvatarRoot}>
        <Avatar.Image className={s.AvatarImage} src={avatar} alt={name} />
        <Avatar.Fallback className={s.AvatarFallback}>{name[0]}</Avatar.Fallback>
      </Avatar.Root>
    </div>
  )
}
