import React from 'react'
import SidebarMenuItems from './SidebarMenuItems'
import { SIDEBARPB } from '@/constants/SIDEBARPB_CONSTANT'

const Leftbar = () => {
    return (
        <aside className='w-[15rem] h-[40rem]'>
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