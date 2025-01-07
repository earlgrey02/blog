import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkBreaks from 'remark-breaks'
import rehypePrettyCode from 'rehype-pretty-code'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
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
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkBreaks],
    rehypePlugins: [
      [
        // @ts-ignore
        rehypePrettyCode,
        {
          theme: 'material-theme-darker',
          keepBackground: true
        }
      ]
    ]
  }
})

export type { Post }
export default source
