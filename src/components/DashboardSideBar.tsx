import { SIDENAV_ITEMS } from '@/constants/SIDENAV_CONSTANT';
import Link from 'next/link';
import React from 'react'

function DashboardSideBar() {
  return (
    <>
      <aside className='fixed bg-neutral-600 z-50 w-[20rem] h-full text-white'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-5xl pt-10'>
            JK
          </h1>
        </div>
        <div className='flex flex-col gap-6 w-48 ml-4 mt-4 transition duration-300'>
          {SIDENAV_ITEMS.map((item, index) => {
            return (
              < Link href={item.href} key={item.title} className='w-full h-10 rounded-sm px-4 duration-300 hover:bg-slate-200 hover:text-black font-normal flex items-center' >
                {item.title}
              </Link>
            )
          })}
        </div>
      </aside >
    </>
  )
}

export default DashboardSideBar