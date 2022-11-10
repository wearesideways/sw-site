import Head from 'next/head'
import { memo, ReactNode, useMemo, useState } from 'react'
import Nav from './Nav'
import { NavContextProvider } from './NavContext'
import Footer from './Footer'

type Props = {
  children: ReactNode
  defaultShowLogo: boolean
}

export default function Layout({ children, defaultShowLogo }: Props) {
  const [navExpanded, setNavExpanded] = useState(false)
  const [navVisible, setNavVisible] = useState(true)
  const [logoVisibleCount, setLogoVisibleCount] = useState(defaultShowLogo ? 1 : 0)

  const navContextValue = useMemo(
    () => ({
      logoVisible: logoVisibleCount > 0,
      setLogoVisible: (isVisible: boolean) => {
        setLogoVisibleCount((count) => count + (isVisible ? 1 : -1))
      },
      navVisible,
      setNavVisible,
      navExpanded,
      setNavExpanded,
    }),
    [navVisible, logoVisibleCount, navExpanded],
  )

  return (
    <>
      <HeadStuff />
      <NavContextProvider value={navContextValue}>
        <Nav id="main-nav" />
        <main>{children}</main>
        <Footer />
      </NavContextProvider>
    </>
  )
}

const HeadStuff = memo(() => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="apple-touch-icon" href="/icon.png" />
    <meta name="theme-color" content="#fff" />
    <link rel="preload" href="/fonts/FHOscar-Light.otf" as="font" crossOrigin="" type="opentype" />
    <link
      rel="preload"
      href="/fonts/FHOscar-Regular.otf"
      as="font"
      crossOrigin=""
      type="opentype"
    />
    <link rel="preload" href="/fonts/FHOscar-Medium.otf" as="font" crossOrigin="" type="opentype" />
    <link
      rel="preload"
      href="/fonts/FHPhemisterDisplay-LightItalic.otf"
      as="font"
      crossOrigin=""
      type="opentype"
    />
    <link
      rel="preload"
      href="/fonts/FHPhemisterDisplay-Regular.otf"
      as="font"
      crossOrigin=""
      type="opentype"
    />
    <style>{`
          @font-face {
            font-family: 'FH Oscar';
            src: url('/fonts/FHOscar-Light.otf') format('opentype');
            font-weight: 300;
          }  
          @font-face {
            font-family: 'FH Oscar';
            src: url('/fonts/FHOscar-Regular.otf') format('opentype');
            font-weight: 400;
          }
          @font-face {
            font-family: 'FH Oscar';
            src: url('/fonts/FHOscar-Medium.otf') format('opentype');
            font-weight: 500;
          }
          @font-face {
            font-family: 'FH Phemister';
            src: url('/fonts/FHPhemisterDisplay-LightItalic.otf') format('opentype');
            font-weight: 300;
            font-style: italic;
          }
          @font-face {
            font-family: 'FH Phemister';
            src: url('/fonts/FHPhemisterDisplay-Regular.otf') format('opentype');
            font-weight: 400;
          }
        `}</style>
  </Head>
))

HeadStuff.displayName = 'HeadStuff'
