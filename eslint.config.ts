import type { Linter } from 'eslint'
import tslint from 'typescript-eslint'
import astroPlugin from 'eslint-plugin-astro'
import importPlugin from 'eslint-plugin-import'

const configs = [
  ...tslint.configs.recommended,
  ...astroPlugin.configs.recommended,
  {
    plugins: {
      import: importPlugin
    },
    settings: {
      'import/core-modules': ['astro:content', 'astro:transitions'],
      'import/parsers': {
        'astro-eslint-parser': ['.astro'],
        '@typescript-eslint/parser': ['.ts', '.tsx']
      }
    }
  }
] satisfies Linter.Config[]

export default configs
