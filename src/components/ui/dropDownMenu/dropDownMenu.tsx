import { CSSProperties, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropDownMenu.module.scss'

export type DropdownProps = {
  /** Use TooltipItem components as children.*/
  children?: ReactNode
  /** The preferred content alignment against the trigger. */
  align?: 'start' | 'center' | 'end'
  loop?: boolean
  trigger?: ReactNode
  className?: string
  style?: CSSProperties
  callBack?: () => void
}

export const Dropdown = ({
  children,
  trigger,
  loop = true,
}: // align = 'end',
// className,
// style,
// callBack,
DropdownProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton">{trigger}</button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content loop={loop} className={s.DropdownMenuContent} sideOffset={5}>
          <DropdownMenu.Arrow className={s.DropdownMenuArrow} />
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
