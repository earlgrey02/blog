import tslint from 'typescript-eslint'
import tailwindPlugin from 'eslint-plugin-tailwindcss'
import importPlugin from 'eslint-plugin-import'

const config = tslint.config(
  tslint.configs.recommended,
  ...tailwindPlugin.configs['flat/recommended'],
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error'
    }
  },
  {
    plugins: { import: importPlugin },
    rules: {
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'after'
            },
            {
              pattern: 'next',
              group: 'builtin',
              position: 'after'
            }
          ],
          pathGroupsExcludedImportTypes: ['react', 'next'],
          alphabetize: { order: 'asc' }
        }
      ]
    }
  }
)

export default config
