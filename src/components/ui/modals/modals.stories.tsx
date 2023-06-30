import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from '@/components/ui/modals/modal.tsx'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    open: {
      options: ['primary', 'secondary', 'outlined', 'link'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof Modal>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
  },
}
export default {}
