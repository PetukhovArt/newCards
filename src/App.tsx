import { Button } from './components/ui/button/button.tsx'

export function App() {
  return (
    <div>
      <span>Hello</span>
      <Button variant={'primary'}>Test button</Button>
      <Button variant={'primary'} as={'a'} href={'/link'}>
        Test button link
      </Button>
    </div>
  )
}
