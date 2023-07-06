import { useCallback, useMemo } from 'react'

const range = (start: number, end: number) => {
  let length = end - start + 1

  return Array.from({ length }, (_, idx) => idx + start)
}

const DOTS = '...'

type UsePaginationParamType = {
  totalCount: number
  siblings?: number
  page: number
  onChange?: (pageNumber: number) => void
}

type PaginationRange = (number | '...')[]

export const usePagination = ({
  totalCount,
  page,
  siblings = 1,
  onChange,
}: UsePaginationParamType) => {
  const paginationRange = useMemo(() => {
    // Pages count is determined as siblingCount + firstPage + lastPage + page + 2*DOTS
    const totalPageNumbers = siblings + 5

    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalCount) {
      return range(1, totalCount)
    }

    /*
    	Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */
    const leftSiblingIndex = Math.max(page - siblings, 1)
    const rightSiblingIndex = Math.min(page + siblings, totalCount)

    /*
      We do not show dots when there is only one page number to be inserted
      between the extremes of siblings and the page limits i.e 1 and totalPageCount.
      Hence, we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */
    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalCount

    /*
    	Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblings
      let leftRange = range(1, leftItemCount)

      return [...leftRange, DOTS, totalCount]
    }

    /*
    	Case 3: No right dots to show, but left dots to be shown
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblings
      let rightRange = range(totalCount - rightItemCount + 1, totalCount)

      return [firstPageIndex, DOTS, ...rightRange]
    }

    /*
    	Case 4: Both left and right dots to be shown
    */
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex)

      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }
  }, [siblings, page, totalCount]) as PaginationRange

  const lastPage = paginationRange.at(-1)

  const isFirstPage = page === 1
  const isLastPage = page === lastPage

  const handleNextPageClicked = useCallback(() => {
    onChange?.(page + 1)
  }, [page, onChange])

  const handlePreviousPageClicked = useCallback(() => {
    onChange?.(page - 1)
  }, [page, onChange])

  const handleMainPageClicked = (pageNumber: number) => {
    return () => onChange?.(pageNumber)
  }

  return {
    paginationRange,
    isFirstPage,
    isLastPage,
    handleMainPageClicked,
    handleNextPageClicked,
    handlePreviousPageClicked,
  }
}
