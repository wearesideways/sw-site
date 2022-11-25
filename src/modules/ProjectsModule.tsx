import React from 'react'
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
      category: string
      media: {
        img: string
        alt?: string
        mediaType: MediaTypes
      }
    }
  }[]
  sortFilters?: string[]
}

export default function ProjectsModule({ projectsList, sortFilters }: Props) {
  const [currentFilter, setFilter] = React.useState('All')

  function onClickFilter(e: React.MouseEvent, category: string) {
    setFilter(category)
  }

  function filterButton(categoryLabel: string) {
    return (
      <button
        type="button"
        className={styles['filter-btn']}
        aria-selected={categoryLabel === currentFilter}
        onClick={(e) => onClickFilter(e, categoryLabel)}
      >
        {categoryLabel}
      </button>
    )
  }

  // TODO label comparison, change if required
  function filteredProjects() {
    return currentFilter === 'All'
      ? projectsList
      : projectsList?.filter((el) => el.project.category === currentFilter)
  }

  return (
    <section className={styles['projects']}>
      <Container fluid={'md'} className={styles['projects-container']}>
        <Row className={styles['filters-row']}>
          <ul className={styles['filters-container']}>
            <li className={styles['filters-item']}>{filterButton('All')}</li>

            {sortFilters?.map((elem, index) => (
              <li className={styles['filters-item']} key={`filters-${index}`}>
                {filterButton(elem)}
              </li>
            ))}
          </ul>
        </Row>
        <Row className={styles['projects-row']}>
          {filteredProjects()?.map(({ project }, index) => {
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
