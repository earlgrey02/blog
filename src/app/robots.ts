import type { Robots } from '@/lib/type/seo'

const robots = (): Robots => ({
  rules: {
    userAgent: '*',
    allow: '/'
  },
  sitemap: `${process.env.NEXT_URL}/sitemap.xml`
})

export default robots
