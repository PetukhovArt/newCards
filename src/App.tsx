import s from './app.module.scss'

import LogOutIcon from '@/assets/icons/LogOutIcon.tsx'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Modal } from '@/components/ui/modals'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography/typography.tsx'

export function App() {
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

      {/*<Checkbox checked={checked} onChange={setChecked} label={'Check-box'} />*/}
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
