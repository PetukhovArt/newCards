import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
    credentials: 'include',
  }),
  endpoints: builder => ({
    me: builder.query<unknown, void>({
      query: () => ({
        url: 'v1/auth/me',
      }),
    }),
    login: builder.mutation<any, { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: 'v1/auth/login',
        method: 'POST',
        body: { email, password },
      }),
    }),
  }),
})

export const { useMeQuery } = authApi
