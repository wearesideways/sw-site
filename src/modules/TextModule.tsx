import { Text } from '../components/Text'
import React from 'react'
import styles from '../../public/styles/text.module.scss'

export function TextModule() {
  return (
    <>
      <div className={styles['text_section']}>
        <Text
          divider
          primaryContent={
            <h2 className={styles['headline']}>
              <div className={styles['headline-2']}>
                Culture Defining<span />
              </div>
              <div className={styles['headline-3']}>
                Creative<span /><em>for</em>
              </div>
              <div className={styles['headline-4']}>Modern Hospitality</div>
            </h2>
          }
          secondaryContent={
            <div className={styles['first-column']}>
              <h2 className={styles['title']}>Work</h2>
              <p className={styles['description']}>Sideways is a digital-first branding and creative agency uniquely positioned to
                differentiate your brand in a world where branding never stops.</p>
            </div>
          }
          cta={
            <a className={styles['cta-circle']} href='/work'>
              View All
            </a>
          }
        />
      </div>
    </>
  )
}
