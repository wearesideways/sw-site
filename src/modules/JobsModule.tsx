import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Button, Container, Modal, ModalHeader, ModalBody } from 'react-bootstrap'
import styles from './Jobs.module.scss'

const JobsList = ({items}) => {
  return (
    <ul className={styles['jobs-list']}>
      {items.map(({title}, idx) => (
        <li key={idx} className={styles['job-item']}>{title}</li>
      ))}
    </ul>
  )
}

export default function JobsModule() {
  const [showModal, setShowModal] = useState(false)
  const [isAtLestSm, setIsAtLestSm] = useState<any>(null)
  const jobItems = [{title: 'Designer'}, {title: 'Intern'}, {title: 'Office Goldfish'}]

  useEffect(() => {
    const atLeastSm = window.matchMedia('(min-width: 576px)')
    atLeastSm.addListener((mq) => {
      setIsAtLestSm(mq.matches)
    })
    setIsAtLestSm(atLeastSm.matches)
  }, [])

  return (
    <>
      <section className={styles['root']}>
        <Container>
          <div className={styles['columns-content']}>
            <div className={classNames(styles['column-content'], styles['first-column'])}>
              <h2 className={styles['title']}>Contact Us</h2>
              <p className={styles['description']}>
                Join a diverse group of people who make amazing things happen everyday.
              </p>
              <br />
              <p className={styles['description']}>
                If you have questions on our open positions, give us a shout at <a href="mailto:jobs@sideways-nyc.com">jobs@sideways-nyc.com.</a>
              </p>
            </div>

            <div
              className={classNames(
                styles['column-content'],
                styles['second-column'],
              )}
            >

              {!isAtLestSm && (
                <Button className={styles['jobs-btn']} onClick={() => setShowModal(true)}>
                  Jobs Positions
                </Button>
              )}

              {isAtLestSm && (
                <>
                  <h2 className={styles['title']}>Jobs Positions</h2>
                  <JobsList items={jobItems}/>
                </>
              )}
            </div>
          </div>
        </Container>
      </section>

      <Modal show={showModal} fullscreen onHide={() => setShowModal(false)}>
        <ModalHeader closeButton closeVariant={'white'} />
        <ModalBody>
          <div className={styles['root']}>
            <h2 className={styles['title']}>Jobs Positions</h2>
            <JobsList items={jobItems}/>
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}
