import type { ComponentProps } from 'react'

type Props = ComponentProps<'svg'>

const HomeIcon = (props: Props) => {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M11.4 2.47a1 1 0 0 1 1.2 0l8.5 6.38a1 1 0 0 1-1.2 1.6L19 9.78V20a1 1 0 0 1-1 1h-4v-6h-4v6H6a1 1 0 0 1-1-1V9.78l-.9.67a1 1 0 1 1-1.2-1.6z" />
    </svg>
  )
}

const GitHubIcon = (props: Props) => {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.92.58.1.79-.25.79-.56v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.16 1.18A10.96 10.96 0 0 1 12 6.04c.98 0 1.95.13 2.87.39 2.19-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.08 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.18c0 .31.21.67.79.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
      />
    </svg>
  )
}

const MoonIcon = (props: Props) => {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M21 14.6A8.46 8.46 0 0 1 9.4 3a.75.75 0 0 0-.82-1.1 10.5 10.5 0 1 0 12.52 12.52.75.75 0 0 0-1.1-.82Z" />
    </svg>
  )
}

const SunIcon = (props: Props) => {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M18.72 18.72l1.06 1.06M3 12h1.5M19.5 12H21M4.22 19.78l1.06-1.06M18.72 5.28l1.06-1.06"
      />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}

const ArrowLeftIcon = (props: Props) => {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m6-6-6 6 6 6" />
    </svg>
  )
}

export { ArrowLeftIcon, GitHubIcon, HomeIcon, MoonIcon, SunIcon }
