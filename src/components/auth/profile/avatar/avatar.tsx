import { ReactNode } from 'react'

import * as AvatarRadix from '@radix-ui/react-avatar'
import clsx from 'clsx'

import s from './avatar.module.scss'

type AvatarPropsType = {
  avatar: string
  name: string
  avatarContent?: ReactNode
  className?: string
}
export const Avatar = (props: AvatarPropsType) => {
  const { name, avatar, avatarContent, className } = props

  const classNames = {
    avatarRoot: clsx(s.avatarRoot, className),
    avatar: s.avatar,
    icon: s.icon,
    fallback: s.fallback,
  }

  return (
    <AvatarRadix.Root className={classNames.avatarRoot}>
      <AvatarRadix.Image className={classNames.avatar} src={avatar} alt={name} />
      {avatarContent && <div className={classNames.icon}>{avatarContent}</div>}
      <AvatarRadix.Fallback className={classNames.fallback}>{name[0]}</AvatarRadix.Fallback>
    </AvatarRadix.Root>
  )
}
