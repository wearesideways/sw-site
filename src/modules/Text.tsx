import React, { ReactNode } from 'react'

type Props = {
  primaryContent: ReactNode | null
  divider?: boolean
  secondaryContent?: ReactNode | null
  cta?: ReactNode | null
}

export function Text({ primaryContent, divider, secondaryContent, cta }: Props) {
  return (
    <div className='text-module'>
      <div className='container'>
        {primaryContent}
      </div>
      {divider && <hr />}
      <div className='container'>
        {secondaryContent}

        {cta}
      </div>


      <style jsx>{`
        .text-module {
          background: black;
          padding: 120px 0;
        }
        .container {
          margin: 0 auto;
          overflow: auto;
          padding: 0 55px;
          max-width: 1440px;
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
        
        @media (min-width: 768px) {
          .container {
            padding: 0 90px;
          }
        } 
        
      `}</style>
    </div>
  )
}
