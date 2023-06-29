import { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher } from '@/components/ui/tab-switcher/tab-switcher.tsx'
import { TabTrigger } from '@/components/ui/tab-switcher/tab-trigger'

const meta = {
  title: 'Components/TabSwitcher',
  component: TabSwitcher,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultTabSwitcher: Story = {
  args: {
    children: (
      <>
        <TabTrigger value={'tab1'}>Switcher</TabTrigger>
        <TabTrigger value={'tab2'}>Switcher</TabTrigger>
        <TabTrigger value={'tab3'}>Switcher</TabTrigger>
      </>
    ),
  },
}

export const DisabledTabSwitcher: Story = {
  args: {
    children: (
      <>
        <TabTrigger disabled={true} value={'tab1'}>
          Switcher
        </TabTrigger>
        <TabTrigger disabled={true} value={'tab2'}>
          Switcher
        </TabTrigger>
        <TabTrigger disabled={true} value={'tab3'}>
          Switcher
        </TabTrigger>
      </>
    ),
  },
}
