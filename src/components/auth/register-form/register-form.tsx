import s from './register-form.module.scss'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'

type RegisterFormPropsType = {
  linkPath: string
  onSubmitCallback: () => void
}

export const RegisterForm = (props: RegisterFormPropsType) => {
  const { linkPath, onSubmitCallback } = props

  return (
    <Card className={s.card}>
      <Typography variant={'large'}>Sign Up</Typography>
      <TextField label={'Email'} className={s.email} />
      <TextField type={'password'} label={'Password'} className={s.password} />
      <TextField type={'password'} label={'Confirm password'} className={s.confirmPassword} />
      <Button fullWidth className={s.registerBtn} onClick={onSubmitCallback}>
        Sign Up
      </Button>
      <Typography variant={'body2'} className={s.subtitle}>
        Already have an account?
      </Typography>
      <Button as={'a'} variant={'link'} className={s.link} href={linkPath}>
        Sign In
      </Button>
    </Card>
  )
}
