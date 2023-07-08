import s from './check-email.module.scss'

import MailIcon from '@/assets/icons/mail-icon.tsx'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

type CheckEmailProps = {
  email: string
  linkPath?: string
}

export const CheckEmail = (props: CheckEmailProps) => {
  return (
    <Card className={s.card}>
      <Typography variant={'large'} className={s.title}>
        Check Email
      </Typography>
      <MailIcon className={s.icon} />
      <Typography variant={'body2'} color={'form'} className={s.description}>
        We’ve sent an Email with instructions to {props.email ? props.email : 'example@mail.com'}
      </Typography>
      <Button as={'a'} fullWidth={true} className={s.link} href={props.linkPath}>
        Back to Sign In
      </Button>
    </Card>
  )
}
