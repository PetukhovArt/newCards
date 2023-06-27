import { ReactNode } from 'react'

import s from './card.module.scss'

type CardPropsType = {
  children: ReactNode
}

export const Card = ({ children }: CardPropsType) => {
  return <div className={s.card}>{children}</div>
}
