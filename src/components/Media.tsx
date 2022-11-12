import { MediaTypes } from '../lib/types'
import styles from './Media.module.scss'
import Image from 'next/image'
import classNames from 'classnames'

type Props = {
  img: string
  alt?: string
  mediaType: MediaTypes
  presentational?: boolean
  className?: string
}

export default function Media({ img, alt, mediaType, presentational, className }: Props) {
  const imgFile = require(`../../public/images/${img}`)

  // TODO implement other media types
  if (mediaType === 'img') {
    return (
      <Image
        className={classNames(
          'swmedia',
          styles['swmedia-img'],
          styles['swmedia-lg'],
          styles['swmedia-object'],
          className ?? '',
        )}
        src={imgFile}
        alt={alt ?? ''}
        layout={'fill'}
        {...(presentational && { presentational: 'true', alt: '' })}
      />
    )
  }

  return <span>n/a</span>
}
