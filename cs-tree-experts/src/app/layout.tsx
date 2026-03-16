import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CS & S Tree Experts | Professional Tree Services in Memphis',
  description: 'Chris Sampley - Expert tree trimming, removal, and stump grinding services in Memphis, TN. Licensed & insured. Free estimates.',
  keywords: 'tree service, tree trimming, tree removal, stump grinding, Memphis TN',
  openGraph: {
    title: 'CS & S Tree Experts | Memphis Tree Services',
    description: 'Professional tree services in Memphis. Call (901) 555-0142 for free estimate.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
