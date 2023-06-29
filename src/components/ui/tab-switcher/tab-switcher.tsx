import { ReactNode } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import s from './tab-switcher.module.scss'

type TabSwitcherPropsType = {
  value?: string
  defaultValue?: string
  children?: ReactNode
  orientation?: 'horizontal' | 'vertical'
  loop?: boolean
  onChange?: (value: string) => void
}

export const TabSwitcher = (props: TabSwitcherPropsType) => {
  const { value, defaultValue, children, orientation, loop = true, onChange } = props

  return (
    <Tabs.Root
      value={value}
      defaultValue={defaultValue}
      orientation={orientation}
      onValueChange={onChange}
      className={s.TabsRoot}
    >
      <Tabs.List loop={loop} className={s.TabsList}>
        {children}
      </Tabs.List>
    </Tabs.Root>
  )
}
