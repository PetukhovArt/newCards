import { useState } from 'react'

import { NavLink, Outlet } from 'react-router-dom'

import s from './app.module.scss'

import { Header } from '@/components/ui/header'
import { SuperSelect } from '@/components/ui/select'

export function App() {
  const [value, setValue] = useState<number>(1)

  const avatar =
    'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'

  return (
    <div className="App">
      <Header isLoggedIn={true} name={'ORK'} avatar={avatar} email={'samiykrutoy@yandex.com'} />
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
        <SuperSelect
          value={value}
          options={[1, 2, 3, 4, 5]}
          onValueChange={(value: number) => setValue(value)}
        />
      </div>
    </div>
  )
}
