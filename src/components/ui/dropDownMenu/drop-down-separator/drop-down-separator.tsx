import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './drop-down-separator.module.scss'

export const DropDownSeparator = () => {
  return <DropdownMenu.Separator className={s.separator} />
}
