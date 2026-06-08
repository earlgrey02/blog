import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkBreaks from 'remark-breaks'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '*/*.mdx',
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
      of: {
        type: 'string'
      },
      required: true
    }
  },
  computedFields: {
    id: {
      type: 'string',
      resolve: post => post._raw.sourceFileDir
    },
    url: {
      type: 'string',
      resolve: post => `/posts/${post._raw.sourceFileDir}`
    }
  }
}))

const source = makeSource({
  contentDirPath: 'public/post',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkBreaks],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          keepBackground: false,
          theme: {
            dark: 'github-dark',
            light: 'github-light'
          }
        }
      ]
    ]
  }
})

export default source
