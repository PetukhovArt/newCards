import { useState } from 'react'

import s from './decks-page.module.scss'

import DeleteIcon from '@/assets/icons/delete-icon.tsx'
import { AddEditDeckModal, DeckType } from '@/components/modals/add-edit-deck-modal'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { TabSwitcher } from '@/components/ui/tab-switcher'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'

const tabOptions = [
  { value: 'my', label: 'My Cards' },
  { value: 'all', label: 'All Cards' },
]

export const DecksPage = () => {
  const [sliderValue, setSliderValue] = useState([0, 100])
  const [openAddModal, setOpenAddModal] = useState(false)
  const closeAddModalHandler = () => setOpenAddModal(false)
  const openAddModalHandler = () => setOpenAddModal(true)
  const addDeckHandler = (deck: DeckType) => console.log(deck)

  return (
    <div className={s.decksPage}>
      <div className={s.addNewDeck}>
        <Typography variant={'large'}>Decks</Typography>
        <Button onClick={openAddModalHandler}>Add New Deck</Button>
        <AddEditDeckModal
          open={openAddModal}
          onClose={closeAddModalHandler}
          onCancel={closeAddModalHandler}
          onConfirm={addDeckHandler}
          type={'add'}
        />
      </div>
      <div className={s.filters}>
        <TextField type={'search'} className={s.search} placeholder={'Input search'} />
        <TabSwitcher defaultValue={'all'} options={tabOptions} label={'Show decks'} />
        <Slider value={sliderValue} label={'Number of cards'} onChange={setSliderValue} multiple />
        <Button variant={'secondary'}>
          <DeleteIcon />
          Clear Filter
        </Button>
      </div>
    </div>
  )
}
