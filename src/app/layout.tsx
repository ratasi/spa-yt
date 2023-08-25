import { Footer } from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Website TarreDev',
  description: 'Esto es un tutorial para Youtube sobre como hacer una SPA con NextJS13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={urbanist.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
