import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Avatar } from '../../ui/avatar'

import s from './profile.module.scss'

import EditIcon from '@/assets/icons/edit-icon.tsx'
import LogoutIcon from '@/assets/icons/logout-icon.tsx'
import { profileSchema } from '@/common/schemas'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled'
import { FileInput } from '@/components/ui/file-input'
import { Typography } from '@/components/ui/typography'

type UpdateUserNameType = z.infer<typeof profileSchema>
export type UpdateProfileType = UpdateUserNameType & { avatar?: string }

type ProfilePropsType = {
  name: string
  email: string
  avatar: string
  logoutHandler: () => void
  changeProfileHandler: (profile: UpdateProfileType) => void
}

export const Profile = (props: ProfilePropsType) => {
  const { name, email, avatar, logoutHandler, changeProfileHandler } = props

  const { control, handleSubmit } = useForm<UpdateUserNameType>({
    defaultValues: { name },
    resolver: zodResolver(profileSchema),
  })

  const [editMode, setEditMode] = useState(false)
  const editModeOnHandler = () => setEditMode(true)

  const onSubmit = handleSubmit(data => {
    changeProfileHandler({ name: data.name })
    setEditMode(false)
  })

  const changeAvatarHandler = (avatar: File) => changeProfileHandler({ avatar: avatar.name })

  return (
    <Card className={s.card}>
      <Typography variant={'large'}>Personal Information</Typography>
      <Avatar
        className={s.avatar}
        name={name}
        src={avatar}
        width={96}
        height={96}
        avatarContent={
          !editMode && <FileInput onChange={changeAvatarHandler} trigger={<EditIcon />} />
        }
      />
      {editMode ? (
        <form onSubmit={onSubmit}>
          <ControlledTextField
            control={control}
            name={'name'}
            label={'Nickname'}
            className={s.textField}
          />
          <Button type={'submit'} className={s.saveBtn} fullWidth>
            Save Changes
          </Button>
        </form>
      ) : (
        <>
          <div className={s.name}>
            <Typography variant={'h1'}>{name}</Typography>
            <EditIcon onClick={editModeOnHandler} className={s.editIcon} />
          </div>
          <Typography variant={'body2'} className={s.email}>
            {email}
          </Typography>
          <Button variant={'secondary'} onClick={logoutHandler} className={s.logoutBtn}>
            <LogoutIcon />
            Logout
          </Button>
        </>
      )}
    </Card>
  )
}
