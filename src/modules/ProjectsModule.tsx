import styles from './Projects.module.scss'
import { MediaTypes } from '../lib/types'
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
      {projectsList?.map(({ project }, index) => {
        return (
          <figure className={styles['media-figure']} key={`project-fig-${index}`}>
            <div className={styles['info-container']}>
              {project.headline && <OverflownHeadline headline={project.headline} />}
              <p className={styles['description']}>{project.description}</p>
            </div>

            <Media {...project.media} presentational={false} className={styles['media']} />
          </figure>
        )
      })}
    </section>
  )
}
