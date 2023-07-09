import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modals'
import { Typography } from '@/components/ui/typography'

type DeletePackModalPropsType = {
  open: boolean
  deckName: string
  onClose: () => void
  onDelete?: () => void
  onCancel?: () => void
}

export const DeleteDeckModal = (props: DeletePackModalPropsType) => {
  const { open, deckName, onClose, onDelete, onCancel } = props

  return (
    <Modal
      title={'Delete Deck'}
      open={open}
      onClose={onClose}
      renderActionButton={() => <Button onClick={onDelete}>Delete Deck</Button>}
      renderCancelButton={() => (
        <Button onClick={onCancel} variant={'secondary'}>
          Cancel
        </Button>
      )}
    >
      <Typography variant={'body1'}>
        Do you really want to remove <b>{deckName}</b>? <br />
        All cards will be deleted.
      </Typography>
    </Modal>
  )
}
