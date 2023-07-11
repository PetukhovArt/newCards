import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './creat-new-password-form.module.scss'

import { creatNewPasswordSchema } from '@/common/schemas/creat-new-password-schema.ts'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field.tsx'
import { Typography } from '@/components/ui/typography'

export type NewPasswordFormValues = {
  password: string
}
type NewPasswordFormType = {
  onSubmitCallback: (data: NewPasswordFormValues) => void
  linkPath?: string
}

type Form = z.infer<typeof creatNewPasswordSchema>

export const CreatNewPasswordForm = ({ onSubmitCallback }: NewPasswordFormType) => {
  const { handleSubmit, control } = useForm<Form>({
    resolver: zodResolver(creatNewPasswordSchema),
    mode: 'onSubmit',
  })

  const onSubmit = handleSubmit(data => {
    onSubmitCallback(data)
  })

  return (
    <Card className={s.card}>
      <Typography variant={'large'} className={s.title}>
        Create new password
      </Typography>

      <form onSubmit={onSubmit}>
        <ControlledTextField
          control={control}
          label={'Password'}
          name={'password'}
          className={s.textfield}
        />
        <Typography variant={'body2'} color={'form'} className={s.description}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button type="submit" fullWidth={true} className={s.submit}>
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
