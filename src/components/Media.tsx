import styles from './Media.module.scss'

type Props = {
  src: string
  alt?: string
  type: string
  presentational?: boolean
  classes?: string
}

export default function Media({ src, alt, type, presentational, classes }: Props) {
  // TODO implement other media types
  if (type === 'img') {
    const swmediaClasses = [
      'swmedia',
      styles['swmedia-img'],
      styles['swmedia-lg'],
      styles['swmedia-object'],
    ]

    return (
      <img
        className={`${swmediaClasses.join(' ')} ${classes ?? ''}`}
        src={src}
        alt={alt ?? ''}
        {...(presentational && { presentational: 'true', alt: '' })}
      />
    )
  }

  return <span>n/a</span>
}
