import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    date: {
      type: 'date',
      required: true
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true
    }
  },
  computedFields: {
    id: {
      type: 'string',
      resolve: doc => doc._raw.sourceFileDir
    }
  }
}))

const source = makeSource({
  contentDirPath: './public/post',
  documentTypes: [Post]
})

export type { Post }
export default source
