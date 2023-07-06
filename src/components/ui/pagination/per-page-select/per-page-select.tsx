import s from './per-page-select.module.scss'

import { SuperSelect } from '@/components/ui/select'

type PerPageSelectProps = {
  perPage: number
  perPageOptions: string[]
  onPerPageChange: (value: string) => void
}

export const PerPageSelect = ({ perPageOptions, onPerPageChange }: PerPageSelectProps) => {
  return (
    <div className={s.selectBox}>
      Показать
      <SuperSelect options={perPageOptions} onValueChange={onPerPageChange} />
      на странице
    </div>
  )
}
