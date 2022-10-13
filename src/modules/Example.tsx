import type { FC, ReactNode } from 'react'
import styles from './Example.module.scss'
import { Col, Container, Row } from 'react-bootstrap'

interface ExampleProps {
  children: ReactNode
}

const Example: FC<ExampleProps> = ({ children }) => {
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

export default Example
