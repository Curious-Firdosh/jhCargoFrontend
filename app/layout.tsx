import { Inter, Manrope } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://jhseacargo.com'),
  applicationName: 'JH Sea Cargo',
  title: {
    default: 'JH Sea Cargo | China to Dubai Sea Freight & Logistics',
    template: '%s | JH Sea Cargo',
  },
  description:
    'JH Sea Cargo offers China to Dubai sea freight, cargo consolidation, freight forwarding, JAFZA warehousing, and final-mile delivery services in Dubai and the UAE.',
  keywords: [
    'China to Dubai sea cargo',
    'China to Dubai shipping',
    'China to Dubai freight forwarding',
    'sea cargo from China to Dubai',
    'Freight forwarder Dubai',
    'JAFZA warehousing Dubai',
    'cargo services Dubai',
    'sea freight Dubai',
    'China to UAE logistics',
    'cargo delivery Dubai',
    'China Dubai logistics',
    'Dubai logistics company',
  ],
  authors: [{ name: 'JH Sea Cargo' }],
  creator: 'JH Sea Cargo',
  publisher: 'JH Sea Cargo',
  category: 'Logistics and Freight Forwarding',
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
    canonical: '/',
    languages: {
      'en-AE': '/',
    },
  },
  openGraph: {
    title: 'JH Sea Cargo | China to Dubai Sea Freight & Logistics',
    description:
      'Reliable China to Dubai sea cargo, freight forwarding, JAFZA warehousing, and delivery services across Dubai and the UAE.',
    url: '/',
    siteName: 'JH Sea Cargo',
    locale: 'en_AE',
    type: 'website',
    images: [
      {
        url: '/images/jh-cargo-hero.png',
        width: 1200,
        height: 630,
        alt: 'JH Sea Cargo logistics and cargo shipping services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JH Sea Cargo | China to Dubai Sea Freight & Logistics',
    description:
      'Cargo consolidation, sea freight, warehousing and final-mile delivery from China to Dubai.',
    images: ['/images/jh-cargo-hero.png'],
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
      </body>
    </html>
  )
}
