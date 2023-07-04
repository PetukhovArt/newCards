import s from './forgot-password.module.css'

import { useForgotPasswordMutation } from '@/features/user/service/user.api.ts'

export const ForgotPassword = () => {
  const [forgotPassword] = useForgotPasswordMutation()

  const forgotPasswordHandler = () => {
    const args = {
      email: 's1abak38@gmail.com',
      message: 'forgot',
    }

    forgotPassword(args)
  }

  return (
    <div className={s.container}>
      <div className={s.header}>
        Forgot your password?
        <button onClick={forgotPasswordHandler}>forgot</button>
      </div>
    </div>
  )
}
