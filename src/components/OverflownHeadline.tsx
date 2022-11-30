import styles from './OverflownHeadline.module.scss'
import classNames from 'classnames'

type Props = {
  headline: string
  className?: string
}

export default function OverflownHeadline({ headline, className }: Props) {
  const numberToShow = 5

  return (
    <h2 className={classNames(styles['overflow-headline'], className ?? '')}>
      <span className={styles['headline-item']}>{headline}</span>

      {[...Array(numberToShow).keys()].map((idx) => (
        <span aria-hidden={true} key={idx} className={styles['headline-item']}>
          {headline}
        </span>
      ))}
    </h2>
  )
}
