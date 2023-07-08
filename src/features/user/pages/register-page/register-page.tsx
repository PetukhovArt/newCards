import { RegisterForm, RegisterFormType } from '@/components/auth/register-form'

export const RegisterPage = () => {
  const registerHandler = (data: RegisterFormType) => console.log(data)

  return <RegisterForm linkPath={'/login'} onSubmitHandler={registerHandler} />
}
