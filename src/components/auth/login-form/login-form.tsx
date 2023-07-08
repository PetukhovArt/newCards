import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './login-form.module.scss'

import { loginSchema } from '@/common/schemas/login-schema.ts'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledCheckbox, ControlledTextField } from '@/components/ui/controlled'
import { Typography } from '@/components/ui/typography'

export type LoginFormType = z.infer<typeof loginSchema>

type LoginFormPropsType = {
  linkPath: string
  onSubmitHandler: (data: LoginFormType) => void
}
export const LoginForm = (props: LoginFormPropsType) => {
  const { linkPath, onSubmitHandler } = props

  const { handleSubmit, control } = useForm<LoginFormPropsType>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = handleSubmit(data => {
    console.log(data)
    onSubmitHandler(data)
  })

  return (
    <Card className={s.card}>
      <Typography variant={'large'}>Sign In</Typography>
      <form onSubmit={onSubmit}>
        <ControlledTextField control={control} name={'email'} label={'Email'} className={s.email} />
        <ControlledTextField
          control={control}
          name={'password'}
          type={'password'}
          label={'Password'}
          className={s.password}
        />
        <ControlledCheckbox
          control={control}
          name={'Remember me'}
          label={'Remember me'}
          className={s.rememberme}
        />
        <Typography variant={'body2'} className={s.subtitle}>
          Forgot Password?
        </Typography>
        <Button type="submit" fullWidth className={s.loginBtn}>
          Sign In
        </Button>
      </form>

      <Typography variant={'body2'} className={s.subtitle}>
        Don't have an account?
      </Typography>
      <Button as={'a'} variant={'link'} className={s.link} href={linkPath}>
        Sign Up
      </Button>
    </Card>
  )
}
