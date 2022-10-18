type Props = {
  src: string
  alt?: string
  type: string
  presentational?: boolean
}

export default function Media({ src, alt, type, presentational }: Props) {
  // TODO implement other media types
  if (type === 'img') {
    return (
      <img src={src} alt={alt ?? ''} {...(presentational && { presentational: 'true', alt: '' })} />
    )
  }

  return <span>n/a</span>
}
