import { useState } from 'react'

import { Outlet } from 'react-router-dom'

import s from './app.module.scss'

import { Header } from '@/components/ui/header'
import { SuperSelect } from '@/components/ui/select'

export function App() {
  const [value, setValue] = useState(1)

  return (
    <div className="App">
      {/*<ToastContainer*/}
      {/*  position="top-center"*/}
      {/*  autoClose={4000}*/}
      {/*  hideProgressBar={false}*/}
      {/*  newestOnTop*/}
      {/*  closeOnClick*/}
      {/*  rtl={false}*/}
      {/*  pauseOnFocusLoss*/}
      {/*  draggable*/}
      {/*  pauseOnHover*/}
      {/*  theme="light"*/}
      {/*/>*/}
      <Header isLoggedIn={false} name={'ORK'} avatar={''} />
      <SuperSelect
        value={value}
        options={[1, 2, 3, 4, 5]}
        onValueChange={(value: number) => setValue(value)}
      />
      <div className={s.main}>
        <Outlet />
      </div>
    </div>
  )
}
