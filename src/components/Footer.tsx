import NavBox from './NavBox'
import { useInView } from 'react-intersection-observer'
import { useNavContext } from './NavContext'

export default function Footer() {
  const { setNavVisible, setNavExpanded } = useNavContext()
  const { ref } = useInView({
    threshold: 0.3,
    onChange: (inView) => {
      setNavVisible(!inView)

      if (inView) setNavExpanded(false)
    },
  })

  return (
    <footer ref={ref}>
      <NavBox className="nav" theme="light" />
    </footer>
  )
}
