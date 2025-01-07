import { allPosts as posts } from 'contentlayer'

const getPostById = (id: string) => posts.find(post => post.id === id)

const getPostsOrderByDate = () =>
  posts.sort((post1, post2) => new Date(post2.date).getTime() - new Date(post1.date).getTime())

export { getPostById, getPostsOrderByDate }
