import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import logo from '@/assets/images/Logo.svg'
import {
  AddEditDeckModal,
  DeckType,
} from '@/components/modals/add-edit-deck-modal/add-edit-deck-modal.tsx'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Components/Modals/Add and Edit Deck Modal',
  component: AddEditDeckModal,
  tags: ['autodocs'],
  argTypes: {
    onClose: {
      action: 'close',
    },
    onConfirm: {
      action: 'confirm',
    },
    onCancel: {
      action: 'cancel',
    },
  },
} satisfies Meta<typeof AddEditDeckModal>

export default meta
type Story = StoryObj<typeof AddEditDeckModal>

export const AddDeckModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const closeHandler = () => setOpen(false)
    const openHandler = () => setOpen(true)
    const cancelHandler = () => console.log('cancel')
    const confirmHandler = (deck: DeckType) => console.log(deck)

    return (
      <>
        <Button onClick={openHandler}>Add Deck</Button>
        <AddEditDeckModal
          type={'add'}
          open={open}
          onClose={closeHandler}
          onCancel={cancelHandler}
          onConfirm={confirmHandler}
        />
      </>
    )
  },
}

export const EditDeckModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const closeHandler = () => setOpen(false)
    const openHandler = () => setOpen(true)
    const cancelHandler = () => console.log('cancel')
    const confirmHandler = (deck: DeckType) => console.log(deck)

    return (
      <>
        <Button onClick={openHandler}>Edit Deck</Button>
        <AddEditDeckModal
          type={'edit'}
          open={open}
          isPrivateDeck={true}
          deckName={'Some Deck Name'}
          deckCover={logo}
          onClose={closeHandler}
          onConfirm={confirmHandler}
          onCancel={cancelHandler}
        />
      </>
    )
  },
}
