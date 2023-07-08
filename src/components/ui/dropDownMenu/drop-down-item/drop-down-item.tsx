import { CSSProperties, FC, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './drop-down-item.module.scss'

export type DropdownItemProps = {
  children?: ReactNode
  disabled?: boolean
  isOption?: boolean
  /** Event handler called when the user selects an item (via mouse or keyboard). Calling event.preventDefault in this handler will prevent the dropdown menu from closing when selecting that item. */
  onSelect?: (event: Event) => void
  className?: string
  style?: CSSProperties
}

export const DropdownItem: FC<DropdownItemProps> = ({
  children,
  disabled,
  isOption = true,
  onSelect,
  className,
  style,
}) => {
  const classNames = {
    item: clsx(s.DropdownMenuItem, className, !isOption && s.notOption),
  }

  return (
    <DropdownMenu.Item
      className={classNames.item}
      disabled={disabled}
      onSelect={onSelect}
      style={style}
      asChild
    >
      <div>{children}</div>
    </DropdownMenu.Item>
  )
}
