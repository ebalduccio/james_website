import { UserIcon } from 'lucide-react'
import React from 'react'
import { BsList } from 'react-icons/bs'

function DashboardNavbar() {
  return (
    <header className='fixed z-0 h-20 px-4 w-full pl-[20rem] shadow-md'>
      <div className='flex items-center justify-between w-full h-full'>
        <button className='hover:bg-neutral-600 hover:text-white ml-3 rounded-md h-8 px-3 transition duration-300 ease-in-out flex items-center'>
          <BsList />
        </button>
        <div className='hover:bg-slate-200 group rounded-md h-16 flex items-center justify-around w-[16rem] transition duration-300 ease-in-out'>
          <div className='flex flex-col items-end'>
            <span className='font-bold text-lg'>
              James A. Kostohryz
            </span>
            <span className='text-slate-600 text-sm'>
              Admin
            </span>
          </div>
          <div className='h-10 w-10 rounded-full flex items-center justify-center bg-slate-300'>
            <UserIcon />
          </div>
        </div>
      </div>
    </header>
  )
}

export default DashboardNavbar