import styles from './Projects.module.scss'
import { MediaTypes } from '../lib/types'
import { Container, Row, Col } from 'react-bootstrap'
import OverflownHeadline from '../components/OverflownHeadline'
import Media from '../components/Media'

type Props = {
  projectsList?: {
    project: {
      headline?: string
      description?: string
      media: {
        img: string
        alt?: string
        mediaType: MediaTypes
      }
    }
  }[]
  showSidewaysLogo: boolean
  isFullHeight: boolean
}

export default function ProjectsModule({ projectsList }: Props) {
  return (
    <section className={styles['projects']}>
      <Container fluid={'md'} className={styles['projects-container']}>
        <Row className={styles['projects-row']}>
          {projectsList?.map(({ project }, index) => {
            return (
              <Col key={`project-fig-${index}`} md={6} lg={4}>
                <figure className={styles['media-figure']}>
                  <div className={styles['info-container']}>
                    {project.headline && (
                      <OverflownHeadline
                        headline={project.headline}
                        className={styles['overflown-headline']}
                      />
                    )}
                    <h2 className={styles['headline']}>{project.headline}</h2>
                    <p className={styles['description']}>{project.description}</p>
                  </div>

                  <div className={styles['media-container']}>
                    <Media {...project.media} presentational={false} className={styles['media']} />
                  </div>
                </figure>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}
