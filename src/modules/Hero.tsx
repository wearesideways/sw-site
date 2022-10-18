import styles from './Hero.module.scss'
import Media from '../components/Media'

type Props = {
  slides?: any[]
}

export default function Hero({ slides }: Props) {
  return (
    <section className={styles['hero']}>
      <div className="swiper">
        {slides?.map((slide, index) => (
          <Media key={`slide-${index}`} {...slide.media} />
        ))}
      </div>
    </section>
  )
}
