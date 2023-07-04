import { useController, useForm } from 'react-hook-form'

import s from './forgot-password-form.module.scss'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'

type FormValues = {
  email: string
}
type ForgotPasswordFormType = {
  onSubmitCallback: (data: FormValues) => void
}

export const ForgotPasswordForm = ({ onSubmitCallback }: ForgotPasswordFormType) => {
  const { handleSubmit, control } = useForm<FormValues>()
  const onSubmit = (data: FormValues) => {
    if (onSubmitCallback) {
      onSubmitCallback(data)
    } else {
      console.log(data)
    }
  }
  const {
    field: { value, onChange },
  } = useController({
    name: 'email',
    control,
  })

  return (
    <Card className={s.card}>
      <Typography variant={'large'} className={s.title}>
        Forgot your password?
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField label={'Email'} value={value} onChange={onChange} className={s.textfield} />
        <Typography variant={'body2'} color={'form'} className={s.description}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button type="submit" fullWidth={true} className={s.submit}>
          Send Instructions
        </Button>
      </form>
      <Typography variant={'body2'} color={'form'} className={s.question}>
        Did you remember your password?
      </Typography>
      <Button as={'a'} variant={'link'} className={s.link}>
        Try logging in
      </Button>
    </Card>
  )
}
