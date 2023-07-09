import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { DeleteDeckModal } from '@/components/modals/delete-deck-modal/delete-deck-modal.tsx'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modals'

const meta = {
  title: 'Components/Modals/DeleteDeckModal',
  component: DeleteDeckModal,
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
} satisfies Meta<typeof DeleteDeckModal>

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  render: args => {
    const [open, setOpen] = useState(false)
    const closeHandler = () => setOpen(false)
    const openHandler = () => setOpen(true)

    return (
      <>
        <Button onClick={openHandler}>Delete Deck</Button>
        <DeleteDeckModal {...args} open={open} deckName={'Some Name'} onClose={closeHandler} />
      </>
    )
  },
}
