import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { compileMDX as compileMdx } from 'next-mdx-remote/rsc'
import type { Override } from '@/lib/type/util'
import type { Frontmatter, Post } from '@/module/post/type'

const directory = join(process.cwd(), 'public', 'post')
const ids = await readdir(directory)
const files = await Promise.all(ids.map(async id => ({ id, file: await readFile(join(directory, id, `${id}.mdx`)) })))
const posts = (
  await Promise.all<Post>(
    files.map(async ({ id, file }) => {
      const { content, frontmatter } = await compileMdx<Override<Frontmatter, { date: string }>>({
        source: file,
        options: {
          parseFrontmatter: true
        }
      })

      return { id, content, frontmatter: { ...frontmatter, date: new Date(frontmatter.date) } }
    })
  )
).sort((post1, post2) => post2.frontmatter.date.getTime() - post1.frontmatter.date.getTime())

const getPosts = () => posts

const getPostById = (id: string) => posts.find(post => post.id === id)

export { getPosts, getPostById }
