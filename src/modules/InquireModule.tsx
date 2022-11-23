import React, { useState } from 'react'
import styles from './Inquire.module.scss'
import classNames from 'classnames'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

type Props = {
  title: string
  content: string
}

export default function InquireModule({
  title,
  content,
}: Props) {
  const { Group, Label, Control, Check } = Form

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <section className={styles['root']}>
      <Container fluid="xxl">
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
            )}
          >
            {/*BEGIN Form*/}

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Group className="mb-3" controlId="formFirstName">
                    <Label>First Name</Label>
                    <Control type="text"/>
                  </Group>
                </Col>

                <Col>
                  <Group className="mb-3" controlId="formLastName">
                    <Label>Last Name</Label>
                    <Control type="text" />
                  </Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Group className="mb-3" controlId="formEmail">
                    <Label>Email*</Label>
                    <Control type="email" required/>
                  </Group>
                </Col>

                <Col>
                  <Group className="mb-3" controlId="formCompanyName">
                    <Label>Company Name*</Label>
                    <Control type="text" required/>
                  </Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Group className="mb-3" controlId="formPhoneNumber">
                    <Label>Phone Number</Label>
                    <Control type="text"/>
                  </Group>
                </Col>

                <Col>
                  <Group className="mb-3" controlId="formWebsiteUrl">
                    <Label>Website URL</Label>
                    <Control type="text"/>
                  </Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Group className="mb-3" controlId="formBudgetRange">
                    <Label>Approximate budget range</Label>
                    <Form.Select aria-label="Please select a budget range">
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

              <Row>
                <Col>
                  <Label>Type Of Project</Label>
                  <Row>
                    <Col>
                      <Check type="checkbox" label="Branding & Logo Design" id="inline-check-1"/>
                      <Check type="checkbox" label="Website Design & Development" id="inline-check-2"/>
                      <Check type="checkbox" label="Social Media Marketing" id="inline-check-3"/>
                      <Check type="checkbox" label="Paid Marketing" id="inline-check-4"/>
                    </Col>
                    <Col>
                      <Check type="checkbox" label="SEO" id="inline-check-5"/>
                      <Check type="checkbox" label="Video / Photo Shoot" id="inline-check-6"/>
                      <Check type="checkbox" label="Other" id="inline-check-7"/>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Group className="mb-3" controlId="formProjectDescription">
                    <Label>Project Description*</Label>
                    <Control type="text" required/>
                  </Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  Recaptcha feature
                </Col>
              </Row>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>

          {/*END Form*/}

        </div>
      </Container>
    </section>
  )
}
