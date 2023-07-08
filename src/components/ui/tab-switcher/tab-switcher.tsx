import * as Tabs from '@radix-ui/react-tabs'

import s from './tab-switcher.module.scss'

import { TabTrigger } from '@/components/ui/tab-switcher/tab-trigger'

type OptionType = {
  value: string
  label?: string
  disabled?: boolean
}

type TabSwitcherPropsType = {
  options: OptionType[]
  value?: string
  defaultValue?: string
  disabled?: boolean
  orientation?: 'horizontal' | 'vertical'
  activationMode?: 'automatic' | 'manual'
  loop?: boolean
  onChange?: (value: string) => void
}

export const TabSwitcher = (props: TabSwitcherPropsType) => {
  const {
    options,
    value,
    defaultValue,
    disabled,
    orientation,
    activationMode = 'manual',
    loop = true,
    onChange,
  } = props

  return (
    <Tabs.Root
      value={value}
      defaultValue={defaultValue}
      orientation={orientation}
      activationMode={activationMode}
      onValueChange={onChange}
      className={s.TabsRoot}
    >
      <Tabs.List loop={loop} className={s.TabsList}>
        {options.map(option => (
          <TabTrigger
            key={option.value}
            disabled={option.disabled || disabled}
            value={option.value}
          >
            {option.label}
          </TabTrigger>
        ))}
      </Tabs.List>
    </Tabs.Root>
  )
}
