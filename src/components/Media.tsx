import styles from './Media.module.scss'
import Image from 'next/image'

// TODO add more media types
enum MediaTypes {
  IMAGE = 'img',
  VIDEO = 'video',
}

type Props = {
  img: string
  alt?: string
  mediaType: MediaTypes
  presentational?: boolean
  className?: string
}

export default function Media({ img, alt, mediaType, presentational, className }: Props) {
  const imgFile = require(`../assets/hero-dev/${img}`)

  // TODO implement other media types
  if (mediaType === 'img') {
    const swmediaClasses = [
      'swmedia',
      styles['swmedia-img'],
      styles['swmedia-lg'],
      styles['swmedia-object'],
    ]

    return (
      <Image
        className={`${swmediaClasses.join(' ')} ${className ?? ''}`}
        src={imgFile}
        alt={alt ?? ''}
        layout={'fill'}
        {...(presentational && { presentational: 'true', alt: '' })}
      />
    )
  }

  return <span>n/a</span>
}
