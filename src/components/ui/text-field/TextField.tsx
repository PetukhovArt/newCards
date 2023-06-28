import {
  ReactNode,
  KeyboardEvent,
  FC,
  ComponentProps,
  useState,
  useRef,
  InputHTMLAttributes,
} from 'react'

import * as Label from '@radix-ui/react-label'
import clsx from 'clsx'

import s from './textfield.module.scss'

import CloseIcon from '@/assets/icons/CloseIcon.tsx'
import EyeIcon from '@/assets/icons/EyeIcon.tsx'
import SearchIcon from '@/assets/icons/SearchIcon.tsx'
import { Typography } from '@/components/ui/typography'

export type TextFieldProps = {
  search?: boolean
  disabled?: boolean
  inputType?: string
  value?: string
  label?: ReactNode
  errorMessage?: string
  iconStart?: ReactNode
  iconEnd?: ReactNode
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
  onClickClearValue?: () => void
  className?: string
  placeholder?: string
} & ComponentProps<'input'> &
  InputHTMLAttributes<HTMLInputElement>

export const TextField: FC<TextFieldProps> = ({
  search,
  disabled,
  placeholder,
  value,
  inputType = 'text',
  label,
  errorMessage,
  iconStart,
  iconEnd,
  onEnter,
  onKeyDown,
  onClickClearValue,
  className,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const showError = errorMessage && errorMessage.length > 0
  const inputRef = useRef<HTMLInputElement>(null)
  const [isActive, setIsActive] = useState(false)

  const handleFocus = () => {
    setIsActive(true)
  }
  const handleBlur = () => {
    setIsActive(false)
  }

  if (search) {
    iconStart = <SearchIcon color={isActive ? 'var(--color-light-100)' : 'var(--color-dark-100)'} />
  }
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (onEnter && e.key === 'Enter') {
      onEnter(e)
    }
    onKeyDown?.(e)
  }
  const classNames = {
    root: clsx(s.root, className),
    input: clsx(s.input, showError && s.error),
    iconButton: clsx(s.iconButton, disabled && s.disabled),
  }
  const showClearValueIcon = !iconEnd && !showError && onClickClearValue && value?.length! > 0
  const dataIconStart = iconStart ? 'start' : ''
  const dataIconEnd = iconEnd || showClearValueIcon ? 'end' : ''
  const dataIcon = dataIconStart + dataIconEnd
  const onClickShowValue = () => {
    if (!disabled) {
      setShowPassword(!showPassword)
    }
  }

  return (
    <div className={classNames.root}>
      <Label.Root>
        <Typography variant={'body2'} color={'inherit'}>
          {label}
        </Typography>
        <div className={s.inputContainer}>
          {iconStart && <span className={s.iconStart}>{iconStart}</span>}
          <input
            disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            data-icon={dataIcon}
            ref={inputRef}
            className={classNames.input}
            type={showPassword ? 'text' : inputType}
            value={value}
            placeholder={placeholder}
            onKeyDown={handleKeyDown}
            {...rest}
          />

          {inputType === 'password' && (
            <button className={classNames.iconButton} type="button" onClick={onClickShowValue}>
              {!showPassword ? <EyeIcon /> : <EyeIcon color={'var(--color-info-500)'} />}
            </button>
          )}

          {showClearValueIcon && (
            <button className={classNames.iconButton} onClick={onClickClearValue} type="button">
              {<CloseIcon />}
            </button>
          )}

          {iconEnd && <span className={s.iconEnd}>{iconEnd}</span>}
        </div>
      </Label.Root>
      {showError && (
        <Typography variant={'error'} color={'error'}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
}
