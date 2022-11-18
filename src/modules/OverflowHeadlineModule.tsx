import React from 'react'
import styles from './OverflowHeadline.module.scss'
import classNames from 'classnames'

type Props = {
  headline: string
  className?: string
}

export default function OverflowHeadlineModule({ headline, className }: Props) {
  const numberToShow = 5

  return (
    <section className={classNames(styles['root'], className)}>
      <h2 className={styles['overflow-headline']}>
        <span className={styles['headline-item']}>{headline}</span>

        {[...Array(numberToShow).keys()].map((idx) => (
          <span aria-hidden={true} key={idx} className={styles['headline-item']}>
            {headline}
          </span>
        ))}
      </h2>
    </section>
  )
}
