import SidewaysLogo from './SidewaysLogo'
import { MenuAction } from '../lib/types'
import Cta from './Cta'
import { menus } from '../lib/menus'
import classNames from 'classnames'
import styles from './NavBox.module.scss'
import { Container } from 'react-bootstrap'

type Props = {
  id?: string
  className: string
  theme: 'light' | 'dark'
}

export default function NavBox({ id, className, theme }: Props) {
  return (
    <div id={id} className={classNames(styles['root'], styles[`theme-${theme}`], className)}>
      <Container fluid="xxl" className={styles['wrap']}>
        <SidewaysLogo
          className={styles['menu-logo']}
          color={theme === 'light' ? 'black' : 'white'}
        />
        <span className={styles['tagline']}>Branding & Creative Agency</span>

        <ul className={styles['main-menu']}>
          {menus.mainMenu.map((item, index) => (
            <MenuItem key={index} item={item} className={styles['main-menu-item']!} />
          ))}
        </ul>

        <p className={styles['location']}>
          NYC — LA — GDL <sup>©{new Date().getFullYear()}</sup>
        </p>

        <ul className={styles['secondary-menu']}>
          {menus.footerMenu.map((item, index) => (
            <MenuItem key={index} item={item} className={styles['secondary-menu-item']!} />
          ))}
        </ul>
      </Container>
    </div>
  )
}

export function MenuItem({ item, className }: { item: MenuAction; className: string }) {
  return (
    <li>
      <Cta className={className} action={item} />
    </li>
  )
}
