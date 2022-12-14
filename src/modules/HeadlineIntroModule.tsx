import React from 'react'
import { TextDividerText } from '../components/TextDividerText'
import styles from './HeadlineIntro.module.scss'
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

export default function HeadlineIntroModule({
  text1,
  text2,
  text3,
  text4,
  divider,
  secondaryText,
  cta,
}: Props) {
  return (
    <section className={styles['root']}>
      <TextDividerText
        divider={divider}
        primaryContent={
          <h2 className={styles['headline']}>
            <span className={styles['headline-2']}>{text1}</span>
            <span className={styles['headline-3']}>
              {text2}
              <span className={styles['line']} />
              <em className={styles['italic-em']}>{text3}</em>
            </span>
            <span className={styles['headline-4']}>{text4}</span>
          </h2>
        }
        secondaryContent={
          <>
            <div className={styles['first-column']}>
              <h2 className={styles['title']}>Work</h2>
              <p className={styles['description']}>{secondaryText}</p>
            </div>
            {/* TODO use CTA component when is ready */}
            <Link href={cta.href}>
              <span className={styles['cta-circle']}>{cta.text}</span>
            </Link>
          </>
        }
      />
    </section>
  )
}

HeadlineIntroModule.defaultProps = {
  text1: 'Culture Defining',
  text2: 'Creative',
  text3: 'for',
  text4: 'Modern Hospitality',
}
