import { defineConfig } from 'astro/config'
import type { AstroUserConfig } from 'astro'
import chromium from '@sparticuz/chromium'
import tailwind from '@tailwindcss/vite'
import { transformerMetaHighlight, transformerRenderLineNumber } from '@shikijs/transformers'
import { transformerTitle } from '@rudeigerc/shiki-transformer-title'
import { unified } from '@astrojs/markdown-remark'
import rehypeMermaid from 'rehype-mermaid'

const config = {
  markdown: {
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['mermaid']
    },
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark'
      },
      transformers: [
        transformerTitle({
          classBlock: 'code-block',
          classTitle: 'code-title'
        }),
        transformerMetaHighlight(),
        transformerRenderLineNumber()
      ]
    },
    processor: unified({
      rehypePlugins: [
        [
          rehypeMermaid,
          {
            strategy: 'inline-svg',
            ...(process.env.VERCEL && {
              launchOptions: {
                executablePath: await chromium.executablePath()
              }
            })
          }
        ]
      ]
    })
  },
  vite: {
    plugins: [tailwind()]
  }
} satisfies AstroUserConfig

export default defineConfig(config)
