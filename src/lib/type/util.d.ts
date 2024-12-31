type Override<T, R extends { [K in keyof T]?: unknown }> = {
  [P in keyof T]: P extends keyof R ? R[P] : T[P]
}

export type { Override }
