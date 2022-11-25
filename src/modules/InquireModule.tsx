import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Button, Container, Modal, ModalHeader, ModalBody } from 'react-bootstrap'
import { ContactForm } from '../components/ContactForm'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import styles from './Inquire.module.scss'
import formStyles from '../components/ContactForm.module.scss'

type Props = {
  title: string
  content: string
}

export default function InquireModule({
  title,
  content,
}: Props) {
  const [showModal, setShowModal] = useState(false);
  const [isAtLestSm, setIsAtLestSm] = useState(null);

  useEffect(() => {
    const atLeastSm = window.matchMedia('(min-width: 576px)')
    atLeastSm.addListener((mq) => {
      console.log('atLestSm',mq.matches)
      setIsAtLestSm(mq.matches)
    })
  }, [])


  return (
    <>
      <section className={styles['root']}>
        <Container>
          <div className={styles['columns-content']}>
            <div className={classNames(styles['column-content'], styles['first-column'])}>
              <h2 className={styles['title']}>{title}</h2>
              <p className={styles['description']}>{content}</p>
            </div>

            <div
              className={classNames(
                styles['column-content'],
                styles['second-column'],
                styles['secondary-column-type'],
                formStyles['root']
              )}
            >
              {!isAtLestSm && (
                <Button className={classNames('d-none d-sm-block', styles['contact-us-btn'])} onClick={() => setShowModal(true)}>
                  Contact Us
                </Button>
              )}

              {isAtLestSm && (
                <ContactForm />
              )}

            </div>
          </div>

        </Container>
      </section>

      <Modal show={showModal} fullscreen onHide={() => setShowModal(false)} className="something">
        <ModalHeader closeButton closeVariant={'white'}/>
        <ModalBody>
          {/*<GoogleReCaptchaProvider reCaptchaKey="6LeBcjAjAAAAAMxWA9daydoVHgOf8BXEFQmg-q9O">*/}
            <div className={formStyles['root']}>
              <ContactForm />
            </div>
          {/*</GoogleReCaptchaProvider>*/}
        </ModalBody>
      </Modal>

    </>
  )
}
