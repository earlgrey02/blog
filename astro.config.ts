import { defineConfig } from 'astro/config'
import type { AstroUserConfig } from 'astro'
import tailwind from '@tailwindcss/vite'

const config = {
  vite: {
    plugins: [tailwind()]
  }
} satisfies AstroUserConfig

export default defineConfig(config)
