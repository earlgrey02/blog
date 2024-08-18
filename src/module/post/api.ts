import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

const getPosts = () =>
  allPosts.sort((post1, post2) =>
    compareDesc(new Date(post1.date), new Date(post2.date))
  )

const getPostById = (id: number) => allPosts.find(post => post.id == id)

export { getPosts, getPostById }
