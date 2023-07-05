import { ChangeEvent, useState } from 'react'

import s from './profile.module.scss'

import EditIcon from '@/assets/icons/edit-icon.tsx'
import LogoutIcon from '@/assets/icons/logout-icon.tsx'
import { Avatar } from '@/components/auth/profile/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'

export type UpdateProfileType = {
  name?: string
  avatar?: string
}

type ProfilePropsType = {
  name: string
  email: string
  avatar: string
  logoutHandler: () => void
  changeProfileHandler: (profile: UpdateProfileType) => void
}

export const Profile = (props: ProfilePropsType) => {
  const { name, email, avatar, logoutHandler, changeProfileHandler } = props

  const [editMode, setEditMode] = useState(false)
  const [newName, setNewName] = useState('')

  const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewName(e.currentTarget.value)
  }
  const editModeOnHandler = () => {
    setNewName(name)
    setEditMode(true)
  }
  const editModeOffHandler = () => {
    changeProfileHandler({ name: newName })
    setEditMode(false)
  }

  return (
    <Card className={s.card}>
      <Typography variant={'large'}>Personal Information</Typography>
      <Avatar
        className={s.avatar}
        name={name}
        avatar={avatar}
        avatarContent={!editMode && <EditIcon />}
      />
      {editMode ? (
        <TextField
          value={newName}
          onChange={changeNameHandler}
          label={'Nickname'}
          className={s.textField}
        />
      ) : (
        <div className={s.name}>
          <Typography variant={'h1'}>{name}</Typography>
          <EditIcon onClick={editModeOnHandler} className={s.editIcon} />
        </div>
      )}
      {!editMode && (
        <Typography variant={'body2'} className={s.email}>
          {email}
        </Typography>
      )}
      {editMode ? (
        <Button onClick={editModeOffHandler} className={s.saveBtn} fullWidth>
          Save Changes
        </Button>
      ) : (
        <Button variant={'secondary'} onClick={logoutHandler} className={s.logoutBtn}>
          <LogoutIcon />
          Logout
        </Button>
      )}
    </Card>
  )
}
