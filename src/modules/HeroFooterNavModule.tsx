import React from 'react'
import styles from './HeroFooterNav.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { HeroItem, HeroItemProps } from '../components/HeroOverflowText'
import Link from 'next/link'

type Props = {
  label: string
  prevHeroItem: HeroItemProps
  nextHeroItem: HeroItemProps
}

export default function HeroFooterNavModule({ label, prevHeroItem, nextHeroItem }: Props) {
  return (
    <section className={styles['root']}>
      <Container>
        <Row>
          <Col className={styles['nav-controls']}>
            <Link href={prevHeroItem.cta.href} aria-label={`Previous ${prevHeroItem.cta.text}`}>
              <span className={styles['nav-control-item']}>
                Prev
              </span>
            </Link>


            <p className={styles['nav-label']}>
              {label}
            </p>

            <Link href={nextHeroItem.cta.href} aria-label={`Next ${nextHeroItem.cta.text}`}>
              <span className={styles['nav-control-item']}>
                Next
              </span>
            </Link>
          </Col>
        </Row>
      </Container>

      <Row className={styles['no-gutters']}>

        <HeroItem showSubOverlay={false} className={styles['hero-item']} {...prevHeroItem} isFullWidth={false} />
        <HeroItem showSubOverlay={false} className={styles['hero-item']} {...nextHeroItem} isFullWidth={false} />

      </Row>
    </section>
  )
}
