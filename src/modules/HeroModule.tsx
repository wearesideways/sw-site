import Media from '../components/Media'
import styles from './Hero.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper'
import 'swiper/css'

type Props = {
  slides?: any[]
  headline?: string
  overlayText?: string
}

export default function HeroModule({ slides, headline, overlayText }: Props) {
  return (
    <section className={styles['hero']}>
      <Swiper effect={'fade'} allowTouchMove={slides && slides.length > 1} modules={[EffectFade]}>
        {slides &&
          slides.map((slide, index) => (
            <SwiperSlide key={`slide-${index}`}>
              <figure className={styles['media-figure']}>
                <div className={styles['content-container']}>
                  <h2 className={styles['headline']}>{headline}</h2>
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
    </section>
  )
}
