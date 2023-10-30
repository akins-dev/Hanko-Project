import './globals.css'
import { Suspense } from "react"
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Loading } from '@/components/loading';
import { ModalProvider } from '@/providers/modal-provider';
import ProgressBarProvider from '@/providers/progress-bar-provider'

const montserrat = Montserrat({ subsets: ['latin'], weight: "600" })

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
    <Suspense fallback={<Loading />} >
      <html lang="en" suppressHydrationWarning>
        <body className={montserrat.className}>
          <ProgressBarProvider>
            <ModalProvider />
            {children}
          </ProgressBarProvider>
        </body>
      </html>
    </Suspense>
  )
}
