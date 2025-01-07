declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_URL: string
    }
  }
}

export {}
