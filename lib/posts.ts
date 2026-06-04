interface Post {
  id: string
  title: string
  description: string
  tags: string[]
  date: string
}

const posts: Post[] = []

const getLatestPostDate = () => {
  return posts.map(post => post.date).sort((a, b) => b.localeCompare(a))[0]
}

export { getLatestPostDate, posts }
export type { Post }
