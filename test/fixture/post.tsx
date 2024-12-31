import type { Post } from '@/module/post/type'

const post: Post = {
  id: '1',
  frontmatter: {
    title: 'title',
    description: 'description',
    date: new Date(),
    tags: ['tag1', 'tag2']
  },
  content: <div data-testid="post-content" />
}

const posts = new Array(3).fill(post)

export { post, posts }
