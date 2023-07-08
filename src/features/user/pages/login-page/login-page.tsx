import { LoginForm } from '@/components/auth/login-form'

export const LoginPage = () => {
  const loginHandler = (data: any) => console.log(data)

  return <LoginForm />
}
