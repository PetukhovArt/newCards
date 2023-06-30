import { ComponentProps, FC, ReactNode } from 'react'

import CloseIcon from '@/assets/icons/CloseIcon.tsx'
import { Typography } from '@/components/ui/typography'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '@radix-ui/react-dialog'
import { Separator } from '@radix-ui/react-separator'
import { clsx } from 'clsx'

import s from './modal.module.scss'

export type ModalSize = 'sm' | 'md' | 'lg'

export type ModalProps = {
  renderTriggerButton: () => ReactNode
  renderCancelButton?: () => ReactNode
  renderActionButton: () => ReactNode
  contentSeparator?: boolean
  onClose?: () => void
  showCloseButton?: boolean
  title?: string
  size?: ModalSize //sm - 367px,md - 532px,lg - 764px.
  description?: string
  children?: ReactNode
} & ComponentProps<'div'>

export const Modal: FC<ModalProps> = ({
  renderTriggerButton,
  renderActionButton,
  renderCancelButton,
  size = 'md',
  title,
  className,
  children,
  showCloseButton = true,
  contentSeparator = true,
}) => {
  const classNames = {
    content: getContentClassName(size, className),
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{renderTriggerButton && renderTriggerButton()}</DialogTrigger>
      <DialogPortal>
        <DialogOverlay className={s.DialogOverlay} />
        <DialogContent className={classNames.content}>
          <div className={s.titleWrapper}>
            {showCloseButton && (
              <DialogClose>
                <button className={s.IconButton}>
                  <CloseIcon style={{ transform: 'scale(1.5)' }} />
                </button>
              </DialogClose>
            )}
            <DialogTitle className={s.DialogTitle}>
              <Typography variant={'h2'}>{title}</Typography>
              {contentSeparator && <Separator className={s.separator} />}
            </DialogTitle>
          </div>

          <div className={s.contentBox}>{children}</div>

          <div className={s.footerBlock}>
            <DialogClose asChild className={s.cancelButton}>
              {renderCancelButton && renderCancelButton()}
            </DialogClose>
            <DialogClose asChild className={s.actionButton}>
              {renderActionButton && renderActionButton()}
            </DialogClose>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}

function getContentClassName(size: ModalSize, className?: string) {
  const sizeClassName = getSizeClassName(size)

  return clsx(className, s.DialogContent, sizeClassName)
}

function getSizeClassName(size: ModalSize) {
  if (size === 'sm') return s.sm
  if (size === 'md') return s.md
  if (size === 'lg') return s.lg
}
