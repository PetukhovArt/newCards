import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { DeletePackModal } from '@/components/modals/delete-pack-modal/delete-pack-modal.tsx'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modals'

const meta = {
  title: 'Modals/DeletePackModal',
  component: DeletePackModal,
  tags: ['autodocs'],
  argTypes: {
    onClose: {
      action: 'close',
    },
    onDelete: {
      action: 'delete',
    },
    onCancel: {
      action: 'cancel',
    },
  },
} satisfies Meta<typeof DeletePackModal>

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  render: args => {
    const [open, setOpen] = useState(false)
    const closeHandler = () => setOpen(false)
    const openHandler = () => setOpen(true)

    return (
      <>
        <Button onClick={openHandler}>Delete Pack</Button>
        <DeletePackModal {...args} open={open} deckName={'Some Name'} onClose={closeHandler} />
      </>
    )
  },
}
