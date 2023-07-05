import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './forgot-password-form.module.scss'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field.tsx'
import { Typography } from '@/components/ui/typography'

export type ForgotFormValues = {
  email: string
}
type ForgotPasswordFormType = {
  onSubmitCallback: (data: ForgotFormValues) => void
  linkPath: string
}
const schema = z.object({
  email: z.string().trim().email('Invalid email address').nonempty('Enter email'),
})

type Form = z.infer<typeof schema>

export const ForgotPasswordForm = ({ onSubmitCallback, linkPath }: ForgotPasswordFormType) => {
  const { handleSubmit, control } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  const onSubmit = handleSubmit(data => {
    onSubmitCallback(data)
  })

  return (
    <Card className={s.card}>
      <Typography variant={'large'} className={s.title}>
        Forgot your password?
      </Typography>

      <form onSubmit={onSubmit}>
        <ControlledTextField
          control={control}
          label={'Email'}
          name={'email'}
          className={s.textfield}
        />
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
      <Button as={'a'} variant={'link'} className={s.link} href={linkPath}>
        Try logging in
      </Button>
    </Card>
  )
}
