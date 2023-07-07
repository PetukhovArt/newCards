import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { Meta } from '@storybook/react'

import { ReadMore } from '../read-more/read-more.tsx'

import { StarsRating, Table } from './table.tsx'

import { Arrow } from '@/assets/icons/arrow.tsx'
import EditIcon from '@/assets/icons/edit-icon.tsx'

export default {
  title: 'Components/Table',
  component: Table.Root,
} as Meta<typeof Table.Root>

export const Default = {
  render: args => <Table.Root {...args} />,

  args: {
    nameTable: 'Tables',
    mb: '60px',
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>
              Name
              <Arrow />
            </Table.HeadCell>
            <Table.HeadCell align="center">
              Decription
              <Arrow />
            </Table.HeadCell>
            <Table.HeadCell />
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut sed do eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed
              do...
            </Table.Cell>

            <Table.Cell>👀👀👀</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Name</Table.Cell>
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
  render: args => <Table.Root {...args} />,

  args: {
    nameTable: 'Tables',
    mb: '60px',
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>
              Name
              <Arrow />
            </Table.HeadCell>
            <Table.HeadCell align="center">description</Table.HeadCell>
            <Table.HeadCell>Grade</Table.HeadCell>
            <Table.HeadCell>
              Actions <EditIcon />
            </Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data.map(item => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{item.description}</Table.Cell>
              {StarsRating(item.grade)}
              <Table.Cell width={150} align={'center'}>
                <ArrowCircleRightIcon />
                <DeleteOutlineIcon />
                <BorderColorIcon />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },
}

export const WithReadMore = {
  render: args => <Table.Root {...args} />,

  args: {
    nameTable: 'Tables',
    mb: '60px',
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>
              Name <Arrow />
            </Table.HeadCell>
            <Table.HeadCell align="center">Decription</Table.HeadCell>
            <Table.HeadCell>Grade</Table.HeadCell>
            {/*<Table.HeadCell>Ссылка</Table.HeadCell>*/}
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data.map(item => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell width={450}>
                <ReadMore text={item.description} maxLength={60} />
              </Table.Cell>
              {StarsRating(item.grade)}
              {/*<Table.Cell width={300}>*/}
              {/*  <ReadMore text={item.link} maxLength={60} />*/}
              {/*</Table.Cell>*/}
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },
}

export const Empty = {
  render: args => <Table.Empty />,
}
