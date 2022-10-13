import { Text } from '../../modules/Text'
import React from 'react'

export function TextSection() {
  return (
    <>
      <div>
        <Text
          divider
          primaryContent={
            <h2 className='headline'>
              <div className='headline-2'>
                Culture Defining<span />
              </div>
              <div className='headline-3'>
                Creative<span /><em>for</em>
              </div>
              <div className='headline-4'>Modern Hospitality</div>
            </h2>
          }
          secondaryContent={
            <div className='first-column'>
              <h2 className='title'>Work</h2>
              <p className='description'>Sideways is a digital-first branding and creative agency uniquely positioned to
                differentiate your brand in a world where branding never stops.</p>
            </div>
          }
          cta={
            <a className='cta cta-circle' href='/work'>
              View All
            </a>
          }
        />
      </div>
      <style jsx>{` 
        .headline {
          padding: 0;
          color: white;
          margin: 0 auto 22px;
          font-weight: 100;
          text-transform: uppercase;
          font-size: max(48px, 7.5vw);
          line-height: max(48px, 7.5vw);
          font-family: 'FH Oscar Light', Helvetica;
          width: 100%;
          max-width: 280px;
          box-sizing: border-box;
          text-align: center;
        }
        
        .headline-2, .headline-3 {
          display: flex;    
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
        }
        
        .headline-3 em {
          width: 100%;
          text-transform: lowercase;
          font-family: 'FH Phemister Display', Helvetica;
        }
        
        .headline-4 {
          width: 100%;
          text-align: center;
          letter-spacing: .3vw;
          text-align-last: justify;
        }
        
        .first-column {
          width: 100%;
        }
        
        .title {
          color: white;
          font-size: 12px;
          text-align: center;
          margin: 0 0 22px 0;
          text-transform: uppercase;
          font-family: 'FH Oscar Medium', Helvetica;
        }
        
        .description {
          color: white;
          margin: 0 auto;
          font-size: 18px;
          max-width: 280px;
          text-align: center;
          font-family: 'FH Oscar Regular', Helvetica;
        }
        
        .cta-circle {
          bottom: 0;
          right: 90px;
          border: 1px solid;
          padding: 40px 20px;
          border-radius: 50%;
          position: absolute;
          
          color: white;
          margin: 0 auto;
          font-size: 18px;
          max-width: 280px;
          text-align: center;
          font-family: 'FH Oscar Regular', Helvetica;
        }
        
        @media (min-width: 576px) {
          .headline {
            max-width: none;
            margin: 0 auto;
            text-align: justify;
          }
          
          .headline-2 span {
            height: 1px;
            width: 100%;
            flex: 1 1 0%;
            margin-left: 3%;
            margin-top: 1vw;
            background: white;
          }
          
          .headline-3 {
            flex-wrap: nowrap;
          }
          
          .headline-3 span {
            width: 100%;
            height: 1px;
            margin: 0 3%;
            margin-top: 1vw;
            background: white;
          }
          
          .headline-3 em {
            width: auto;
          }
          
          .headline-4 {
            text-align: justify;
          }
          
          .first-column {
            width: 50%;
          }
          
          .title {  
            text-align: left;
          }
          
          .description {
            text-align: left;
            max-width: none;
          }
        }

        @media (min-width: 768px) {
          .title {  
            font-size: 18px;
            text-align: left;
          }
          
          .description {
            font-size: 30px;
            text-align: left;
          }
        }
        
        @media (min-width: 1200px) {
          .headline {
            font-size: 8vw;
            line-height: 8vw;
          }
        }
        
        @media (min-width: 1440px) {
          .headline {
            font-size: min(9vw, 148px);
            line-height: min(9vw, 148px);
          }
          
          .headline-4 {
            letter-spacing: 0;
          }
        }
      `}</style>
      </>
  )
}
