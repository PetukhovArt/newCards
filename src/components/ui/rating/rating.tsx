import s from './rating.module.scss'

import StarIcon from '@/assets/icons/star-icon.tsx'
import StarOutlineIcon from '@/assets/icons/star-outline-icon.tsx'

type RatingPropsType = {
  value: number
}
export const Rating = ({ value }: RatingPropsType) => {
  const ratingValue = Math.round(value)

  return (
    <div className={s.rating}>
      {ratingValue > 0 ? <StarIcon /> : <StarOutlineIcon />}
      {ratingValue >= 2 ? <StarIcon /> : <StarOutlineIcon />}
      {ratingValue >= 3 ? <StarIcon /> : <StarOutlineIcon />}
      {ratingValue >= 4 ? <StarIcon /> : <StarOutlineIcon />}
      {ratingValue >= 5 ? <StarIcon /> : <StarOutlineIcon />}
    </div>
  )
}
