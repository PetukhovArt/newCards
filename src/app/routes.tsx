import { createHashRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom'

import { App } from '@/app/App.tsx'
import { CheckEmailPage } from '@/features/user/pages/check-email-page/check-email-page.tsx'
import { DecksPage } from '@/features/user/pages/decks-page/decks-page.tsx'
import { ForgotPasswordPage } from '@/features/user/pages/forgot-password-page/forgot-password-page.tsx'
import { ProfilePage } from '@/features/user/pages/profile-page'
import { RegisterPage } from '@/features/user/pages/register-page'

export enum RouteNames {
  START_PAGE = '/',
  ERROR_PAGE = '*',
  LOGIN = '/login',
  REGISTER = '/register',
  CHECK_EMAIL = '/check-email',
  SET_NEW_PASSWORD = '/set-new-password',
  FORGOT_PASSWORD = '/forgot-password',
  PROFILE = '/profile',
  DECKS = '/decks',
  LEARN = '/learn/:packId',
  CARDS = '/cards',
  CARDS_PACK_ID = '/cards/pack/:packId',
}

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path={RouteNames.START_PAGE} element={<App />}>
      <Route path={RouteNames.START_PAGE} element={<Navigate to={RouteNames.PROFILE} />} />
      {/*<Route path={RouteNames.ERROR_PAGE} element={<ErrorPage />} />*/}
      <Route path={RouteNames.PROFILE} element={<ProfilePage />} />
      {/*<Route path={RouteNames.LOGIN} element={<Login />} />*/}
      <Route path={RouteNames.REGISTER} element={<RegisterPage />} />
      <Route path={RouteNames.CHECK_EMAIL} element={<CheckEmailPage />} />
      {/*<Route path={RouteNames.SET_NEW_PASSWORD} element={<SetPassword />} />*/}
      {/*<Route path={`${RouteNames.SET_NEW_PASSWORD}/:token`} element={<SetPassword />} />*/}
      <Route path={RouteNames.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
      <Route path={RouteNames.DECKS} element={<DecksPage />} />
      {/*<Route path={RouteNames.LEARN} element={<Learn />} />*/}
      {/*<Route path={RouteNames.CARDS} element={<Cards />} />*/}
      {/*<Route path={RouteNames.CARDS_PACK_ID} element={<Cards />} />*/}
    </Route>
  )
)
