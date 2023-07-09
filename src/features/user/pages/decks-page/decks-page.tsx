import { useState } from 'react'

import s from './decks-page.module.scss'

import DeleteIcon from '@/assets/icons/delete-icon.tsx'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { TabSwitcher } from '@/components/ui/tab-switcher'
import { TextField } from '@/components/ui/text-field'

export const DecksPage = () => {
  const [sliderValue, setSliderValue] = useState([0, 100])
  const tabOptions = [
    { value: 'my', label: 'My Cards' },
    { value: 'all', label: 'All Cards' },
  ]

  return (
    <div className={s.decksPage}>
      <div className={s.filters}>
        <TextField type={'search'} className={s.search} />
        <TabSwitcher defaultValue={'all'} options={tabOptions} />
        <Slider value={sliderValue} onChange={setSliderValue} multiple />
        <Button variant={'secondary'}>
          <DeleteIcon />
          Clear Filter
        </Button>
      </div>
    </div>
  )
}
