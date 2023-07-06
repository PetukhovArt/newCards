import { NavLink, Outlet } from 'react-router-dom'

import s from './app.module.scss'

import { Header } from '@/components/ui/header'

export function App() {
  return (
    <div className="App">
      <Header isLoggedIn={false} name={'ORK'} avatar={''} />
      <div className={s.container}>
        <div className={s.main}>
          <Outlet />
        </div>
      </div>
      <div className={s.navigation}>
        <NavLink to={'/profile'}>profile</NavLink>
        <NavLink to={'/register'}>register</NavLink>
        <NavLink to={'/forgot-password'}>forgot password</NavLink>
        <NavLink to={'/check-email'}>check email</NavLink>
      </div>
    </div>
  )
}
