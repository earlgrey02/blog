import { posts } from '@/lib/mdx/utils'
import type { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap =>
  [
    {
      url: process.env.NEXT_URL,
      lastModified: posts[0]?.date,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${process.env.NEXT_URL}/posts`,
      lastModified: posts[0]?.date,
      changeFrequency: 'weekly',
      priority: 1
    },
    ...posts.map(post => ({
      url: `${process.env.NEXT_URL}/posts/${post.id}`,
      lastModified: post.date,
      changeFrequency: 'weekly' as const
    }))
  ]

export default sitemap
