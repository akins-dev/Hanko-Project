import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ProgressBarProvider from '@/providers/progress-bar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AlphaGPT:: AI Platform',
  description: 'AI Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProgressBarProvider>
            {children}
        </ProgressBarProvider>
      </body>
    </html>
    
  )
}
