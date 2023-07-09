import { ChangeEvent, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Modal } from '@/components/ui/modals'
import { TextField } from '@/components/ui/text-field'

export type DeckType = {
  deckName: string
  isPrivate: boolean
}

type ModalConditional =
  | {
      type: 'edit'
      isPrivateDeck: boolean
      deckName: string
    }
  | {
      type: 'add'
      isPrivateDeck?: never
      deckName?: never
    }

type AddEditPackModalPropsType = {
  open: boolean
  onClose: () => void
  onCancel: () => void
  onConfirm: (pack: DeckType) => void
} & ModalConditional

export const AddEditDeckModal = (props: AddEditPackModalPropsType) => {
  const { open, type, deckName, isPrivateDeck, onClose, onCancel, onConfirm } = props

  const [name, setName] = useState(deckName ?? '')
  const changeDeckNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }
  const [privateDeck, setPrivateDeck] = useState(isPrivateDeck || false)
  const changePrivateDeckHandler = (checked: boolean) => {
    setPrivateDeck(checked)
  }

  const confirmHandler = () => {
    onConfirm?.({ deckName: name, isPrivate: privateDeck })
  }

  return (
    <Modal
      title={type === 'add' ? 'Add New Pack' : 'Edit Pack'}
      open={open}
      onClose={onClose}
      renderActionButton={() => (
        <Button onClick={confirmHandler}>{type === 'add' ? 'Add New Deck' : 'Save Changes'}</Button>
      )}
      renderCancelButton={() => (
        <Button onClick={onCancel} variant={'secondary'}>
          Cancel
        </Button>
      )}
    >
      <TextField label={'Deck Name'} value={name} onChange={changeDeckNameHandler} />
      <Checkbox checked={privateDeck} onChange={changePrivateDeckHandler} label={'Private deck'} />
    </Modal>
  )
}
