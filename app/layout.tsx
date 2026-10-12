import './site.css'
import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import SiteNav from '../components/SiteNav'
import SiteFooter from '../components/SiteFooter'
import PwaRegister from '../components/PwaRegister'
import CursorGlow from '../components/CursorGlow'
import { DM_Sans, Manrope } from 'next/font/google'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })

export const metadata: Metadata = {
  title: 'Jyoti Verma | Frontend Developer',
  description: 'Portfolio of Jyoti Verma, frontend developer building responsive applications with React, Next.js, and TypeScript.',
  applicationName: 'Jyoti Verma Portfolio',
  icons: { apple: '/pwa-180.png' },
}

export const viewport: Viewport = {
  themeColor: '#17120f',
  colorScheme: 'dark',
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable}`}>
      <body>
        <div className="ambient ambient-one" aria-hidden="true" />
        <div className="ambient ambient-two" aria-hidden="true" />
        <SiteNav />
        {children}
        <SiteFooter />
        <PwaRegister />
        <CursorGlow />
      </body>
    </html>
  )
}
