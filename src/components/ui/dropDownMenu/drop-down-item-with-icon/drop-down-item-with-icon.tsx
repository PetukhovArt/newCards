import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu/'
import clsx from 'clsx'

import { DropdownItemProps } from '@/components/ui/dropDownMenu/drop-down-item'
import s from '@/components/ui/dropDownMenu/dropDownMenu.module.scss'
import { Typography } from '@/components/ui/typography'

export type DropdownItemWithIconProps = Omit<DropdownItemProps, 'children'> & {
  icon: ReactNode
  text: string
} & ComponentPropsWithoutRef<'div'>

export const DropdownItemWithIcon: FC<DropdownItemWithIconProps> = ({
  icon,
  disabled,
  onSelect,
  text,
  className,
  style,
  ...rest
}) => {
  const classNames = {
    item: clsx(s.item, className),
    itemIcon: s.itemIcon,
  }

  return (
    <DropdownMenu.Item
      className={classNames.item}
      disabled={disabled}
      onSelect={onSelect}
      onClick={event => event.stopPropagation()}
      style={style}
      asChild
      {...rest}
    >
      <div className={classNames.itemIcon}>{icon}</div>
      <Typography variant="caption">{text}</Typography>
    </DropdownMenu.Item>
  )
}
