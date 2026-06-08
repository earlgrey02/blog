import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

const posts = [...allPosts].sort((a, b) => compareDesc(a.date, b.date))

export { posts }
export type { Post } from 'contentlayer/generated'
