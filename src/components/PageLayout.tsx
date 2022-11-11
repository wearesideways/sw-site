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

  // TODO set to false if homepage hero (with logo) is the first module
  // use useNavContext to set/unset the logo visibility later
  const defaultShowLogo = true

  return (
    <Layout defaultShowLogo={defaultShowLogo}>
      <BasicMeta url={`/${slug}`} title={title} keywords={keywords} description={description} />
      <TwitterCardMeta url={`/${slug}`} title={title} description={description} />
      <OpenGraphMeta url={`/${slug}`} title={title} description={description} />
      <JsonLdMeta
        url={`/${slug}`}
        title={title}
        keywords={keywords}
        date={date}
        author={authorName}
        description={description}
      />
      <>
        {modules!.map((it, i) => {
          const { _type, ...props } = it
          return <ModuleRenderer key={i} module={getModule(_type)!} {...props} />
        })}
      </>
    </Layout>
  )
}
