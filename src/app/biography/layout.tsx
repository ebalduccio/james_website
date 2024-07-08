import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { AuthProvider } from '@/context/AuthContext'

export const metadata = {
  title: 'Biography',
  description: 'Biography of James A. Kostohryz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full '>
      <body className={cn('relative h-full antialiased font-roboto')}>
        <AuthProvider>
          <main className='absolute sm:relative flex flex-col min-h-screen'>
            <div className='flex-grow flex-1'>
              <Navbar />
              {children}
              <Footer />
            </div>
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
