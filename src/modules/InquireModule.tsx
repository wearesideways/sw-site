import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Button, Container, Modal, ModalHeader, ModalBody } from 'react-bootstrap'
import { ContactForm } from '../components/ContactForm'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import styles from './Inquire.module.scss'
import formStyles from '../components/ContactForm.module.scss'

export default function InquireModule() {
  const reCaptchaKey = process.env['NEXT_PUBLIC_RECAPTCHA_KEY'] || ''
  const [showModal, setShowModal] = useState(false)
  const [isAtLestSm, setIsAtLestSm] = useState<any>(null)

  useEffect(() => {
    const atLeastSm = window.matchMedia('(min-width: 576px)')
    atLeastSm.addListener((mq) => {
      console.log('atLestSm', mq.matches)
      setIsAtLestSm(mq.matches)
    })
    setIsAtLestSm(atLeastSm.matches)
  }, [])

  return (
    <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
      <section className={styles['root']}>
        <Container>
          <div className={styles['columns-content']}>
            <div className={classNames(styles['column-content'], styles['first-column'])}>
              <h2 className={styles['title']}>Contact Us</h2>
              <p className={styles['description']}>
                Sideways is a digital-first branding and creative agency uniquely positioned to
                differentiate your brand in a world where branding never stops.
              </p>
              <br />
              <p className={styles['description']}>
                For business related inquiries, please complete this form.
              </p>
            </div>

            <div
              className={classNames(
                styles['column-content'],
                styles['second-column'],
                styles['secondary-column-type'],
                formStyles['root'],
              )}
            >
              {!isAtLestSm && (
                <Button className={styles['contact-us-btn']} onClick={() => setShowModal(true)}>
                  Contact Us
                </Button>
              )}

              {isAtLestSm && <ContactForm />}
            </div>
          </div>
        </Container>
      </section>

      <Modal show={showModal} fullscreen onHide={() => setShowModal(false)}>
        <ModalHeader closeButton closeVariant={'white'} />
        <ModalBody>
          <div className={formStyles['root']}>
            <ContactForm />
          </div>
        </ModalBody>
      </Modal>
    </GoogleReCaptchaProvider>
  )
}
