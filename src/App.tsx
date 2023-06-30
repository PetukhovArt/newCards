import { useState } from 'react'

import s from './app.module.scss'

import LogOutIcon from '@/assets/icons/LogOutIcon.tsx'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Modal } from '@/components/ui/modals'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography/typography.tsx'

export function App() {
  // const [openModal, setOpenModal] = useState(false)
  const [checked, setChecked] = useState<boolean>(false)
  // const checkedHandler = () => {
  //   setChecked(!checked)
  // }
  const [value, setValue] = useState<string>('')

  const handler = () => {
    setValue('')
  }

  return (
    <div className={s.testDiv}>
      <Modal
        renderTriggerButton={() => <Button>Trigger Button</Button>}
        renderCancelButton={() => <Button>Cancel</Button>}
        renderActionButton={() => <Button>Save</Button>}
        contentSeparator={true}
        showCloseButton={true}
        title={'test modal'}
        size={'md'}
      >
        <TextField label={'first'} />
        <TextField label={'second'} />
        <TextField label={'third'} />
      </Modal>

      <TextField
        value={value}
        placeholder={'placeholder'}
        // iconStart={<CloseIcon />}
        // iconEnd={<EyeIcon />}
        // search={true}
        // inputType={'password'}
        onClickClearValue={handler}
        // errorMessage={'fdgfdgdg'}
        onChange={e => setValue(e.target.value)}
        // disabled={true}
      />
      <Checkbox checked={checked} onChange={setChecked} label={'Check-box'} />
      {/*<Header/>*/}
      <Card>
        <Typography variant={'body1'}>Card Example</Typography>
      </Card>
      <span>Hello</span>
      <Button variant={'primary'}>Button primary</Button>
      <Button variant={'primary'}>
        <LogOutIcon />
        with icon
      </Button>
      <Button variant={'secondary'}>secondary</Button>
      <Button variant={'outlined'}>outlined</Button>
      <Button variant={'link'}>link as button</Button>

      <Typography variant={'body1'}>base text body1</Typography>
      <Typography as={'h1'} variant={'h1'} color={'link'}>
        Large
      </Typography>
    </div>
  )
}
