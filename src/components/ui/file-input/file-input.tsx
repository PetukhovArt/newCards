import { ChangeEvent, ReactNode, useRef } from 'react'

import clsx from 'clsx'

import s from './file-input.module.scss'

const convertFileToBase64 = (file: File, callback: (value: string) => void) => {
  const reader = new FileReader()

  reader.onloadend = () => {
    const file64 = reader.result as string

    callback(file64)
  }
  reader.readAsDataURL(file)
}

type FileInputPropsType = {
  onChange: (file: string) => void
  disabled?: boolean
  trigger: ReactNode
}

export const FileInput = (props: FileInputPropsType) => {
  const { onChange, disabled = false, trigger } = props
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleUploadClick = () => inputRef.current?.click()

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      if (file.size < 1000000) {
        convertFileToBase64(file, file64 => {
          onChange(file64)
        })
      }
    }
  }

  const classNames = {
    container: s.container,
    trigger: clsx(s.trigger, disabled && s.disabled),
    input: s.input,
  }

  return (
    <div className={classNames.container}>
      <span onClick={handleUploadClick} className={classNames.trigger}>
        {trigger}
      </span>
      <input type="file" ref={inputRef} onChange={handleFileChange} className={classNames.input} />
    </div>
  )
}
