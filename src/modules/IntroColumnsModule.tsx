import React from 'react'
import { TextDividerText } from '../components/TextDividerText'
import styles from './HeadlineIntro.module.scss'
import Link from 'next/link'

type Props = {
  primaryText: string
  column1title: string
  column1content: string
  column2title: string
  column2content: string
  column3title: string
  column3content: string
  column4title: string
  column4content: string
  cta: {
    href: string
    text: string
  }
}

export default function IntroColumnsModule({
  primaryText,
  column1title,
  column1content,
  column2title,
  column2content,
  column3title,
  column3content,
  column4title,
  column4content,
  cta,
}: Props) {
  return (
    <section className={styles['root']}>
      <TextDividerText
        primaryContent={
          <p className={styles['headline']}>
            {primaryText}
          </p>
        }
        secondaryContent={
          <>
            <div className={styles['first-column']}>
              <h2 className={styles['title']}>{column1title}</h2>
              <p className={styles['description']}>{column1content}</p>
            </div>

            <div className={styles['second-column']}>
              <h2 className={styles['title']}>{column2title}</h2>
              <p className={styles['description']}>{column2content}</p>
            </div>

            <div className={styles['third-column']}>
              <h2 className={styles['title']}>{column3title}</h2>
              <p className={styles['description']}>{column3content}</p>
            </div>

            <div className={styles['fourth-column']}>
              <h2 className={styles['title']}>{column4title}</h2>
              <p className={styles['description']}>{column4content}</p>
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
