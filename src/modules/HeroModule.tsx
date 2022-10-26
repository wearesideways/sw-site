import Media from '../components/Media'
import styles from './Hero.module.scss'
import { Col } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper'
import 'swiper/css'

type Props = {
  slides?: any[]
  headline?: string
  overlayText?: string
}

export default function HeroModule({ slides }: Props) {
  return (
    <section className={styles['hero']}>
      <Col xs={12}>
        <Swiper effect={'fade'} allowTouchMove={slides && slides.length > 1} modules={[EffectFade]}>
          {slides &&
            slides.map((slide, index) => (
              <SwiperSlide key={`slide-${index}`}>
                <Media
                  key={`slide-media-${index}`}
                  {...slide.media}
                  presentational={false}
                  className={styles['slide-media']}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </Col>
    </section>
  )
}
