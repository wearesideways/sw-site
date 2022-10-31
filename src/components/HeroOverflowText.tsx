import React  from 'react'
import styles from './hero-overflow-text.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper'
import 'swiper/css'
import classNames from 'classnames'
import OverflowHeadlineModule from '../modules/OverflowHeadlineModule'
import { Col } from 'react-bootstrap'
import Media from './Media'
import Link from 'next/link'

export type HeroItemProps = {
  slides?: any[]
  overlayText?: string
  showSubOverlay: boolean
  subOverlayText?: string
  isFullWidth: boolean,
  cta: {
    href: string
    text: string
  }
  className: string
}

export function HeroItem({ slides, overlayText, subOverlayText, isFullWidth, cta, className, showSubOverlay = true }: HeroItemProps) {
  const copyContent = (
    <>
      {overlayText && <OverflowHeadlineModule headline={overlayText} />}
      {showSubOverlay && subOverlayText && <span className={styles['sub-overlay-text']}>{subOverlayText}</span>}
    </>
  )

  return (
    <Col
      md={isFullWidth ? 12 : 6}
      className={classNames(styles['hero'], !isFullWidth && styles['is-small'], className)}
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
            <Link href={cta.href}>
              <div role="link" aria-label={cta.text} className={styles['slide-link']}>
                <figure className={styles['media-figure']}>
                  <div className={styles['content-container']}>{copyContent}</div>
                  <Media
                    key={`slide-media-${idx}`}
                    {...slide.media}
                    presentational={false}
                    className={styles['slide-media']}
                  />
                </figure>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Col>
  )
}
