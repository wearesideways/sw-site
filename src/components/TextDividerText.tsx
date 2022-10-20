import React, { ReactNode } from 'react'
import styles from '../style/text-divider-text.module.scss'

type Props = {
  primaryContent: ReactNode
  divider?: boolean
  secondaryContent?: ReactNode
  cta?: ReactNode
  className?: string
}

export function TextDividerText({
  primaryContent,
  divider,
  secondaryContent,
  cta,
  className,
}: Props) {
  return (
    <div className={`${styles['text-divider-text']} ${className ?? ''}`}>
      <div className={`container ${styles['container']}`}>{primaryContent}</div>
      {divider && <hr className={styles['divider']} />}
      <div className={`container ${styles['container']}`}>
        {secondaryContent}

        {cta}
      </div>
    </div>
  )
}
