import type { ReactNode } from 'react'
import styles from './Example.module.scss'
import { Col, Container, Row } from 'react-bootstrap'

interface ExampleProps {
  children: ReactNode
}

export default function ExampleSection({ children }: ExampleProps) {
  return (
    <section className={styles['root']}>
      <Container>
        <Row>
          <Col className={styles['inner']}>{children}</Col>
        </Row>
      </Container>
    </section>
  )
}
