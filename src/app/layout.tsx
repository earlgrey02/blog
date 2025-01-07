import '../../public/style/global.css'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import Header from '@/component/common/Header'
import RootProvider from '@/component/common/RootProvider'

interface Props {
  children: ReactNode
}

const metadata: Metadata = {
  title: {
    template: '%s | earlgrey02.com',
    default: 'earlgrey02.com'
  },
  description: 'earlgrey02의 개발 블로그입니다.',
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: {
      template: '%s | earlgrey02.com',
      default: 'earlgrey02.com'
    },
    description: 'earlgrey02의 개발 블로그입니다.',
    url: new URL(process.env.NEXT_URL),
    type: 'website',
    locale: 'ko'
  }
}

const Layout = ({ children }: Props) => {
  return (
    <html>
      <body>
        <RootProvider>
          <div className="mx-auto max-w-[52rem] px-6 pt-2 md:pt-5">
            <Header />
            <div className="py-3 md:py-6">{children}</div>
          </div>
        </RootProvider>
      </body>
    </html>
  )
}

export { metadata }
export default Layout
