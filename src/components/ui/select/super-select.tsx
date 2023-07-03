import { CSSProperties, useState } from 'react'

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

import s from './select.module.scss'

import { Typography } from '@/components/ui/typography'

type SuperSelectProps = {
  errorMessage?: string
  width?: CSSProperties['width']
  height?: CSSProperties['height']
  options: string[]
  onValueChange?: (value: string) => void
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
  options = ['TestVal1', 'TestVal2', 'TestVal3'],
  onValueChange,
  width = '210px',
  height = '36px',
  label,
  disabled,
  showOptionSeparator,
}: SuperSelectProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Label>
      {label && (
        <Typography variant={'body2'} color={'inherit'}>
          {label}
        </Typography>
      )}
      <Select
        required={required}
        disabled={disabled}
        onValueChange={onValueChange}
        open={open}
        onOpenChange={() => setOpen(!open)}
      >
        <SelectTrigger className={s.SelectTrigger} style={{ width: width, height: height }}>
          <SelectValue className={s.SelectValue} placeholder={placeholder} />
          <SelectIcon className={s.SelectIcon}>
            {!open && <ChevronDownIcon />}
            {open && <ChevronUpIcon />}
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectContent className={s.SelectContent} position={'popper'}>
            <SelectScrollUpButton className={s.SelectScrollButton}>
              <ChevronUpIcon />
            </SelectScrollUpButton>
            <SelectViewport>
              {options &&
                options.map((el, index) => (
                  <>
                    <SelectItem value={el} className={s.SelectItem} key={index}>
                      <SelectItemText>
                        <Typography variant={'body1'}>{el}</Typography>
                      </SelectItemText>
                      <SelectItemIndicator className={s.SelectItemIndicator}>
                        <CheckIcon />
                      </SelectItemIndicator>
                    </SelectItem>
                    {showOptionSeparator && <SelectSeparator className={s.SelectSeparator} />}
                  </>
                ))}
            </SelectViewport>
            <SelectScrollDownButton className={s.SelectScrollButton}>
              <ChevronDownIcon />
            </SelectScrollDownButton>
          </SelectContent>
        </SelectPortal>
      </Select>
      {errorMessage && <Typography variant={'error'}>{errorMessage}</Typography>}
    </Label>
  )
}
