import React from 'react'
import { cn } from '@/lib/utils'
import SidebarMenuItems from '@/app/personalblog/components/SidebarMenuItems'
import { SIDEBARSM } from '@/constants/SIDEBARPB_CONSTANT'

const Leftbar = ({ className }: { className?: string }) => {
    return (
        <aside className={cn('w-[15rem] h-screen max-h-screen sticky hidden lg:block top-[6rem]', className)}>
            <div className='flex flex-col gap-6 w-48 ml-4 mt-4 transition duration-300'>
                {SIDEBARSM.map((item, index) => {
                    return (
                        <SidebarMenuItems key={index} item={item} />
                    )
                })}
            </div>
        </aside>
    )
}

export default Leftbar