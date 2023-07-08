import { Meta, StoryObj } from '@storybook/react'

import { Typography } from '../typography'

import { Dropdown } from './dropDownMenu.tsx'

import DeleteIcon from '@/assets/icons/delete-icon.tsx'
import EditIcon from '@/assets/icons/edit-icon.tsx'
import LearnIcon from '@/assets/icons/learn-icon.tsx'
import LogoutIcon from '@/assets/icons/logout-icon.tsx'
import PersonIcon from '@/assets/icons/person-icon.tsx'
import { Button } from '@/components/ui/button'
import { DropdownItem } from '@/components/ui/dropDownMenu/drop-down-item'
import { DropDownSeparator } from '@/components/ui/dropDownMenu/drop-down-separator/drop-down-separator.tsx'
import { ProfileInfo } from '@/components/ui/header/profile-info'

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const WithProfile: Story = {
  render: args => {
    return (
      <Dropdown {...args} trigger={<ProfileInfo name={'Anton'} avatar={''} />}>
        <>
          <DropdownItem>
            <ProfileInfo name={'Anton'} avatar={''} />
          </DropdownItem>
          <DropDownSeparator />
          <DropdownItem>
            <PersonIcon />
            <Typography>My Profile</Typography>
          </DropdownItem>
          <DropDownSeparator />
          <DropdownItem>
            <LogoutIcon />
            <Typography>Sign Out</Typography>
          </DropdownItem>
        </>
      </Dropdown>
    )
  },
}

export const WithIcons: Story = {
  render: args => {
    return (
      <Dropdown {...args} trigger={<Button variant={'secondary'}>Trigger</Button>}>
        <>
          <DropdownItem>
            <LearnIcon />
            <Typography>Learn</Typography>
          </DropdownItem>
          <DropDownSeparator />
          <DropdownItem>
            <EditIcon />
            <Typography>Edit</Typography>
          </DropdownItem>
          <DropDownSeparator />
          <DropdownItem disabled={true}>
            <DeleteIcon />
            <Typography>Delete</Typography>
          </DropdownItem>
        </>
      </Dropdown>
    )
  },
}