import { Meta, StoryObj } from '@storybook/react'

import Avatar from '../../../assets/images/Avatart.png'
import { Typography } from '../typography'

import s from './dropDownMenu.module.scss'
import { Dropdown, DropdownItemWithIcon } from './dropDownMenu.tsx'

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <></>,
    trigger: (
      <div className={s.trigger}>
        <Typography variant={'subtitle1'}>{'Ivan'}</Typography>
        <img src={Avatar} />
      </div>
    ),
  },
}
