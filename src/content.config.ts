import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import { glob } from 'astro/loaders'

const post = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/contents/posts'
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string())
  })
})

export const collections = { post }
