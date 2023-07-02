import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './'

import { Button } from '@/components/ui/button'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    renderTriggerButton: { control: 'Trigger Button' },
    renderCancelButton: { control: 'Cancel Button' },
    renderActionButton: { control: 'Action Button' },
    contentSeparator: {
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

export const Primary: Story = {
  args: {
    renderTriggerButton: () => <Button>Trigger Button</Button>,
    renderCancelButton: () => <Button>Cancel</Button>,
    renderActionButton: () => <Button>Action</Button>,
  },
}

// export const Default: Story = {
//   render: args => {
//     const [checked, setChecked] = useState(false)
//
//     return (
//       <>
//         <Checkbox
//           {...args}
//           label={'Check-box'}
//           disabled={false}
//           checked={checked}
//           onChange={() => setChecked(!checked)}
//         />
//         <div>Checked: {checked ? 'true' : 'false'}</div>
//       </>
//     )
//   },
// }
