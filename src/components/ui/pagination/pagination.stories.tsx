import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Pagination } from '@/components/ui/pagination/pagination.tsx'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(10)

    const handler = (perPage: number | string) => setPerPage(perPage as number)

    return (
      <Pagination
        totalCount={20}
        page={page}
        onChange={setPage}
        perPage={perPage}
        perPageOptions={['12', '432']}
        onPerPageChange={handler}
      />
    )
  },
}
