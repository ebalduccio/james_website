import '../globals.css'

import DashboardContent from '@/components/DashboardContent'
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
        <div className='flex min-h-screen'>
          <DashboardSideBar />
          <DashboardNavbar />
          <DashboardContent>
            {children}
          </DashboardContent>
        </div>
      </body>
    </html>
  )
}
