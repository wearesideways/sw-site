import React, { useState } from 'react'
import styles from '../components/ContactForm.module.scss'
import { Row, Col, Form, Button } from 'react-bootstrap'

type Props = {
  className?: string
}

export function ContactForm({ className }: Props) {
  // TODO Check useGoogleReCaptcha from react-google-recaptcha-v3 to implement the getting token

  const { Group, Label, Control, Check } = Form
  const [validated, setValidated] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    const form = event.currentTarget
    event.preventDefault()
    event.stopPropagation()
    setSubmitting(true)
    setSuccess(false)
    setError('')

    if (form.checkValidity()) {
      // If the form fields are valid
      setIsSubmitted(true)
      const body = {
        firstName: 'test',
        email: 'a@a.com',
        companyName: 'SW',
        projectDescription: 'bla bla bla'
      }

      // TODO: Replace randomBoolean and mock for actual call
      // const endpointUrl = 'https://formcarry.com/s/3zWZ_B4jkn1'
      const randomBoolean = Math.random() < 0.5
      await new Promise((resolve) => setTimeout(resolve, 1000))

      try {
        if (randomBoolean) {
          // show success
          console.log('sendingParams-->', body)
          setSuccess(true)
        } else {
          // TODO Change this to a more appropriate message once we know the third party service
          setError('There was an error trying to submit your request.')
        }
      } catch (error) {
        setError('There was an error submitting your request. Please try again later.')
        console.error(error)
      } finally {
        setSubmitting(false)
      }
    }

    setSubmitting(false)
    setValidated(true)
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className={className}>
        <Row className={styles['row-controls']}>
          <Col sm={6} className={styles['spacing-mobile']}>
            <Group className="mb-3" controlId="formFirstName">
              <Label>First Name</Label>
              <Control size="lg"  type="text" />
            </Group>
          </Col>

          <Col sm={6} className={styles['spacing-mobile']}>
            <Group className="mb-3" controlId="formLastName">
              <Label>Last Name</Label>
              <Control size="lg"  type="text" />
            </Group>
          </Col>
        </Row>

        <Row className={styles['row-controls']}>
          <Col sm={6} className={styles['spacing-mobile']}>
            <Group className="mb-3" controlId="formEmail">
              <Label>Email*</Label>
              <Control size="lg"  type="email" required/>
              <Control.Feedback type="invalid">
                Please provide a valid email.
              </Control.Feedback>
            </Group>
          </Col>

          <Col sm={6} className={styles['spacing-mobile']}>
            <Group className="mb-3" controlId="formCompanyName">
              <Label>Company Name*</Label>
              <Control size="lg"  type="text" required/>
              <Control.Feedback type="invalid">
                Please provide a company name.
              </Control.Feedback>
            </Group>
          </Col>
        </Row>

        <Row className={styles['row-controls']}>
          <Col sm={6} className={styles['spacing-mobile']}>
            <Group className="mb-3" controlId="formPhoneNumber">
              <Label>Phone Number</Label>
              <Control size="lg" type="text"/>
            </Group>
          </Col>

          <Col sm={6} className={styles['spacing-mobile']}>
            <Group className="mb-3" controlId="formWebsiteUrl">
              <Label>Website URL</Label>
              <Control size="lg" type="text"/>
            </Group>
          </Col>
        </Row>

        <Row className={styles['row-controls']}>
          <Col className={styles['spacing-mobile']}>
            <Group className="mb-3" controlId="formBudgetRange">
              <Label>Approximate budget range</Label>
              <Form.Select size="lg" aria-label="Please select a budget range">
                <option>Please Select</option>
                <option value="Under $50k">Under $50k</option>
                <option value="$50k - $75k">$50k - $75k</option>
                <option value="$75k - $100k">$75k - $100k</option>
                <option value="$100k - $250k">$100k - $250k</option>
                <option value="Above $250k">Above $250k</option>
              </Form.Select>
            </Group>
          </Col>
        </Row>

        <Row className={styles['row-controls']}>
          <Col className={styles['spacing-mobile']}>
            <Label>Type Of Project</Label>
            <Row>
              <Col sm={6}>
                <Check type="checkbox" label="Branding & Logo Design" id="inline-check-1"/>
                <Check type="checkbox" label="Website Design & Development" id="inline-check-2"/>
                <Check type="checkbox" label="Social Media Marketing" id="inline-check-3"/>
                <Check type="checkbox" label="Paid Marketing" id="inline-check-4"/>
              </Col>
              <Col sm={6}>
                <Check type="checkbox" label="SEO" id="inline-check-5"/>
                <Check type="checkbox" label="Video / Photo Shoot" id="inline-check-6"/>
                <Check type="checkbox" label="Other" id="inline-check-7"/>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className={styles['row-controls']}>
          <Col className={styles['spacing-mobile']}>
            <Group className="mb-3" controlId="formProjectDescription">
              <Label>Project Description*</Label>
              <Control size="lg" as="textarea" type="text" required/>
              <Control.Feedback type="invalid">
                Please provide a project description.
              </Control.Feedback>
            </Group>
          </Col>
        </Row>

      <Row className={styles['row-controls']}>
        <Col className={styles['spacing-mobile']}>
          {isSubmitted && error !== '' && (
            <div className={styles['error-section']}>
              {error}
            </div>
          )}

          {isSubmitted && success && (
            <div>
              Thank you! The SW team will be in touch nearly.
            </div>
          )}

        </Col>
      </Row>

        <Button className={styles['submit-btn']} type='submit' disabled={submitting}>
          Submit
        </Button>
      </Form>
  )
}
