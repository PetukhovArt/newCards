import { z } from 'zod'

export const creatNewPasswordSchema = z.object({
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(8, 'Password must be at least 8 characters'),
})
