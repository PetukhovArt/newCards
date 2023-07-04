import { RegisterForm } from '@/components/auth/register-form'

export const RegisterPage = () => {
  const someCallback = () => alert('go to login')

  return <RegisterForm linkPath={'/login'} onSubmitCallback={someCallback} />
}
