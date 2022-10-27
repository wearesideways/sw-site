import React from 'react'
import Media from '../components/Media'
import styles from './HeroList.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper'
import 'swiper/css'

type HeroItem = {
  slides?: any[]
  overlayText?: string
  subOverlayText?: string
}

type Props = {
  items: HeroItem[]
  isContained: boolean
}

const HeroItem = ({
                    slides,
                    overlayText,
                    subOverlayText,
                  }: HeroItem) => {


  const copyContent = (
    <>
      {overlayText && <h2 className={styles['overlay-text']}>{overlayText}</h2>}
      {subOverlayText && <span className={styles['sub-overlay-text']}>{subOverlayText}</span>}
    </>
  )

  return (
    <div className={styles['hero']}>
      <Swiper
        effect={'fade'}
        allowTouchMove={slides && slides.length > 1}
        modules={[EffectFade]}
        rewind={true}
        fadeEffect={{ crossFade: true }}
      >
        {slides &&
        slides.map((slide, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <figure className={styles['media-figure']}>
              <div className={styles['content-container']}>
                {copyContent}
              </div>

              <Media
                key={`slide-media-${index}`}
                {...slide.media}
                presentational={false}
                className={styles['slide-media']}
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default function HeroListModule({ isContained, items }: Props) {

  console.log('heroList--->', items, isContained)

  return (
    <section className={styles['hero-list']}>
        {items.map((i, index) => (
          <HeroItem key={index} {...i.heroItem}/>
        ))}
    </section>
  )
}
