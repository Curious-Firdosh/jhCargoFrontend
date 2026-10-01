import { Inter, Manrope } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b3a6b', // change to your brand color
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jhseacargo.com'
const siteName = 'JH Sea Cargo'
const ogImage = '/images/jh-cargo-og.jpeg' // 1200x630


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: 'China to Dubai Sea Cargo & Freight Forwarding | JH Sea Cargo',
    template: '%s | JH Sea Cargo',
  },
  description:
    'Ship from China to Dubai with JH Sea Cargo. Sea freight, LCL/FCL consolidation, customs clearance, JAFZA warehousing and door-to-door delivery across the UAE. Get a free quote today.',
  keywords: [
    'China to Dubai sea cargo',
    'China to Dubai shipping',
    'China to Dubai freight forwarding',
    'sea cargo from China to Dubai',
    'freight forwarder Dubai',
    'JAFZA warehousing Dubai',
    'cargo consolidation China',
    'LCL shipping China to UAE',
    'FCL shipping China to Dubai',
    'sea freight Dubai',
    'China to UAE logistics',
    'cargo delivery Dubai',
    'Dubai logistics company',
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: 'Logistics and Freight Forwarding',
  formatDetection: { email: false, address: false, telephone: false },
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
    languages: { 'en-AE': '/', 'x-default': '/' },
  },
  openGraph: {
    title: 'China to Dubai Sea Cargo & Freight Forwarding | JH Sea Cargo',
    description:
      'Reliable sea freight from China to Dubai: consolidation, customs clearance, JAFZA warehousing and final-mile delivery. Request a free quote.',
    url: '/',
    siteName,
    locale: 'en_AE',
    type: 'website',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'JH Sea Cargo - China to Dubai sea cargo and freight forwarding',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'China to Dubai Sea Cargo & Freight Forwarding | JH Sea Cargo',
    description:
      'Sea freight, consolidation, warehousing and delivery from China to Dubai. Free quote.',
    images: [ogImage], // same image as Open Graph
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  // verification: { google: 'YOUR_GOOGLE_SEARCH_CONSOLE_CODE' },
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
