import { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher } from '@/components/ui/tab-switcher/tab-switcher.tsx'

const meta = {
  title: 'Components/TabSwitcher',
  component: TabSwitcher,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: [
      { value: 'tab1', label: 'Switcher' },
      { value: 'tab2', label: 'Switcher' },
      { value: 'tab3', label: 'Switcher' },
    ],
  },
}

export const Disabled: Story = {
  args: {
    options: [
      { value: 'tab1', label: 'Switcher' },
      { value: 'tab2', label: 'Switcher' },
      { value: 'tab3', label: 'Switcher' },
    ],
    disabled: true,
  },
}
export const WithLabel: Story = {
  args: {
    options: [
      { value: 'tab1', label: 'Switcher' },
      { value: 'tab2', label: 'Switcher' },
      { value: 'tab3', label: 'Switcher' },
    ],
    label: 'Show Decks',
  },
}
export const DisabledOptions: Story = {
  args: {
    options: [
      { value: 'tab1', label: 'Switcher', disabled: true },
      { value: 'tab2', label: 'Switcher' },
      { value: 'tab3', label: 'Switcher' },
    ],
  },
}
