import './globals.css'
import { Suspense } from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Loading } from '@/components/loading';
import { ModalProvider } from '@/providers/modal-provider';
import ProgressBarProvider from '@/providers/progress-bar-provider'

const inter = Inter({ subsets: ['latin'], weight: "600" })

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
    <Suspense fallback={<Loading />}>
      <html lang="en">
        <body className={inter.className}>
          <ProgressBarProvider>
            <ModalProvider />
            {children}
          </ProgressBarProvider>
        </body>
      </html>
    </Suspense>
  )
}
