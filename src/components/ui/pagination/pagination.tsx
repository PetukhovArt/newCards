import s from './pagination.module.scss'
import { usePagination } from './usePagination'

import { MainPaginationButtons } from '@/components/ui/pagination/main-pagination-buttons'
import { NextButton, PrevButton } from '@/components/ui/pagination/navigation-buttons'
import { PerPageSelect } from '@/components/ui/pagination/per-page-select'

type PaginationConditionals = {
  perPage?: number | null
  perPageOptions?: string[]
  onPerPageChange?: (itemPerPage: string) => void
}

export type PaginationPropsType = {
  totalCount: number
  page: number
  onChange: (page: number) => void
  siblings?: number
} & PaginationConditionals

export const Pagination = ({
  onChange,
  totalCount,
  page,
  perPage = null,
  perPageOptions,
  onPerPageChange,
  siblings,
}: PaginationPropsType) => {
  const {
    paginationRange,
    isLastPage,
    isFirstPage,
    handlePreviousPageClicked,
    handleNextPageClicked,
    handleMainPageClicked,
  } = usePagination({
    totalCount,
    page,
    siblings,
    onChange,
  })

  const showPerPageSelect = !!perPage && !!perPageOptions && !!onPerPageChange

  return (
    <div className={s.root}>
      <div className={s.container}>
        <PrevButton onClick={handlePreviousPageClicked} disabled={isFirstPage} />

        <MainPaginationButtons
          currentPage={page}
          onClick={handleMainPageClicked}
          paginationRange={paginationRange}
        />

        <NextButton onClick={handleNextPageClicked} disabled={isLastPage} />
      </div>

      {showPerPageSelect && (
        <PerPageSelect
          perPageOptions={perPageOptions}
          onPerPageChange={onPerPageChange}
          perPage={perPage}
        />
      )}
    </div>
  )
}
