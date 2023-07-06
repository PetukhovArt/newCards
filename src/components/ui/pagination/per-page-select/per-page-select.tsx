import s from './per-page-select.module.scss'

import { SuperSelect } from '@/components/ui/select'

export type PerPageSelectPropsType = {
  perPage: number
  perPageOptions: number[] | string[]
  onPerPageChange: (itemPerPage: number) => void
}

export const PerPageSelect = ({ perPageOptions, onPerPageChange }: PerPageSelectPropsType) => {
  const changePerPageHandler = (value: string) => {
    onPerPageChange(parseInt(value))
  }

  return (
    <div className={s.selectBox}>
      Показать
      <SuperSelect options={perPageOptions as string[]} onValueChange={changePerPageHandler} />
      на странице
    </div>
  )
}
