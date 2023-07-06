import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import './styles/index.scss'

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { App } from '@/app/App.tsx'
import { store } from '@/app/store.ts'
import { CheckEmailPage } from '@/features/user/pages/check-email-page/check-email-page.tsx'
import { ForgotPasswordPage } from '@/features/user/pages/forgot-password-page/forgot-password-page.tsx'
import { ProfilePage } from '@/features/user/pages/profile-page'
import { RegisterPage } from '@/features/user/pages/register-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'check-email',
        element: <CheckEmailPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPasswordPage />,
      },
    ],
  },
])

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
