import type { Metadata } from 'next'
import './globals.css'
import { larken } from '@/fonts/larken'

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
      // {
      //   url: 'https://your-vercel-link.vercel.app/og-image.jpg', // Optional: bisa tambahkan banner og
      //   width: 1200,
      //   height: 630,
      //   alt: 'Roasted Coffee House'
      // }
      {
        url: 'https://your-vercel-link.vercel.app/og-image.jpg', // Optional: bisa tambahkan banner og
        width: 1200,
        height: 630,
        alt: 'Roasted Coffee House'
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
      <body className={`scroll-smooth ${larken.variable} antialiased`}>{children}</body>
    </html>
  )
}
