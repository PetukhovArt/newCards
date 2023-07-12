import s from './creat-new-password.module.scss'

import { CreatNewPasswordForm, NewPasswordFormValues } from '@/components/auth/creat-new-password'

export const CreatNewPasswordPage = () => {
  const creatNewPasswordHandler = (data: NewPasswordFormValues) => console.log(data)

  return (
    <div className={s.container}>
      <CreatNewPasswordForm onSubmitCallback={creatNewPasswordHandler} />
    </div>
  )
}
