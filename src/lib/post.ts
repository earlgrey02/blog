import { getCollection } from 'astro:content'

const getPosts = async () =>
  (await getCollection('post')).toSorted((a, b) => b.data.date.getTime() - a.data.date.getTime())

export { getPosts }
