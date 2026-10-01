import { Analytics } from '@vercel/analytics/next'
import { Inter, Manrope } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })



export const metadata: Metadata = {
  title: 'China to Dubai Sea Cargo & Freight Forwarding | JH Sea Cargo',

  description:
    'JH Sea Cargo provides reliable China to Dubai sea cargo, freight forwarding, JAFZA warehousing and cargo delivery services across Dubai and the UAE.',

  keywords: [
    'China to Dubai sea cargo',
    'China to Dubai shipping',
    'China to Dubai freight forwarding',
    'sea cargo from China to Dubai',
    'China UAE cargo shipping',
    'freight forwarder Dubai',
    'JAFZA warehousing',
    'cargo services Dubai',
    'sea freight Dubai',
    'China to UAE logistics',
    'cargo delivery Dubai',
    'China Dubai logistics',
  ],

  authors: [{ name: 'JH Sea Cargo' }],
  creator: 'JH Sea Cargo',
  publisher: 'JH Sea Cargo',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  alternates: {
    canonical: 'https://yourdomain.com/',
  },

  openGraph: {
    title: 'China to Dubai Sea Cargo & Freight Forwarding | JH Sea Cargo',
    description:
      'Reliable China to Dubai sea cargo, freight forwarding, JAFZA warehousing and delivery services across Dubai and the UAE.',
    url: 'https://yourdomain.com/',
    siteName: 'JH Sea Cargo',
    locale: 'en_AE',
    type: 'website',
  },


  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
