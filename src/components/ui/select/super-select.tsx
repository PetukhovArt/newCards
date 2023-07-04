import { CSSProperties } from 'react'

import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import { Label } from '@radix-ui/react-label'
import {
  Select,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

import { Typography } from '@/components/ui/typography'

type SuperSelectProps = {
  errorMessage?: string
  width?: CSSProperties['width']
  height?: CSSProperties['height']
  options: string[]
  onValueChange: (value: string) => void
  label?: string
  showOptionSeparator?: boolean
  disabled?: boolean
  placeholder?: string
  required?: boolean
}

export const SuperSelect = ({
  errorMessage,
  required = false,
  placeholder = 'Select-box',
  options = ['First', 'Second', 'Third'],
  onValueChange,
  width = '210px',
  height = '36px',
  label,
  disabled,
  showOptionSeparator,
}: SuperSelectProps) => {
  const classNames = {
    trigger: clsx(s.SelectTrigger, errorMessage && s.error),
  }

  return (
    <Label>
      {label && (
        <Typography variant={'body2'} color={'inherit'}>
          {label}
        </Typography>
      )}
      <Select required={required} disabled={disabled} onValueChange={onValueChange}>
        <SelectTrigger className={classNames.trigger} style={{ width: width, height: height }}>
          <SelectValue className={s.value} placeholder={placeholder} />
          <SelectIcon className={s.icon}>
            <ChevronDownIcon />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectContent className={s.content} position={'popper'}>
            <SelectScrollUpButton className={s.scrollButton}>
              <ChevronUpIcon />
            </SelectScrollUpButton>
            <SelectViewport>
              {options.map((el, index) => (
                <>
                  <SelectItem value={el} className={s.option} key={index}>
                    <SelectItemText>
                      <Typography variant={'body1'}>{el}</Typography>
                    </SelectItemText>
                    <SelectItemIndicator className={s.optionIndicator}>
                      <CheckIcon />
                    </SelectItemIndicator>
                  </SelectItem>
                  {showOptionSeparator && <SelectSeparator className={s.separator} />}
                </>
              ))}
            </SelectViewport>
            <SelectScrollDownButton className={s.scrollButton}>
              <ChevronDownIcon />
            </SelectScrollDownButton>
          </SelectContent>
        </SelectPortal>
      </Select>
      {errorMessage && <Typography variant={'error'}>{errorMessage}</Typography>}
    </Label>
  )
}
