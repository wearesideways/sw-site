import React, { useEffect, useState } from 'react'
import styles from './OverflowHeadline.module.scss'

type Props = {
  headline: string
}

export default function OverflowHeadlineModule({
  headline,
}: Props) {
  const [numberToShow, setNumberToShow] = useState(0)

  useEffect(() => {
    const body = document.querySelector('body')
    const text = document.querySelector(`.${styles['root']} .${styles['overflow-headline']}`)
    const bodyWidth = body.offsetWidth
    const textWidth = text.offsetWidth
    setNumberToShow(Math.ceil(bodyWidth / textWidth))
  },[])

  return (
    <section className={styles['root']}>
      <h2 className={styles['overflow-headline']}>
        <span className={styles['headline-item']}>{headline}</span>

        {[...Array(numberToShow).keys()].map((idx) => (
          <span key={idx} className={styles['headline-item']}>{headline}</span>
        ))}

      </h2>
    </section>
  )
}
