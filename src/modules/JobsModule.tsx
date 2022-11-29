import React, { useState } from 'react'
import classNames from 'classnames'
import { Button, Container, Modal, ModalHeader, ModalBody } from 'react-bootstrap'
import styles from './Jobs.module.scss'

type JobProps = {
  title: string
}

type JobListProps = {
  items: JobProps[]
}

const JobsList = ({ items }: JobListProps) => {
  return (
    <ul className={styles['jobs-list']}>
      {items.map(({ title }: JobProps, idx: number) => (
        <li key={idx} className={styles['job-item']}>
          {title}
        </li>
      ))}
    </ul>
  )
}

export default function JobsModule() {
  const [showModal, setShowModal] = useState(false)
  const jobItems = [{ title: 'Designer' }, { title: 'Intern' }, { title: 'Office Goldfish' }]

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
                If you have questions on our open positions, give us a shout at{' '}
                <a href="mailto:jobs@sideways-nyc.com">jobs@sideways-nyc.com.</a>
              </p>
            </div>

            <div className={classNames(styles['column-content'], styles['second-column'])}>
              <Button
                className={classNames('d-inline-block d-sm-none', styles['jobs-btn'])}
                onClick={() => setShowModal(true)}
              >
                Jobs Positions
              </Button>

              <div className={'d-none d-sm-block'}>
                <h2 className={styles['title']}>Jobs Positions</h2>
                <JobsList items={jobItems} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Modal show={showModal} fullscreen onHide={() => setShowModal(false)}>
        <ModalHeader closeButton closeVariant={'white'} />
        <ModalBody>
          <div className={styles['root']}>
            <h2 className={styles['title']}>Jobs Positions</h2>
            <JobsList items={jobItems} />
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}
