export type ForgotArgs = {
  email: string
}
export type ForgotRes = {
  info: string
  error?: string
}
export type SetNewPasswordArgs = {
  password: string
  resetPasswordToken: string
}

export type LoginArgs = {
  email: string
  password: string
  rememberMe: boolean
}
export type RegisterRes = {
  addedUser: AddUserRes
}
export type AddUserRes = {
  _id: string
  email: string
  rememberMe: boolean
  isAdmin: boolean
  name: string
  verified: boolean
  publicCardPacksCount: number
  created: string
  updated: string
  __v: number
}
export type User = {
  _id: string
  email: string
  name: string
  avatar?: string
  publicCardPacksCount: number
  // количество колод
  created: Date
  updated: Date
  isAdmin: boolean
  verified: boolean // подтвердил ли почту
  rememberMe: boolean
  error?: string
}
export type UpdatedProfile = {
  updatedUser: User
  error?: string
}
export type UpdateProfileArgs = {
  name?: string
  avatar?: string
}
export type LogoutRes = {
  info: string
  error: string
}
