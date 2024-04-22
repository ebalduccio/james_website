import { SideBarPbItems } from '@/types/types'
import Link from 'next/link'
import React from 'react'

const SidebarMenuItems = ({ item }: { item: SideBarPbItems }) => {
    const MenuStyle = 'flex items-center gap-4 mt-4 hover:text-neutral-600'
    const SubMenuStyle = 'flex items-center gap-4 mt-4 hover:text-neutral-600'
    return (
        <>
            {
                item.subMenu
                    ? (
                        <div className={SubMenuStyle}>
                            {item.title}
                        </div>
                    )
                    : (
                        <Link href={item.href} className={MenuStyle}>
                            {item.icon}
                            {item.title}
                        </Link>
                    )
            }
        </>
    )
}

export default SidebarMenuItems