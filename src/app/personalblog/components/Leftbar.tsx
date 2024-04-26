import React from 'react'
import SidebarMenuItems from './SidebarMenuItems'
import { SIDEBARPB } from '@/constants/SIDEBARPB_CONSTANT'
import { cn } from '@/lib/utils'

const Leftbar = ({ className }: { className?: string }) => {
    return (
        <aside className={cn('w-[15rem] h-screen max-h-screen sticky top-[3rem]', className)}>
            <div className='flex flex-col gap-6 w-48 ml-4 mt-4 transition duration-300'>
                {SIDEBARPB.map((item, index) => {
                    return (
                        <SidebarMenuItems key={index} item={item} />
                    )
                })}
            </div>
        </aside>
    )
}

export default Leftbar