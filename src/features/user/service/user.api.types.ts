export type ForgotArgs = {
  email: string
  from?: string
  message: string
}
export type ForgotRes = {
  info: string
  error?: string
}
export type SetNewPasswordArgs = {
  password: string
  resetPasswordToken: string
}
