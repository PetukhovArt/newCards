import { useMemo, useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { ReadMore } from '../read-more/read-more.tsx'

import { Column, Sort, Table } from './table.tsx'

import DeleteIcon from '@/assets/icons/delete-icon.tsx'
import EditIcon from '@/assets/icons/edit-icon.tsx'
import { PlayIcon } from '@/assets/icons/play-icon.tsx'
import { Checkbox } from '@/components/ui/checkbox'
import { Rating } from '@/components/ui/rating'
import { Typography } from '@/components/ui/typography'

const meta = {
  title: 'Components/Table',
  component: Table.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Table.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => <Table.Root {...args} />,
  args: {
    nameTable: 'Tables',
    mb: '60px',
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>
              <Typography variant={'subtitle2'}>Name</Typography>
            </Table.HeadCell>
            <Table.HeadCell align="center">
              <Typography variant={'subtitle2'}>Description</Typography>
            </Table.HeadCell>
            <Table.HeadCell />
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Checkbox label={'Name'} checked={true} />
            </Table.Cell>
            <Table.Cell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut sed do eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed
              do...
            </Table.Cell>
            <Table.Cell>👀👀</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Checkbox label={'Name'} checked={false} />
            </Table.Cell>
            <Table.Cell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut sed do eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed
              do...
            </Table.Cell>
            <Table.Cell>🐱‍👤🐱‍👤</Table.Cell>
          </Table.Row>
        </Table.Body>
      </>
    ),
  },
}

const data = [
  {
    title: 'Project A',
    cardsCount: 10,
    updated: '2023-07-07',
    createdBy: 'John Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    grade: 1,
  },
  {
    title: 'Project B',
    cardsCount: 5,
    updated: '2023-07-06',
    createdBy: 'Jane Smith',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    grade: 2,
  },
  {
    title: 'Project C',
    cardsCount: 8,
    updated: '2023-07-05',
    createdBy: 'Alice Johnson',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    grade: 5,
  },
  {
    title: 'Project D',
    cardsCount: 3,
    updated: '2023-07-07',
    createdBy: 'Bob Anderson',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    grade: 4,
  },
]

export const WithMapMethodAndReadMore = {
  render: (args: any) => {
    return (
      <Table.Root nameTable={'Packs list'} mb={'60px'} {...args}>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>
              <Typography variant={'subtitle2'}>Name</Typography>
            </Table.HeadCell>
            <Table.HeadCell>
              <Typography variant={'subtitle2'}>Cards</Typography>
            </Table.HeadCell>
            <Table.HeadCell>
              <Typography variant={'subtitle2'}>Last Updated</Typography>
            </Table.HeadCell>
            <Table.HeadCell>
              <Typography variant={'subtitle2'}>Created by</Typography>
            </Table.HeadCell>
            <Table.HeadCell align="center">
              <Typography variant={'subtitle2'}>Description</Typography>
            </Table.HeadCell>
            <Table.HeadCell>
              <Typography variant={'subtitle2'}>Grade</Typography>
            </Table.HeadCell>
            <Table.HeadCell>
              <Typography variant={'subtitle2'}>Actions </Typography>
            </Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data.map(item => (
            <Table.Row key={item.title}>
              <Table.Cell width={150}>
                <Checkbox label={item.title} checked={false} />
              </Table.Cell>
              <Table.Cell>{item.cardsCount}</Table.Cell>
              <Table.Cell>{item.updated}</Table.Cell>
              <Table.Cell>{item.createdBy}</Table.Cell>
              <Table.Cell width={400}>
                <ReadMore text={item.description} maxLength={60} />
              </Table.Cell>
              <Table.Cell>
                <Rating value={item.grade} />
              </Table.Cell>
              <Table.Cell width={150} align={'center'}>
                <div
                  style={{
                    display: 'flex',
                    gap: '10px',
                    justifyContent: 'center',
                    padding: '6px 24px',
                  }}
                >
                  <PlayIcon />
                  <DeleteIcon />
                  <EditIcon />
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    )
  },
}

export const WithSort = {
  render: (args: any) => {
    const [sort, setSort] = useState<Sort>(null)
    const sortString: string | null = sort ? `${sort?.key}-${sort?.direction}` : null

    console.log(sort, sortString)
    const columns: Column[] = [
      {
        key: 'title',
        title: 'Name',
        sortable: true,
      },
      {
        key: 'cardsCount',
        title: 'Cards',
        sortable: true,
      },
      {
        key: 'updated',
        title: 'Last Updated',
      },
      {
        key: 'createdBy',
        title: 'Created by',
        sortable: true,
      },
      {
        key: 'options',
        title: '',
      },
    ]
    const data1 = [
      {
        title: 'Project A',
        cardsCount: 10,
        updated: '2023-07-07',
        createdBy: 'John Doe',
      },
      {
        title: 'Project B',
        cardsCount: 5,
        updated: '2023-07-06',
        createdBy: 'Jane Smith',
      },
      {
        title: 'Project C',
        cardsCount: 8,
        updated: '2023-07-05',
        createdBy: 'Alice Johnson',
      },
      {
        title: 'Project D',
        cardsCount: 3,
        updated: '2023-07-07',
        createdBy: 'Bob Anderson',
      },
      {
        title: 'Project E',
        cardsCount: 12,
        updated: '2023-07-04',
        createdBy: 'Emma Davis',
      },
    ]

    const sortedData = useMemo(() => {
      if (!sortString) {
        return data1
      }
      const [key, direction] = sortString.split('-')

      return [...data1].sort((a, b) => {
        if (direction === 'asc') {
          return a[key as keyof typeof a] > b[key as keyof typeof b] ? 1 : -1
        }

        return a[key as keyof typeof a] < b[key as keyof typeof b] ? 1 : -1
      })
    }, [sortString])

    return (
      <Table.Root nameTable={'Packs list'} mb={'60px'} style={{ width: '100%' }} {...args}>
        <Table.Header columns={columns} onSort={setSort} sort={sort} />
        <Table.Body>
          {sortedData.map(item => (
            <Table.Row key={item.title}>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{item.cardsCount}</Table.Cell>
              <Table.Cell>{item.updated}</Table.Cell>
              <Table.Cell>{item.createdBy}</Table.Cell>
              <Table.Cell>icons...</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    )
  },
}

export const Empty = {
  render: () => <Table.Empty />,
}
