import { ReactNode } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import s from './tab-trigger.module.scss'

import { Typography } from '@/components/ui/typography'

type TabTriggerPropsType = {
  value?: string
  disabled?: boolean
  children?: ReactNode
}
export const TabTrigger = (props: TabTriggerPropsType) => {
  const { value = '', disabled = false, children } = props

  return (
    <Tabs.Trigger
      value={value}
      disabled={disabled}
      className={`${s.TabsTrigger} ${disabled && s.disabled}`}
    >
      <Typography variant={'body1'}>{children}</Typography>
    </Tabs.Trigger>
  )
}
