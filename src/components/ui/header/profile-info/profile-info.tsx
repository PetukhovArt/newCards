import * as Avatar from '@radix-ui/react-avatar'

import { Typography } from '../../typography'

import s from './profile-info.module.scss'
export const ProfileInfo = () => {
  return (
    <div className={s.profileInfo}>
      <Typography variant={'subtitle1'} className={s.subtitle}>
        User
      </Typography>
      <Avatar.Root className={s.AvatarRoot}>
        <Avatar.Image
          className={s.AvatarImage}
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt="No Name"
        />
        <Avatar.Fallback className={s.AvatarFallback} delayMs={600}>
          NN
        </Avatar.Fallback>
      </Avatar.Root>
    </div>
  )
}
