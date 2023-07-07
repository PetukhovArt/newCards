import { ComponentProps, FC } from 'react'

import clsx from 'clsx'

import s from './table.module.scss'

import StarOutline from '@/assets/icons/star-outline.tsx'
import Star from '@/assets/icons/star.tsx'

export type RootProps = {
  nameTable: string
  mb?: string
  mt?: string
} & ComponentProps<'table'>

export const Root: FC<RootProps> = ({ className, nameTable, mb, ...rest }) => {
  const classNames = {
    table: clsx(className, s.table),
  }

  return (
    <>
      <span className={s.title} style={{ marginBottom: mb }}>
        {nameTable}
      </span>
      <table className={classNames.table} {...rest} />
    </>
  )
}

export type HeadProps = ComponentProps<'thead'>

export const Head: FC<HeadProps> = props => {
  return <thead {...props} />
}

export type BodyProps = ComponentProps<'tbody'>

export const Body: FC<BodyProps> = props => {
  return <tbody {...props} />
}

export type RowProps = ComponentProps<'tr'>

export const Row: FC<RowProps> = props => {
  return <tr {...props} />
}

export type HeadCellProps = ComponentProps<'th'>
export const HeadCell: FC<HeadCellProps> = ({ className, ...rest }) => {
  const classNames = {
    headCell: clsx(className, s.headCell),
  }

  return <th className={classNames.headCell} {...rest} />
}

export type CellProps = ComponentProps<'td'>

export const Cell: FC<CellProps> = ({ className, ...rest }) => {
  const classNames = {
    cell: clsx(className, s.tableCell),
  }

  return <td className={classNames.cell} {...rest} />
}

export const Empty: FC<ComponentProps<'div'> & { mt?: string; mb?: string }> = ({
  className,
  mt = '89px',
  mb,
}) => {
  const classNames = {
    empty: clsx(className, s.empty),
  }

  return (
    <h2 className={classNames.empty} style={{ marginTop: mt, marginBottom: mb }}>
      Пока тут еще нет данных! 👀
    </h2>
  )
}
export const Table = {
  Root,
  Head,
  Body,
  Row,
  HeadCell,
  Cell,
  Empty,
}

export function StarsRating(count: number) {
  let stars = Array(5).fill(<StarOutline />)

  for (let i = 0; i < count; i++) {
    stars[i] = <Star />
  }

  return (
    <Table.Cell style={{ display: 'flex' }} align={'center'}>
      {stars}
    </Table.Cell>
  )
}
