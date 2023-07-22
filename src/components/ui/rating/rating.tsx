import { useState } from 'react'

import s from './rating.module.scss'

import StarIcon from '@/assets/icons/star-icon.tsx'

type RatingPropsType = {
  value: number
  onChange?: (value: number) => void
}
export const Rating = ({ value, onChange }: RatingPropsType) => {
  const [ratingValue, setRatingValue] = useState(Math.round(value))

  const handleRatingChange = (newValue: number) => {
    setRatingValue(newValue)
    if (onChange) {
      onChange(newValue)
    }
  }

  return (
    <div className={s.rating}>
      <StarIcon onClick={() => handleRatingChange(1)} filled={ratingValue >= 1} />
      <StarIcon onClick={() => handleRatingChange(2)} filled={ratingValue >= 2} />
      <StarIcon onClick={() => handleRatingChange(3)} filled={ratingValue >= 3} />
      <StarIcon onClick={() => handleRatingChange(4)} filled={ratingValue >= 4} />
      <StarIcon onClick={() => handleRatingChange(5)} filled={ratingValue >= 5} />
    </div>
  )
}
