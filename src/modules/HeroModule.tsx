import { MediaTypes } from '../lib/types'
import Media from '../components/Media'
import TextWithMixedFonts from '../components/TextWithMixedFonts'
import styles from './Hero.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper'
import SidewaysLogo from '../assets/sideways-logo.svg'
import SidewaysLogoSm from '../assets/sideways-logo-sm.svg'
import ArrowDown from '../assets/arrow-down.svg'
import classNames from 'classnames'
import 'swiper/css'

type Props = {
  slides?: {
    slide: {
      media: {
        img: string
        alt?: string
        mediaType: MediaTypes
      }
      headline?: string
      overlayText?: string
      hasQuote: boolean
      quoteText?: {
        line: {
          startText: string
          middleText: string
          endText: string
        }
      }[]
      quoteAuthor?: string
    }
  }[]
  showSidewaysLogo: boolean
  isFullHeight: boolean
}

export default function HeroModule({ slides, showSidewaysLogo, isFullHeight }: Props) {
  const quoteContent = (prefix: string, quoteText?: any[], quoteAuthor?: string) => (
    <div className={styles['quotes-container']}>
      <div className={styles['quote-wrapper']}>
        {quoteText?.map((elem, index) => (
          <>
            <TextWithMixedFonts key={`${prefix}_quote-${index}`} {...elem.line} />
            {index < quoteText.length - 1 && <br />}
          </>
        ))}
      </div>
      <p className={styles['quote-author']}>{quoteAuthor}</p>
    </div>
  )

  const copyContent = (headline?: string, overlayText?: string) => (
    <>
      {headline && (
        <div className={styles['headline-container']}>
          <h2 className={styles['headline']}>{headline}</h2>
        </div>
      )}
      {overlayText && (
        <div className={styles['overlay-container']}>
          <span className={styles['overlay-text']}>{overlayText}</span>
        </div>
      )}
    </>
  )

  return (
    <section
      className={classNames(styles['hero'], !isFullHeight ? styles['is-default-height'] : '')}
    >
      {/*Replace this with de a11y version*/}
      <Swiper
        effect={'fade'}
        allowTouchMove={slides && slides.length > 1}
        modules={[EffectFade]}
        rewind={true}
        fadeEffect={{ crossFade: true }}
        className={styles['swiper']}
      >
        {slides?.map(({ slide }, index) => {
          return (
            <SwiperSlide key={`slide-${index}`}>
              <figure className={styles['media-figure']}>
                {slide.hasQuote
                  ? quoteContent(`slide-${index}`, slide.quoteText, slide.quoteAuthor)
                  : copyContent(slide.headline, slide.overlayText)}

                <Media
                  key={`slide-media-${index}`}
                  {...slide.media}
                  presentational={false}
                  className={styles['slide-media']}
                />
              </figure>
            </SwiperSlide>
          )
        })}
      </Swiper>

      {showSidewaysLogo && (
        <div className={styles['logo-container']}>
          <SidewaysLogo className={classNames(styles['site-logo'], styles['is-large'])} />
          <SidewaysLogoSm className={styles['site-logo']} />
        </div>
      )}

      <button className={styles['scroll-down-btn']} type={'button'} aria-label="scroll down">
        <ArrowDown className={styles['arrow-icon']} />
      </button>
    </section>
  )
}
