import { Meta, StoryObj } from '@storybook/react'

import { ProfileInfo } from '../profile-info'
import { ProfileMoreInfo } from '../profile-more-info'
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
      <Dropdown {...args} trigger={<ProfileInfo name={'Some Name'} avatar={''} />}>
        <>
          <DropdownItem isOption={false}>
            <ProfileMoreInfo name={'Some Name'} email={'j&johnson@gmail.com'} avatar={''} />
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
          <DropdownItem>
            <DeleteIcon />
            <Typography>Delete</Typography>
          </DropdownItem>
        </>
      </Dropdown>
    )
  },
}

export const DisabledOptions: Story = {
  render: args => {
    return (
      <Dropdown {...args} trigger={<Button variant={'secondary'}>Trigger</Button>}>
        <>
          <DropdownItem disabled={true}>
            <LearnIcon />
            <Typography>Learn</Typography>
          </DropdownItem>
          <DropDownSeparator />
          <DropdownItem disabled={true}>
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
