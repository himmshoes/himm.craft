import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Instrument_Serif } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _instrumentSerif = Instrument_Serif({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'himm.craft — Handcrafted Leather Footwear',
  description:
    'Where timeless style meets modern comfort. Handcrafted leather sandals, made to be worn for years.',
  icons: {
    icon: '/Logo.png', // <--- ชี้ไปที่ไฟล์ Logo.png ของคุณตรงๆ เลยครับ
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FBF9F6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}