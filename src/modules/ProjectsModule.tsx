import React, { useId, useState, MouseEvent, useEffect } from 'react'
import styles from './Projects.module.scss'
import { MediaTypes } from '../lib/types'
import { Container, Row, Col } from 'react-bootstrap'
import OverflownHeadline from '../components/OverflownHeadline'
import Media from '../components/Media'
import classNames from 'classnames'

type ProjectsProps = {
  projectsList: {
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
  sortFilters: string[]
}

type FilterBtnProps = {
  categoryLabel: string
  isSelected: boolean
  onClickFilter: (e: MouseEvent, category: string) => void
}

type FiltersListProps = {
  sortFilters: string[]
  currentFilter: string
  onClickFilter: (e: MouseEvent, category: string) => void
}

const FilterButton = ({ categoryLabel, isSelected, onClickFilter }: FilterBtnProps) => {
  return (
    <button
      type="button"
      className={styles['filter-btn']}
      aria-selected={isSelected}
      onClick={(e) => onClickFilter(e, categoryLabel)}
    >
      {categoryLabel}
    </button>
  )
}

const FiltersList = ({ sortFilters, currentFilter, onClickFilter }: FiltersListProps) => {
  return (
    <ul className={styles['filters-container']}>
      {sortFilters.map((elem, index) => (
        <li className={styles['filters-item']} key={`filters-${index}`}>
          <FilterButton
            categoryLabel={elem}
            isSelected={currentFilter === elem}
            onClickFilter={onClickFilter}
          />
        </li>
      ))}
    </ul>
  )
}

export default function ProjectsModule({ projectsList, sortFilters }: ProjectsProps) {
  const [currentFilter, setFilter] = useState('All')
  const [drawerIsExpanded, setDrawerExpanded] = useState(false)
  const [filteredProjects, setFilteredProjects] = useState(projectsList)
  const toggleId = useId()
  const regionId = useId()

  function onClickFilter(e: MouseEvent, category: string) {
    setFilter(category)
  }

  function toggleDrawer() {
    setDrawerExpanded(!drawerIsExpanded)
  }

  useEffect(() => {
    // TODO label comparison, change if required
    const filtered =
      currentFilter === 'All'
        ? projectsList
        : projectsList.filter((el) => el.project.category === currentFilter)
    setFilteredProjects(filtered)
  })

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
        <FiltersList
          sortFilters={['All', ...sortFilters]}
          currentFilter={currentFilter}
          onClickFilter={onClickFilter}
        />
      </div>
      <Container fluid={'md'} className={styles['projects-container']}>
        <Row className={styles['filters-row']}>
          <FiltersList
            sortFilters={['All', ...sortFilters]}
            currentFilter={currentFilter}
            onClickFilter={onClickFilter}
          />
        </Row>
        <Row className={styles['projects-row']}>
          {filteredProjects.map(({ project }, index) => {
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
