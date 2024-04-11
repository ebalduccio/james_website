import React, { ReactNode } from 'react'

function DashboardContent({ children }: {children: ReactNode}) {
    return (
        <div className='flex-grow p-2 mt-20 text-black pl-[20.4rem]'>
            {children}
        </div>
    )
}

export default DashboardContent