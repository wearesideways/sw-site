import React from 'react'
import styles from './OverflowHeadline.module.scss'
import OverflownHeadline from '../components/OverflownHeadline'
import classNames from 'classnames'

type Props = {
  headline: string
  className?: string
}

export default function OverflowHeadlineModule({ headline, className }: Props) {
  return (
    <section className={classNames(styles['root'], className)}>
      <OverflownHeadline headline={headline} />
    </section>
  )
}
