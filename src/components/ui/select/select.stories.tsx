import { Meta, StoryObj } from '@storybook/react'

import { SuperSelect } from './super-select.tsx'

const meta = {
  title: 'Components/SuperSelect',
  component: SuperSelect,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SuperSelect>

export default meta
type Story = StoryObj<typeof SuperSelect>

export const DefaultSelect: Story = {
  render: () => {
    return (
      <>
        {/*<Select {...args}></Select>*/}
        <SuperSelect options={['1', '2', '3', '4']} showOptionSeparator={true}></SuperSelect>
      </>
    )
  },
}
