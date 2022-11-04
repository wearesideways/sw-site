import styles from './HamburguerMenuButton.module.scss'
import classNames from 'classnames'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export function HamburgerMenuButton(props: Props) {
  return (
    <button
      {...props}
      className={classNames(styles['root'], props.className)}
      type="button"
      aria-label="toggle navigation"
    >
      <span className={styles['bar1']}>
        <span
          className={classNames(styles['bar2'], props['aria-expanded'] && styles['is-expanded'])}
        />
      </span>
    </button>
  )
}
