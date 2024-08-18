import type { MetadataRoute } from 'next'
import { allPosts } from 'contentlayer/generated'

const sitemap = (): MetadataRoute.Sitemap => {
  const posts: MetadataRoute.Sitemap = allPosts.map(post => ({
    url: `https://earlgrey02.com/post/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly'
  }))

  return [
    {
      url: 'https://earlgrey02.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://earlgrey02.com/post',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    ...posts
  ]
}

export default sitemap
