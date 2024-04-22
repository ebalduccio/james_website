import type { Metadata } from 'next'
import '../globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RightbarPB from './components/Rightbar'
import BlogContent from './components/BlogContent'
import Leftbar from './components/Leftbar'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import SectionTitle from '@/components/SectionTitle'

export const metadata = {
  title: 'Personal Blog',
  description: 'Personal Blog of James A. Kostohryz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full '>
      <body className={cn('relative h-full antialiased font-roboto')}>
        <main className='absolute sm:relative bg-whitebg bg-center bg-no-repeat flex flex-col min-h-screen'>
          <div className='flex-grow flex-1'>
            <Navbar />
            <SectionTitle TextColor='black' VectorColor='Black' title='Personal Blog' />
            <MaxWidthWrapper className='items-center justify-center'>
              <div className='flex pt-10'>
                <Leftbar />
                <BlogContent>
                  {children}
                </BlogContent>
                <RightbarPB />
              </div>
            </MaxWidthWrapper>
          </div>
        </main>
      </body>
    </html>
  )
}
