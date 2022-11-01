import React from 'react'
import styles from './BigHeadline.module.scss'
import { Container } from 'react-bootstrap'

type Props = {
  headlineLeft: string
  headlineRight: string
}

export default function BigHeadlineModule({ headlineLeft, headlineRight }: Props) {
  return (
    <section className={styles['root']}>
      <Container>
        <h2 className={styles['big-headline']}>
          <span className={styles['headline-text']}>{headlineLeft}</span>
          <span className={styles['line']} />
          <span className={styles['headline-text']}>{headlineRight}</span>
        </h2>
      </Container>
    </section>
  )
}
