import type { Sitemap } from '@/lib/type/seo'
import { getPosts } from '@/lib/contentlayer/util'

const sitemap = (): Sitemap => {
  const sitemaps: Sitemap = getPosts().map(post => ({
    url: `${process.env.NEXT_URL}/post/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly'
  }))

  return [
    {
      url: process.env.NEXT_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${process.env.NEXT_URL}/post`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    ...sitemaps
  ]
}

export default sitemap
