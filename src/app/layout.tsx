import type { Metadata } from 'next'
import './globals.css'
import { larken } from '@/fonts/larken'
import { Navbar } from './components/Navbar'

export const metadata: Metadata = {
  title: 'Roasted Coffee House',
  description:
    'Delicious coffee and pastries served fresh daily at Roasted Coffee House. Enjoy cozy vibes, premium beans, and artisanal flavors.',
  keywords: ['coffee shop', 'roasted coffee', 'pastries', 'cafe website', 'tailwind landing page'],
  authors: [{ name: 'Wahyu Ramadhan' }],
  creator: 'Wahyu Ramadhan',
  openGraph: {
    title: 'Roasted Coffee House',
    description: 'Delicious coffee and pastries served fresh daily at Roasted Coffee House.',
    // url: 'https://your-vercel-link.vercel.app',
    siteName: 'Roasted Coffee House',
    images: [
      {
        url: '/logo/roasted-coffee.png',
        width: 1200,
        height: 630,
        alt: '/logo/roasted-coffee.png'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`scroll-smooth ${larken.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
