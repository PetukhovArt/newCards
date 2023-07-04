import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { userApi } from '@/features/user/service/user.api.ts'

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
  // Добавляем middleware для использования дополнительных функций rtk-query,
  // таких как кэширование, инвалидация и pooling.
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userApi.middleware),
})

// Метод setupListeners, подключает слушатели событий фокуса (refetchOnFocus) и повторного подключения
// (refetchOnReconnect ), чтобы автоматически перезагружать данные при возвращении на страницу
// или восстановлении подключения
setupListeners(store.dispatch)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
