import { ReactNode } from 'react'

import * as AvatarRadix from '@radix-ui/react-avatar'

import s from './avatar.module.scss'

type AvatarPropsType = {
  avatar: string
  name: string
  avatarContent?: ReactNode
  className?: string
}
export const Avatar = (props: AvatarPropsType) => {
  const { name, avatar, avatarContent, className } = props

  return (
    <AvatarRadix.Root className={`${s.avatarRoot} ${className}`}>
      <AvatarRadix.Image className={s.avatar} src={avatar} alt={name} />
      {avatarContent && <div className={s.icon}>{avatarContent}</div>}
    </AvatarRadix.Root>
  )
}
