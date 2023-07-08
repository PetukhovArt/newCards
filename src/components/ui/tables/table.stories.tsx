import { Meta, StoryObj } from '@storybook/react'

import { ReadMore } from '../read-more/read-more.tsx'

import { Table } from './table.tsx'

import { Arrow } from '@/assets/icons/arrow.tsx'
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
    id: '01',
    title: 'Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    link: 'Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то',
    category: 'Основной',
    grade: 1,
  },
  {
    id: '02',
    title: 'Name',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    link: 'Какая-то ссылка куда-то',
    category: 'Основной',
    grade: 2,
  },
  {
    id: '03',
    title: 'Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    link: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    category: 'Основной',
    grade: 5,
  },
]

export const WithMapMethod = {
  // @ts-ignore
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
            <Table.HeadCell>
              <Typography variant={'subtitle2'}>Grade</Typography>
            </Table.HeadCell>
            <Table.HeadCell>
              <Typography variant={'subtitle2'}>
                Actions <EditIcon />
              </Typography>
            </Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data.map(item => (
            <Table.Row key={item.id}>
              <Table.Cell>
                <Checkbox label={item.title} checked={false} />
              </Table.Cell>
              <Table.Cell>{item.description}</Table.Cell>
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
      </>
    ),
  },
}

export const WithReadMore = {
  // @ts-ignore
  render: args => <Table.Root {...args} />,

  args: {
    nameTable: 'Tables',
    mb: '60px',
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>
              <div>
                <span>Name</span>
                <Arrow />
              </div>
            </Table.HeadCell>
            <Table.HeadCell align="center">Description</Table.HeadCell>
            <Table.HeadCell>Grade</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data.map(item => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell width={450}>
                <ReadMore text={item.description} maxLength={60} />
              </Table.Cell>
              <Table.Cell>
                <Rating value={item.grade} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },
}

export const Empty = {
  render: () => <Table.Empty />,
}
