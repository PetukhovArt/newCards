import { Outlet } from 'react-router-dom'

import s from '@/app/app.module.scss'
import { Header } from '@/components/ui/header'
import { CheckEmailPage } from '@/features/user/pages/check-email-page/check-email-page.tsx'

export function App() {
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
      <CheckEmailPage />
      <div className={s.main}>
        <Outlet />
      </div>
    </div>
  )
}
