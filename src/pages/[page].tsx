import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import matter from 'gray-matter'
import { fetchPageContent, PageContent } from '../lib/pages'
import fs from 'fs'
import yaml from 'js-yaml'
import { parseISO } from 'date-fns'
import PageLayout from '../components/PageLayout'
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types'

export type Props = {
  title: string
  dateString: string
  slug: string
  tags: string[]
  modules?: { _type: string }[]
  author: string
  description?: string
  source: MDXRemoteSerializeResult
}

const slugToPageContent = ((pageContents) => {
  const hash: Record<string, PageContent> = {}
  pageContents.forEach((it) => (hash[it.slug] = it))
  return hash
})(fetchPageContent())

export default function Page({
  title,
  dateString,
  slug,
  tags,
  modules,
  author,
  description = '',
}: Props) {
  return (
    <PageLayout
      title={title}
      date={parseISO(dateString)}
      slug={slug}
      tags={tags}
      modules={modules}
      author={author}
      description={description}
    />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchPageContent().map((it) => '/' + it.slug)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!['page'] as string
  const source = fs.readFileSync(slugToPageContent[slug]!.fullPath, 'utf8')
  const { data } = matter(source, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object },
  })

  console.log('data-->', data)

  return {
    props: {
      title: data['title'],
      dateString: data['date'],
      slug: data['slug'],
      description: '',
      tags: data['tags'],
      modules: data['modules'],
      author: data['author'],
    },
  }
}
