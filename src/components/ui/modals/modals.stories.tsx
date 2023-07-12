import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './'

import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    onClose: { action: 'onCloseAction' },
    renderCancelButton: { control: 'Cancel Button' },
    renderActionButton: { control: 'Action Button' },
    showSeparator: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    showCloseButton: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    title: { control: 'string' },
    size: { control: 'modal size' },
    children: { control: 'components' },
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof Modal>

export const DefaultModal: Story = {
  render: args => {
    const [open, setOpen] = useState(false)
    const handler = () => {
      console.log('Modal closed')
      setOpen(!open)
    }

    return (
      <>
        <Button onClick={() => setOpen(true)}>Modal</Button>
        <Modal {...args} title={'Default Modal'} open={open} onClose={handler}>
          <Typography variant={'body2'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Typography>
          <TextField type={'text'} />
          <TextField type={'password'} />
          <TextField type={'search'} />
        </Modal>
      </>
    )
  },
}

export const ModalWithSaveButton: Story = {
  render: args => {
    const [open, setOpen] = useState(false)
    const handler = () => {
      console.log('Modal closed')
      setOpen(!open)
    }

    return (
      <>
        <Button onClick={() => setOpen(true)}>Modal</Button>
        <Modal
          {...args}
          title={'With One Button'}
          open={open}
          renderActionButton={() => <Button>Save</Button>}
          onClose={handler}
        >
          <Typography variant={'body2'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Typography>
          <TextField type={'text'} />
          <TextField type={'password'} />
          <TextField type={'search'} />
        </Modal>
      </>
    )
  },
}
export const ModalWithDoubleButton: Story = {
  render: args => {
    const [open, setOpen] = useState(false)
    const handler = () => {
      console.log('Modal closed')
      setOpen(!open)
    }

    return (
      <>
        <Button onClick={() => setOpen(true)}>Modal</Button>
        <Modal
          {...args}
          showSeparator={true}
          title={'With two Buttons'}
          open={open}
          renderActionButton={() => <Button>Save</Button>}
          renderCancelButton={() => <Button>Cancel</Button>}
          onClose={handler}
        >
          <Typography variant={'body2'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Typography>
          <TextField type={'password'} />
          <TextField type={'search'} />
        </Modal>
        <div>fdgfgdfg</div>
      </>
    )
  },
}
