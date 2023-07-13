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
  linkPath: { login: string; forgotPassword: string }
  onSubmitHandler: (data: LoginFormType) => void
}
export const LoginForm = (props: LoginFormPropsType) => {
  const { linkPath, onSubmitHandler } = props

  const { control, handleSubmit } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  })
  // console.log(errors)
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
        <div className={s.remember_lock}>
          <ControlledCheckbox control={control} name={'rememberMe'} label={'Remember me'} />
        </div>

        <Button as={'a'} variant={'link'} href={linkPath.forgotPassword} className={s.link_fogot}>
          Forgot Password?
        </Button>

        <Button type="submit" fullWidth className={s.loginBtn}>
          Sign In
        </Button>
      </form>
      <Typography variant={'body2'} className={s.subtitle}>
        Do not have an account?
      </Typography>
      <Button as={'a'} variant={'link'} className={s.link} href={linkPath.login}>
        Sign Up
      </Button>
    </Card>
  )
}
