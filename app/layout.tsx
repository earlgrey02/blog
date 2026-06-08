import '@/public/style/global.css'
import Header from '@/component/common/Header'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import RootProvider from '@/component/common/RootProvider'

interface Props {
  children: ReactNode
}

const siteUrl = process.env.NEXT_URL ?? 'http://localhost:3000'

const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'earlgrey02의 블로그',
    template: '%s | earlgrey02의 블로그'
  },
  description: '생각과 경험을 차분하게 정리하는 개인 기록 공간입니다.',
  authors: [{ name: 'earlgrey02' }],
  creator: 'earlgrey02',
  publisher: 'earlgrey02',
  keywords: ['백엔드', '인프라', 'Spring', 'Java', 'Kotlin', 'MongoDB', 'Kubernetes', 'Kafka'],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: '/',
    title: {
      default: 'earlgrey02의 블로그',
      template: '%s | earlgrey02의 블로그'
    },
    description: '생각과 경험을 차분하게 정리하는 개인 기록 공간입니다.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
} satisfies Metadata

const Layout = ({ children }: Props) => {
  return (
    <html>
      <body>
        <RootProvider>
          <Header />
          {children}
        </RootProvider>
      </body>
    </html>
  )
}

export { metadata }
export default Layout
