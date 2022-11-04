import { Action } from '../lib/types'
import Link from 'next/link'
import styles from './Cta.module.scss'
import classNames from 'classnames'
import { useRouter } from 'next/router'

type Props = {
  action: Action
} & (
  | { className: string; style?: never }
  | { className?: never; style: string }
  | { className: string; style: string }
)

export default function Cta({ action, style, className }: Props) {
  const { asPath } = useRouter()
  const clazz = classNames(styles['root'], style && styles[style], className)

  if (action.type === 'external_link') {
    return (
      <a
        className={clazz}
        href={action.path}
        rel="noopener noreferrer"
        target={action.openInNewTab ? '_blank' : undefined}
      >
        {action.label}
      </a>
    )
  }

  if (action.type === 'page_link') {
    const href = `/${action.page}`

    return (
      <Link href={href}>
        <a className={clazz} aria-current={asPath === href ? 'page' : undefined}>
          {action.label}
        </a>
      </Link>
    )
  }

  throw new Error(`unknown action: ${JSON.stringify(action)}`)
}
