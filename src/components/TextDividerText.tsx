import React, { ReactNode } from 'react'
import styles from './text-divider-text.module.scss'
import { Container } from 'react-bootstrap'
import classNames from 'classnames'

type Props = {
  primaryContent: ReactNode
  divider?: boolean
  secondaryContent?: ReactNode
  className?: string
}

export function TextDividerText({ primaryContent, divider, secondaryContent, className }: Props) {
  return (
    <div className={`${styles['text-divider-text']} ${className ?? ''}`}>
      <Container>{primaryContent}</Container>
      {divider && <hr className={styles['divider']} />}
      <Container className={classNames(styles['container'], !divider && styles['no-divider'])}>
        {secondaryContent}
      </Container>
    </div>
  )
}
