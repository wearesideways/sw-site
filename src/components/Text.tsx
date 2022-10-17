import React, { ReactNode } from 'react'

type Props = {
  primaryContent: ReactNode
  divider?: boolean
  secondaryContent?: ReactNode
  cta?: ReactNode
  className?: string
}

export function Text({ primaryContent, divider, secondaryContent, cta, className }: Props) {
  return (
    <div className={`text-module ${className ? className : ''}`}>
      <div className="container">{primaryContent}</div>
      {divider && <hr />}
      <div className="container">
        {secondaryContent}

        {cta}
      </div>

      <style jsx>{`
        .text-module {
          background: black;
          padding: 120px 0;
        }
        .container {
          position: relative;
        }

        hr {
          width: 1px;
          height: 60px;
          border: none;
          background: white;
          margin: 22px auto;
        }

        @media (min-width: 576px) {
          .text-module {
            padding: 110px 0;
          }

          hr {
            height: 1px;
            width: 100%;
            margin: 110px auto 83px;
          }
        }
      `}</style>
    </div>
  )
}
