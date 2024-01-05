import type { Metadata } from 'next'
import '../globals.css'
import { cn } from '@/lib/utils'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Authorization',
  description: 'Authorization of James A. Kostohryz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full '>
      <body className={cn('relative h-full antialiased font-roboto')}>
        <main className='absolute sm:relative flex flex-col min-h-screen'>
          <div className='flex-grow flex-1'>
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  )
}
