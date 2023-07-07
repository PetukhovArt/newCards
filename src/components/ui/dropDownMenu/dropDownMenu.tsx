import { ComponentPropsWithoutRef, CSSProperties, FC, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import Avatar from '../../../assets/images/Avatart.png'
import { Typography } from '../typography/typography.tsx'

import s from './dropDownMenu.module.scss'

import LogoutIcon from '@/assets/icons/logout-icon.tsx'
import { Person } from '@/assets/icons/person.tsx'

export type DropdownProps = {
  /** Use TooltipItem components as children.*/
  children: ReactNode
  /** The preferred content alignment against the trigger. */
  align?: 'start' | 'center' | 'end'
  trigger?: ReactNode
  className?: string
  style?: CSSProperties
  callBack?: () => void
}

export const Dropdown = ({
  children,
  trigger,
  align = 'end',
  className,
  style,
  callBack,
}: DropdownProps) => {
  const classNames = {
    content: clsx(s.menu_content, className),
    arrowBox: s.arrowBox,
    arrow: s.arrow,
    itemsBox: s.itemsBox,
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
      <DropdownMenu.Content asChild className={classNames.content} align={'start'} sideOffset={10}>
        <div className={s.menu_block}>
          <DropdownMenu.Item className={s.menu_user_block}>
            <div className={s.menu_user_block_avatar}>
              <img src={Avatar} />
            </div>
            <div>
              <div className={s.menu_user_block_name}>
                <Typography variant={'caption'}>Ivan</Typography>
              </div>
              <div className={s.menu_user_block_emale}>
                <Typography variant={'caption'}>example@gmail.com</Typography>
              </div>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={s.separator} />
          <DropdownMenu.Item>
            <Typography variant={'caption'} className={s.itemIcon}>
              <Person /> My profile
            </Typography>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={s.separator} />
          <DropdownMenu.Item>
            <Typography variant={'caption'} className={s.itemIcon} onClick={callBack}>
              <LogoutIcon /> Sign Out
            </Typography>
          </DropdownMenu.Item>
        </div>
        {/*<DropdownMenu.Arrow className={s.arrowBox} asChild>*/}
        {/*  <div className={s.arrow} />*/}
        {/*</DropdownMenu.Arrow>*/}
      </DropdownMenu.Content>
      {/*  <DropdownMenu.Portal forceMount>*/}
      {/*    <DropdownMenu.Content*/}
      {/*      asChild*/}
      {/*      forceMount*/}
      {/*      className={classNames.content}*/}
      {/*      align={align}*/}
      {/*      sideOffset={8}*/}
      {/*      style={style}*/}
      {/*      onClick={event => event.stopPropagation()}*/}
      {/*    >*/}
      {/*      <DropdownMenu.Arrow className={classNames.arrowBox} asChild>*/}
      {/*        <div className={classNames.arrow} />*/}
      {/*      </DropdownMenu.Arrow>*/}
      {/*      <div className={classNames.itemsBox}>{children}</div>*/}
      {/*    </DropdownMenu.Content>*/}
      {/*  </DropdownMenu.Portal>*/}
    </DropdownMenu.Root>
  )
}

export type DropdownItemProps = {
  children?: ReactNode
  disabled?: boolean
  /** Event handler called when the user selects an item (via mouse or keyboard). Calling event.preventDefault in this handler will prevent the dropdown menu from closing when selecting that item. */
  onSelect?: (event: Event) => void
  className?: string
  style?: CSSProperties
}

export const DropdownItem: FC<DropdownItemProps> = ({
  children,
  disabled,
  onSelect,
  className,
  style,
}) => {
  const classNames = {
    item: clsx(s.item, className),
  }

  return (
    <DropdownMenu.Item
      className={classNames.item}
      disabled={disabled}
      onSelect={onSelect}
      style={style}
      asChild
    >
      {children}
    </DropdownMenu.Item>
  )
}

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
