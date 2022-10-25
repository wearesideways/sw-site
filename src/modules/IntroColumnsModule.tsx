import React from 'react'
import { TextDividerText } from '../components/TextDividerText'
import styles from './IntroColumns.module.scss'
import Link from 'next/link'
import classnames from 'classnames';

type Props = {
  primaryText: string
  column1title: string
  column1content: string
  column2title: string
  column2content: string[]
  column3title: string
  column3content: string[]
  column4title: string
  column4content: string[]
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
          <p className={styles['primary-content']}>
            {primaryText}
          </p>
        }
        secondaryContent={
          <div className={styles['columns-content']}>

            <div className={classnames(styles['column-content'], styles['first-column'])}>
              <h2 className={styles['title']}>{column1title}</h2>
              <p className={styles['description']}>{column1content}</p>
            </div>

            <div className={classnames(styles['column-content'], styles['second-column'], styles['secondary-column-type'])}>
              <h2 className={styles['title']}>{column2title}</h2>
              <ul className={styles['description']}>
                {column2content.length && (
                  column2content.map((item) => (
                    <li>{item}</li>
                  ))
                )}
              </ul>
            </div>

            <div className={classnames(styles['column-content'], styles['third-column'], styles['secondary-column-type'])}>
              <h2 className={styles['title']}>{column3title}</h2>
              <ul className={styles['description']}>
                {column3content.length && (
                  column3content.map((item) => (
                    <li>{item}</li>
                  ))
                )}
              </ul>
            </div>

            <div className={classnames(styles['column-content'], styles['fourth-column'], styles['secondary-column-type'])}>
              <h2 className={styles['title']}>{column4title}</h2>
              <ul className={styles['description']}>
                {column4content.length && (
                  column4content.map((item) => (
                    <li>{item}</li>
                  ))
                )}
              </ul>
            </div>


            {/* TODO use CTA component when is ready */}
            <Link href={cta.href}>
              <span className={styles['cta-circle']}>{cta.text}</span>
            </Link>
          </div>
        }
      />
    </section>
  )
}
