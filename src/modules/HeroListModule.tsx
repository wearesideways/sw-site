import React from 'react'
import styles from './HeroList.module.scss'
import { Container, Row } from 'react-bootstrap'
import { HeroItem, HeroItemProps } from '../components/HeroOverflowText'
import classNames from 'classnames'

type HeroProps = {
  heroItem: HeroItemProps
}

type Props = {
  items: HeroProps[]
  isContained: boolean
}

export default function HeroListModule({ isContained, items }: Props) {
  return (
    <section className={styles['root']}>
      <Container fluid={`${isContained ? 'xxl' : true}`} className={styles['list-container']}>
        <Row className={classNames(!isContained && styles['no-gutters'], styles['list-row'])}>
          {items.map((i, idx) => {
            const isEvery3or4 = ((idx / 4) % 4) % 1 >= 0.5
            return <HeroItem key={idx} {...i.heroItem} isFullWidth={!isEvery3or4} />
          })}
        </Row>
      </Container>
    </section>
  )
}
