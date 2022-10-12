import Layout from '../components/Layout'
import BasicMeta from '../components/meta/BasicMeta'
import OpenGraphMeta from '../components/meta/OpenGraphMeta'
import TwitterCardMeta from '../components/meta/TwitterCardMeta'
import { SocialList } from '../components/SocialList'
import { Text } from '../modules/Text'
import React from 'react'

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      <TwitterCardMeta url={'/'} />
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
          columnsContent={
            <div>
              <h2>Work</h2>
              <p>Sideways is a digital-first branding and creative agency uniquely positioned to
                differentiate your brand in a world where branding never stops.</p>
            </div>
          }
          cta={
            <a href='/work'>
              View All
            </a>
          }
        />
        <SocialList />
      </div>
      <style jsx>{`
        .headline {
          padding: 0;
          color: white;
          margin: 120px auto 22px;
          font-weight: 100;
          text-transform: uppercase;
          font-size: clamp(48px, 7vw, 128px);
          line-height: clamp(48px, 7vw, 128px);
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
        
        @media (min-width: 576px) {
          .headline {
            padding: 0 55px;
            max-width: none;
            margin: 110px auto;
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
        }

        @media (min-width: 768px) {
          .headline {
            padding: 0 90px;
          }
        }
        
        @media (min-width: 1200px) {
          .headline {
            font-size: clamp(48px, 8vw, 128px);
            line-height: clamp(48px, 8vw, 128px);
          }
        }
        
        @media (min-width: 1440px) {
          .headline {
            font-size: clamp(48px, 9vw, 128px);
            line-height: clamp(48px, 9vw, 128px);
          }
          
          .headline-4 {
            letter-spacing: 0;
          }
        }
      `}</style>
    </Layout>
  )
}
