import s from './forgot-password.module.scss'

import { ForgotFormValues, ForgotPasswordForm } from '@/components/auth/forgot-password-form'
import { useForgotPasswordMutation } from '@/features/user/service/user.api.ts'

export const ForgotPassword = () => {
  const [forgotPassword] = useForgotPasswordMutation()

  const forgotPasswordHandler = (data: ForgotFormValues) => {
    forgotPassword(data)
  }

  return (
    <div className={s.container}>
      <ForgotPasswordForm onSubmitCallback={forgotPasswordHandler} linkPath={'/login'} />
    </div>
  )
}
