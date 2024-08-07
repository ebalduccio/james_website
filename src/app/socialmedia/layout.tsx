import type { Metadata } from 'next'
import '../globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { AuthProvider } from '@/context/AuthContext'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import RightbarPB from '../personalblog/components/Rightbar'
import BlogContent from '../personalblog/components/BlogContent'
import SectionTitle from '@/components/SectionTitle'
import Leftbar from './components/Leftbar'

export const metadata = {
    title: 'Social Media',
    description: 'Social Media of James A. Kostohryz',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className='h-full'>
            <body className={cn('relative h-full antialiased font-roboto')}>
                <AuthProvider>
                    <main className='absolute sm:relative flex flex-col min-h-screen'>
                        <Navbar />
                        <div className='flex-grow flex-1 bg-slate-50'>
                            <SectionTitle TextColor='black' VectorColor='Black' title='Social Media' />
                            <MaxWidthWrapper className='items-center justify-center'>
                                <div className='pt-10 relative z-40'>
                                    <RightbarPB />
                                </div>
                                <div className='flex pt-10 relative z-30'>
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
