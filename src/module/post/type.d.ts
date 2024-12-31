import type { ReactNode } from 'react'

interface Frontmatter {
  title: string
  description: string
  date: Date
  tags: string[]
}

interface Post {
  id: string
  frontmatter: Frontmatter
  content: ReactNode
}

export type { Frontmatter, Post }
