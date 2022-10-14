import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import yaml from 'js-yaml'

const pagesDirectory = path.join(process.cwd(), 'content/pages')

export type PageContent = {
  readonly date: string
  readonly title: string
  readonly slug: string
  readonly tags?: string[]
  readonly fullPath: string
}

let postCache: PageContent[]

export function fetchPageContent(): PageContent[] {
  if (postCache) {
    return postCache
  }
  // Get file names under /pages
  const fileNames = fs.readdirSync(pagesDirectory)
  const allPagesData = fileNames
    .filter((it) => it.endsWith('.mdx'))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(pagesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      })
      const matterData = matterResult.data as {
        date: string
        title: string
        tags: string[]
        slug: string
        fullPath: string
      }
      matterData.fullPath = fullPath

      const slug = fileName.replace(/\.mdx$/, '')

      // Validate slug string
      if (matterData.slug !== slug) {
        throw new Error('slug field not match with the path of its content source')
      }

      return matterData
    })
  // Sort pages by date
  postCache = allPagesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
  return postCache
}
