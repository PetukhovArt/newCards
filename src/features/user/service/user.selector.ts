import { RootState } from '@/app/store.ts'

//@ts-ignore
export const userEmail_Selector = (state: RootState) => state.userApi.user.email
//TODO selector
