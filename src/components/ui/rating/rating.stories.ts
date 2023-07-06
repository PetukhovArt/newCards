import { Meta, StoryObj } from '@storybook/react'

import { Rating } from '@/components/ui/rating/rating.tsx'

const meta = {
  title: 'Components/Rating',
  component: Rating,
  tags: ['autodocs'],
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

export const Rating1: Story = {
  args: { value: 1 },
}
export const Rating2: Story = {
  args: { value: 2 },
}

export const Rating3: Story = {
  args: { value: 3 },
}

export const Rating4: Story = {
  args: { value: 4 },
}

export const Rating5: Story = {
  args: { value: 5 },
}
