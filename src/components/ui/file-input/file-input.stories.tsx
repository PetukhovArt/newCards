import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import EditIcon from '@/assets/icons/edit-icon.tsx'
import { Button } from '@/components/ui/button'
import { FileInput } from '@/components/ui/file-input/file-input.tsx'

const meta = {
  title: 'Components/FileInput',
  component: FileInput,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof FileInput>

export default meta
type Story = StoryObj<typeof FileInput>

export const UploadWithButton: Story = {
  render: args => {
    const [file, setFile] = useState('')
    const changeFileHandler = (file: File) => setFile(file.name)

    return (
      <div>
        <FileInput
          {...args}
          onChange={changeFileHandler}
          trigger={
            <Button variant={'secondary'} disabled={args.disabled}>
              Upload file
            </Button>
          }
        />
        <div>{file}</div>
      </div>
    )
  },
}
export const UploadWithIcon: Story = {
  render: args => {
    const [file, setFile] = useState('')
    const changeFileHandler = (file: File) => setFile(file.name)

    return (
      <div>
        <FileInput {...args} onChange={changeFileHandler} trigger={<EditIcon />} />
        <div>{file}</div>
      </div>
    )
  },
}
