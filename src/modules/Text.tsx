import React, { ReactElement } from 'react'

type Props = {
  primaryContent: ReactElement | null
  divider?: boolean
  columnsContent?: ReactElement | null
  cta?: ReactElement | null
}

export function Text({primaryContent, divider, columnsContent, cta}: Props) {
  return (
    <div className='text-module'>
      <div className='container'>
        {primaryContent}
        {divider && <hr/>}
        <div>
          {columnsContent}

          {cta}
        </div>
      </div>


      <style jsx>{`
        .text-module {
          background: black;
        }
        .container {
          margin: 0 auto;
          overflow: auto;
          max-width: 1440px;
        }
      `}</style>
    </div>
  )
}
