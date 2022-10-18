import React from 'react'
import Date from './Date'
import Layout from './Layout'
import BasicMeta from './meta/BasicMeta'
import JsonLdMeta from './meta/JsonLdMeta'
import OpenGraphMeta from './meta/OpenGraphMeta'
import TwitterCardMeta from './meta/TwitterCardMeta'
import { getAuthor } from '../lib/authors'
import { getTag } from '../lib/tags'
import { getModule } from '../lib/modules'
import ModuleRenderer from './ModuleRenderer'

type Props = {
  title: string
  date: Date
  slug: string
  tags: string[]
  modules?: { _type: string }[]
  author: string
  description?: string
}
export default function PageLayout({
  title,
  date,
  slug,
  author,
  tags,
  modules,
  description = '',
}: Props) {
  const keywords = tags.map((it) => getTag(it)!.name)
  const authorName = getAuthor(author)!.name

  return (
    <Layout>
      <BasicMeta
        url={`/pages/${slug}`}
        title={title}
        keywords={keywords}
        description={description}
      />
      <TwitterCardMeta url={`/pages/${slug}`} title={title} description={description} />
      <OpenGraphMeta url={`/pages/${slug}`} title={title} description={description} />
      <JsonLdMeta
        url={`/pages/${slug}`}
        title={title}
        keywords={keywords}
        date={date}
        author={authorName}
        description={description}
      />
      <div>
        {modules!.map((it, i) => {
          const { _type, ...props } = it
          return (
            <div key={i}>
              <ModuleRenderer module={getModule(_type)!} {...props} />
            </div>
          )
        })}
        <footer>Space footer</footer>
      </div>
    </Layout>
  )
}
