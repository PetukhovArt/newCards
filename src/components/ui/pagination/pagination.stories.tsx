import { Meta, StoryObj } from '@storybook/react'

import { Pagination } from '@/components/ui/pagination/pagination.tsx'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    onPerPageChange: {
      action: 'changed per page',
    },
    onChange: {
      action: 'changed page',
    },
  },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    totalCount: 20,
    page: 3,
  },
}
export const WithSelect: Story = {
  args: {
    totalCount: 20,
    perPage: 10,
    page: 3,
    perPageOptions: [10, 20],
  },
}
