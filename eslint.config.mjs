import { defineConfig, globalIgnores } from 'eslint/config'
import next from 'eslint-config-next/core-web-vitals'
import typescript from 'eslint-config-next/typescript'

const config = defineConfig([
  ...next,
  ...typescript,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts'])
])

export default config
