import React from 'react'
import styles from './Projects.module.scss'
import { MediaTypes } from '../lib/types'
import { Container, Row, Col } from 'react-bootstrap'
import OverflownHeadline from '../components/OverflownHeadline'
import Media from '../components/Media'
import classNames from 'classnames'

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
  const [drawerIsExpanded, setDrawerExpanded] = React.useState(false)
  const toggleId = React.useId()
  const regionId = React.useId()

  function onClickFilter(e: React.MouseEvent, category: string) {
    setFilter(category)
  }

  function toggleDrawer() {
    setDrawerExpanded(!drawerIsExpanded)
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

  const filtersContent = (
    <ul className={styles['filters-container']}>
      <li className={styles['filters-item']}>{filterButton('All')}</li>

      {sortFilters?.map((elem, index) => (
        <li className={styles['filters-item']} key={`filters-${index}`}>
          {filterButton(elem)}
        </li>
      ))}
    </ul>
  )

  return (
    <section className={styles['projects']}>
      <ul
        tabIndex={1}
        className={classNames(
          styles['drawer-btn-container'],
          drawerIsExpanded ? styles['is-btn-expanded'] : '',
        )}
      >
        <li>
          <button
            id={toggleId}
            className={styles['drawer-toggle-btn']}
            aria-controls={regionId}
            aria-expanded={drawerIsExpanded}
            onClick={toggleDrawer}
          >
            Filter
          </button>
        </li>
      </ul>
      <div
        id={regionId}
        className={classNames(
          styles['drawer-region'],
          drawerIsExpanded ? styles['is-region-expanded'] : '',
        )}
        role="region"
        aria-labelledby={toggleId}
      >
        {filtersContent}
      </div>
      <Container fluid={'md'} className={styles['projects-container']}>
        <Row className={styles['filters-row']}>{filtersContent}</Row>
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
