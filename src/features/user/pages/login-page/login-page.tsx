import { LoginForm, LoginFormType } from '@/components/auth/login-form'

export const LoginPage = () => {
  const loginHandler = (data: LoginFormType) => console.log(data)

  return (
    <LoginForm
      linkPath={{ login: '/register', forgotPassword: '/forgot-password' }}
      onSubmitHandler={loginHandler}
    />
  )
}
