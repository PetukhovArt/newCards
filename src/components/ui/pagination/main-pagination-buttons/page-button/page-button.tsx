import s from './page-button.module.scss'

import { Typography } from '@/components/ui/typography'

export type NavigationButtonPropsType = {
  onClick: () => void
  disabled?: boolean
}

type PageButtonPropsType = NavigationButtonPropsType & {
  page: number
  selected: boolean
}

export const PageButton = ({ onClick, disabled, selected, page }: PageButtonPropsType) => {
  return (
    <button
      onClick={onClick}
      disabled={selected || disabled}
      className={`${s.pageButton} ${selected && s.selected}`}
    >
      <Typography className={`${selected && s.selectedPageNumber}`} variant={'body2'}>
        {page}
      </Typography>
    </button>
  )
}
