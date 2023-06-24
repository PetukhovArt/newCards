// eslint-disable-next-line import/no-unresolved

import { Button } from './components/ui/button/button.tsx'

export function App() {
  return (
    <div>
      <Button variant={'primary'} as="a" href={'/link'}>
        Hello
      </Button>
      <Button variant={'primary'}>Hello</Button>
    </div>
  )
}
