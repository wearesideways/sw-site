import styles from './TextWithMixedFonts.module.scss'

type Props = {
  startText: string
  middleText: string
  endText: string
}

export default function TextWithMixedFonts({ startText, middleText, endText }: Props) {
  return (
    <>
      <span className={styles['primary-text']}>{startText} </span>
      <span className={styles['secondary-text']}>{middleText} </span>
      <span className={styles['primary-text']}>{endText}</span>
    </>
  )
}
