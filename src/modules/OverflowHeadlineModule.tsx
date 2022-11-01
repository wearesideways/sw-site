import React from 'react'
import styles from './OverflowHeadline.module.scss'

type Props = {
  headline: string
}

export default function OverflowHeadlineModule({ headline }: Props) {
  const numberToShow = 5

  return (
    <section className={styles['root']}>
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
