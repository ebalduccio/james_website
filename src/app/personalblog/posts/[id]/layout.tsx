import '../../../globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import BlogContent from '../../components/BlogContent'
import Leftbar from '../../components/Leftbar'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { AuthProvider } from '@/context/AuthContext'

export default function PersonalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full '>
      <body className={cn('relative h-full antialiased font-roboto')}>
        <AuthProvider>
          <main className='absolute sm:relative flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-grow flex-1 bg-slate-50'>
              <MaxWidthWrapper className='items-center justify-center'>
                <div className='flex pt-10'>
                  <Leftbar className='border-r border-neutral-600' />
                  <BlogContent>
                    {children}
                  </BlogContent>
                </div>
              </MaxWidthWrapper>
            </div>
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
