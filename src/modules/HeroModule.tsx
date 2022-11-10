import { MediaTypes } from '../lib/Types'
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
    media: {
      img: string
      alt?: string
      mediaType: MediaTypes
    }
  }[]
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
  showSidewaysLogo: boolean
}

export default function HeroModule({
  slides,
  headline,
  overlayText,
  hasQuote,
  quoteText,
  quoteAuthor,
  showSidewaysLogo,
}: Props) {
  const quoteContent = (
    <>
      <div className={styles['quote-wrapper']}>
        {quoteText?.map((elem, index) => (
          <>
            <TextWithMixedFonts key={`quote-${index}`} {...elem.line} />
            {index < quoteText.length - 1 && <br />}
          </>
        ))}
      </div>
      <p className={styles['quote-author']}>{quoteAuthor}</p>
    </>
  )

  const copyContent = (
    <>
      {headline && <h2 className={styles['headline']}>{headline}</h2>}
      {overlayText && <span className={styles['overlay-text']}>{overlayText}</span>}
    </>
  )

  const logoContent = (
    <>
      <SidewaysLogo className={classNames(styles['site-logo'], styles['is-large'])} />
      <SidewaysLogoSm className={styles['site-logo']} />
    </>
  )

  const isDefaultModuleHeight = !showSidewaysLogo && !hasQuote
  const hasHeadline = headline && headline.trim().length > 0

  return (
    <section
      className={classNames(
        styles['hero'],
        isDefaultModuleHeight ? styles['is-default-height'] : '',
      )}
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
        {slides?.map((slide, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <figure className={styles['media-figure']}>
              <div
                className={classNames(
                  styles['content-container'],
                  showSidewaysLogo ? styles['has-logo'] : '',
                  hasHeadline ? styles['has-headline'] : '',
                )}
              >
                {showSidewaysLogo ? logoContent : hasQuote ? quoteContent : copyContent}
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

      <button className={styles['scroll-down-btn']} type={'button'} aria-label="scroll down">
        <ArrowDown className={styles['arrow-icon']} />
      </button>
    </section>
  )
}
