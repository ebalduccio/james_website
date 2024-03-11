import '../globals.css'
import DashboardNavbar from '@/components/DashboardNavbar'
import DashboardSideBar from '@/components/DashboardSideBar'

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard of James A. Kostohryz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className='flex'>
          <div className='flex-none w-60'>
            <DashboardSideBar />
          </div>
          <div className='flex-grow-4'>
            <DashboardNavbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
