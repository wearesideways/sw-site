import Head from 'next/head'
import Navigation from './Navigation'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
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
            src: url('s/fonts/FHPhemisterDisplay-Regular.otf') format('opentype');
            font-weight: 400;
          }
        `}</style>
      </Head>
      <nav>
        <Navigation />
      </nav>
      <main>{children}</main>
    </div>
  )
}
