import styles from './OverflownHeadline.module.scss'

type Props = {
  headline: string
}

export default function OverflownHeadline({ headline }: Props) {
  const numberToShow = 5

  return (
    <h2 className={styles['overflow-headline']}>
      <span className={styles['headline-item']}>{headline}</span>

      {[...Array(numberToShow).keys()].map((idx) => (
        <span aria-hidden={true} key={idx} className={styles['headline-item']}>
          {headline}
        </span>
      ))}
    </h2>
  )
}
