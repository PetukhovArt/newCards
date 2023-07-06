import { Outlet } from 'react-router-dom'

import s from './app.module.scss'

import { Header } from '@/components/ui/header'

export function App() {
  return (
    <div className="App">
      <Header isLoggedIn={false} name={'ORK'} avatar={''} />
      <div className={s.main}>
        <Outlet />
      </div>
    </div>
  )
}
