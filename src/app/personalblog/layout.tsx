'use client'

import '../globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import RightbarPB from './components/Rightbar'
import BlogContent from './components/BlogContent'
import Leftbar from './components/Leftbar'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import SectionTitle from '@/components/SectionTitle'

export default function PersonalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full '>
      <body className={cn('relative h-full antialiased font-roboto')}>
        <main className='absolute sm:relative flex flex-col min-h-screen'>
          <Navbar />
          <div className='flex-grow flex-1 bg-slate-50'>
            <SectionTitle TextColor='black' VectorColor='Black' title='Personal Blog' />
            <MaxWidthWrapper className='items-center justify-center'>
              <div className='flex pt-10'>
                <Leftbar className='border-r border-neutral-600' />
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
