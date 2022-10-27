import React, { useEffect, useState, useRef } from 'react'
import styles from './OverflowHeadline.module.scss'

type Props = {
  headline: string
}

export default function OverflowHeadlineModule({ headline }: Props) {
  const [numberToShow, setNumberToShow] = useState(0)
  const overFlowRef = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    const body = document.querySelector('body') as HTMLElement

    if (body && overFlowRef?.current) {
      const bodyWidth = body?.offsetWidth
      const textWidth = overFlowRef.current.offsetWidth
      setNumberToShow(Math.ceil(bodyWidth / textWidth) + 1)
    }
  }, [])

  return (
    <section className={styles['root']}>
      <h2 ref={overFlowRef} className={styles['overflow-headline']}>
        <span className={styles['headline-item']}>{headline}</span>

        {[...Array(numberToShow).keys()].map((idx) => (
          <span key={idx} className={styles['headline-item']}>
            {headline}
          </span>
        ))}
      </h2>
    </section>
  )
}
