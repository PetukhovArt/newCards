import s from './app.module.scss'

import LogOutIcon from '@/assets/icons/LogOutIcon.tsx'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography/typography.tsx'

export function App() {
  return (
    <div className={s.testDiv}>
      <span>Hello</span>
      <Button variant={'primary'}>primary</Button>
      <Button variant={'primary'}>
        <LogOutIcon />
        icon
      </Button>
      <Button variant={'secondary'}>secondary</Button>
      <Button variant={'secondary'}>icon</Button>
      <Button variant={'outlined'}>outlined</Button>
      <Button variant={'link'}>button as link</Button>
      <Button variant={'link'}>link as button</Button>

      <Typography variant={'body1'}>base text body1</Typography>
      <Typography as={'h1'} variant={'h1'} color={'link'}>
        Large
      </Typography>
    </div>
  )
}
