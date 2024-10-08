import React from 'react'
import { SIDEBARP } from '@/constants/SIDEBARPB_CONSTANT'
import { cn } from '@/lib/utils'
import SidebarMenuItems from '@/app/personalblog/components/SidebarMenuItems'

const Leftbar = ({ className }: { className?: string }) => {
    return (
        <aside className={cn('w-[15rem] h-screen max-h-screen sticky hidden lg:block top-[6rem]', className)}>
            <div className='flex flex-col gap-6 w-48 ml-4 mt-4 transition duration-300'>
                {SIDEBARP.map((item, index) => {
                    return (
                        <SidebarMenuItems key={index} item={item} />
                    )
                })}
            </div>
        </aside>
    )
}

export default Leftbar