import React from 'react'
import { Text } from '../components/Text'
import styles from './text.module.scss'
import Link from 'next/link'

type Props = {
  text1: string
  text2: string
  text3: string
  text4: string
  divider: boolean
  secondaryText: string
  cta: {
    href: string
    text: string
  }
}

export default function TextModule({
  text1,
  text2,
  text3,
  text4,
  divider,
  secondaryText,
  cta,
}: Props) {
  return (
    <div>
      <Text
        divider={divider}
        primaryContent={
          <h2 className={styles['headline']}>
            <div className={styles['headline-2']}>
              {text1}
              <span className={styles['line']} />
            </div>
            <div className={styles['headline-3']}>
              {text2}
              <span className={styles['line']} />
              <em className={styles['italic-em']}>{text3}</em>
            </div>
            <div className={styles['headline-4']}>{text4}</div>
          </h2>
        }
        secondaryContent={
          <div className={styles['first-column']}>
            <h2 className={styles['title']}>Work</h2>
            <p className={styles['description']}>{secondaryText}</p>
          </div>
        }
        cta={
          // TODO use CTA component when is ready
          <Link href={cta.href}>
            <a className={styles['cta-circle']}>{cta.text}</a>
          </Link>
        }
      />
    </div>
  )
}
