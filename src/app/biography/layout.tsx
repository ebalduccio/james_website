import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const roboto = Roboto({ subsets: ['latin'], weight: '300' })

export const metadata = {
  title: 'Biography',
  description: 'Generated by Enzo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full '>
      <body className={cn('relative h-full font-sans antialiased', roboto.className)}>
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
