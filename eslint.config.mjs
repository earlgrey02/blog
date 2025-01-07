import tslint from 'typescript-eslint'
import tailwindPlugin from 'eslint-plugin-tailwindcss'

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
  }
)

export default config
