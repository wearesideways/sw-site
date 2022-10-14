import Layout from '../components/Layout'
import BasicMeta from '../components/meta/BasicMeta'
import OpenGraphMeta from '../components/meta/OpenGraphMeta'
import TwitterCardMeta from '../components/meta/TwitterCardMeta'
import { SocialList } from '../components/SocialList'
import { TextModule } from '../modules/TextModule'
import React from 'react'

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      <TwitterCardMeta url={'/'} />
      <div>
        <TextModule />
        <SocialList />
      </div>
      <style jsx>{` 
      `}</style>
    </Layout>
  )
}
