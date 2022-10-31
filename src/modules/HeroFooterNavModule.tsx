import React from 'react'
import styles from './HeroFooterNav.module.scss'
import { Container, Row } from 'react-bootstrap'
import { HeroItem, HeroItemProps } from '../components/HeroOverflowText'

type Props = {
  label: string
  prevHeroItem: HeroItemProps
  nextHeroItem: HeroItemProps
}

export default function HeroFooterNavModule({ label, prevHeroItem, nextHeroItem }: Props) {
  return (
    <section className={styles['root']}>
      <Container fluid>
        Prev

        {label}

        Next
      </Container>

      <Row className={styles['no-gutters']}>

        <HeroItem showSubOverlay={false} className={styles['hero-item']} {...prevHeroItem} isFullWidth={false} />
        <HeroItem showSubOverlay={false} className={styles['hero-item']} {...nextHeroItem} isFullWidth={false} />

      </Row>
    </section>
  )
}
