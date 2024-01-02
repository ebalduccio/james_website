import type { Metadata } from 'next'
import '../globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'James Kostohryz',
  description: 'James A. Kostohryz Website',
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
          <Navbar />
          <div className='flex-grow flex-1'>
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  )
}


