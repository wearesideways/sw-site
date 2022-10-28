import React from 'react'
import Media from '../components/Media'
import styles from './HeroList.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper'
import 'swiper/css'
import OverflowHeadlineModule from './OverflowHeadlineModule'
import { Col, Container, Row } from 'react-bootstrap'
import classNames from 'classnames'

type HeroItemProps = {
  slides?: any[]
  overlayText?: string
  subOverlayText?: string
  isFullWidth: boolean
}

type HeroItem = {
  heroItem: HeroItemProps
}

type Props = {
  items: HeroItem[]
  isContained: boolean
}

const HeroItem = ({ slides, overlayText, subOverlayText, isFullWidth }: HeroItemProps) => {
  const copyContent = (
    <>
      {overlayText && <OverflowHeadlineModule headline={overlayText} />}
      {subOverlayText && <span className={styles['sub-overlay-text']}>{subOverlayText}</span>}
    </>
  )

  return (
    <Col
      md={isFullWidth ? 12 : 6}
      className={classNames(styles['hero'], !isFullWidth && styles['is-small'])}
    >
      <Swiper
        effect={'fade'}
        allowTouchMove={slides && slides.length > 1}
        modules={[EffectFade]}
        rewind={true}
        fadeEffect={{ crossFade: true }}
        className={styles['swiper']}
      >
        {slides &&
          slides.map((slide, idx) => (
            <SwiperSlide key={`slide-${idx}`}>
              <figure className={styles['media-figure']}>
                <div className={styles['content-container']}>{copyContent}</div>

                <Media
                  key={`slide-media-${idx}`}
                  {...slide.media}
                  presentational={false}
                  className={styles['slide-media']}
                />
              </figure>
            </SwiperSlide>
          ))}
      </Swiper>
    </Col>
  )
}

export default function HeroListModule({ isContained, items }: Props) {
  return (
    <section className={styles['root']}>
      <Container fluid={`${isContained ? 'md' : true}`}>
        <Row className={`${!isContained ? styles['no-gutters'] : ''}`}>
          {items.map((i, idx) => {
            const isEvery3or4 = ((idx / 4) % 4) % 1 >= 0.5
            return <HeroItem key={idx} {...i.heroItem} isFullWidth={!isEvery3or4} />
          })}
        </Row>
      </Container>
    </section>
  )
}
