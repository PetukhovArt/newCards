import { z } from 'zod'

export const profileSchema = z.object({
  name: z.string().trim().nonempty('Required').min(3, 'must be at least 3 characters').optional(),
})
