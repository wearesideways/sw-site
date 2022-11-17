import { HamburgerMenuButton } from './HamburgerMenuButton'
import Link from 'next/link'
import SidewaysLogo from './SidewaysLogo'
import classNames from 'classnames'
import styles from './Nav.module.scss'
import NavBox, { MenuItem } from './NavBox'
import { useNavContext } from './NavContext'
import { menus } from '../lib/menus'
import { Container } from 'react-bootstrap'
import { useRouter } from 'next/router'

type Props = {
  id: string
}

export default function Nav({ id }: Props) {
  const { asPath } = useRouter()
  const menuId = `${id}-menu`
  const { logoVisible, navVisible, navExpanded, setNavExpanded } = useNavContext()

  return (
    <nav
      id={id}
      className={classNames(styles['root'], !navVisible && styles['is-hidden'])}
      aria-label="main"
    >
      <HamburgerMenuButton
        className={styles['hamburger']}
        aria-expanded={navExpanded}
        aria-controls={menuId}
        onClick={() => {
          setNavExpanded(!navExpanded)
        }}
      />

      <NavBox
        id={menuId}
        className={classNames(styles['mobile-menu'], navExpanded && styles['is-expanded'])}
        theme="dark"
      />

      <Container fluid="xxl" className={styles['brand-menu-lg-wrap']}>
        <Link href="/">
          <a className={styles['brand-link']} aria-current={asPath === '/'}>
            <SidewaysLogo
              className={classNames(styles['logo'], logoVisible && styles['is-visible'])}
            />
          </a>
        </Link>

        <span className={styles['tagline']}>Branding & Creative Agency</span>

        <ul className={styles['menu-lg']}>
          {menus.mainMenu.map((item, index) => (
            <MenuItem key={index} item={item} className={styles['menu-lg-item']!} />
          ))}
        </ul>
      </Container>
    </nav>
  )
}
