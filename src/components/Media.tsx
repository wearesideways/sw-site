import styles from './Media.module.scss'

type Props = {
  img: string
  alt?: string
  mediaType: string
  presentational?: boolean
  className?: string
}

export default function Media({ img, alt, mediaType, presentational, className }: Props) {
  // TODO implement other media types
  if (mediaType === 'img') {
    const swmediaClasses = [
      'swmedia',
      styles['swmedia-img'],
      styles['swmedia-lg'],
      styles['swmedia-object'],
    ]

    return (
      <img
        className={`${swmediaClasses.join(' ')} ${className ?? ''}`}
        src={img}
        alt={alt ?? ''}
        {...(presentational && { presentational: 'true', alt: '' })}
      />
    )
  }

  return <span>n/a</span>
}
