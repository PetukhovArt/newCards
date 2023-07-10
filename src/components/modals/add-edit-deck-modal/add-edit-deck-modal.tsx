import { ChangeEvent, useState } from 'react'

import s from './add-edit-deck-modal.module.scss'

import ChangeCoverIcon from '@/assets/icons/change-cover-icon.tsx'
import nocover from '@/assets/images/no-cover.jpg'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { FileInput } from '@/components/ui/file-input'
import { Modal } from '@/components/ui/modals'
import { TextField } from '@/components/ui/text-field'

export type DeckType = {
  deckName: string
  isPrivate: boolean
  deckCover?: string
}

type ModalConditional =
  | {
      type: 'edit'
      isPrivateDeck: boolean
      deckName: string
      deckCover: string
    }
  | {
      type: 'add'
      isPrivateDeck?: never
      deckName?: never
      deckCover?: never
    }

type AddEditPackModalPropsType = {
  open: boolean
  onClose: () => void
  onCancel: () => void
  onConfirm: (pack: DeckType) => void
} & ModalConditional

export const AddEditDeckModal = (props: AddEditPackModalPropsType) => {
  const { open, type, deckName, deckCover, isPrivateDeck, onClose, onCancel, onConfirm } = props

  const [name, setName] = useState(deckName || '')
  const changeDeckNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }
  const [privateDeck, setPrivateDeck] = useState(isPrivateDeck || false)
  const changePrivateDeckHandler = (checked: boolean) => {
    setPrivateDeck(checked)
  }
  const [cover, setCover] = useState(deckCover || '')
  const changeDeckCoverHandler = (deckCover: File) => {
    setCover(deckCover.name)
  }

  const confirmHandler = () => {
    onConfirm?.({ deckName: name, isPrivate: privateDeck, deckCover: cover })
    setName('')
    setPrivateDeck(false)
    setCover('')
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
      <img src={cover || nocover} alt={'cover'} className={s.cover} />
      <FileInput
        onChange={changeDeckCoverHandler}
        trigger={
          <Button variant={'secondary'} fullWidth>
            <ChangeCoverIcon />
            {cover ? 'Change Cover' : 'Set Cover'}
          </Button>
        }
      />
      <TextField label={'Deck Name'} value={name} onChange={changeDeckNameHandler} />
      <Checkbox checked={privateDeck} onChange={changePrivateDeckHandler} label={'Private deck'} />
    </Modal>
  )
}
