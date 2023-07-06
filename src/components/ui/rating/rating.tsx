import s from './rating.module.scss'

import StarOutline from '@/assets/icons/star-outline.tsx'
import Star from '@/assets/icons/star.tsx'

type RatingPropsType = {
  value: number
}
export const Rating = ({ value }: RatingPropsType) => {
  const ratingValue = Math.round(value)

  return (
    <div className={s.rating}>
      {ratingValue > 0 ? <Star /> : <StarOutline />}
      {ratingValue >= 2 ? <Star /> : <StarOutline />}
      {ratingValue >= 3 ? <Star /> : <StarOutline />}
      {ratingValue >= 4 ? <Star /> : <StarOutline />}
      {ratingValue >= 5 ? <Star /> : <StarOutline />}
    </div>
  )
}
