import s from './check-email.module.scss'

// import { useAppSelector } from '@/common/hooks/useAppSelector.ts'
import { CheckEmail } from '@/components/auth/check-email'
// import { userEmail_Selector } from '@/features/user/service/user.selector.ts'

export const CheckEmailPage = () => {
  // const email = useAppSelector(userEmail_Selector)
  const email = null

  return (
    <div className={s.container}>
      <CheckEmail linkPath={'/login'} email={email ? email : 'test@mail.com'} />
    </div>
  )
}
