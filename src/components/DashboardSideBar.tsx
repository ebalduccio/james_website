import { NavItems } from '@/constants';
import Link from 'next/link';
import React from 'react'

function DashboardSideBar() {
  return (
    <div className='bg-neutral-600 text-white'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-5xl pt-10'>
          JK
        </h1>
        <div>
          <div>
            All Posts
          </div>
          <div>
            New Post
          </div>
        </div>
        <div>
          /
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        {NavItems.map((item, index) => {
          return (
            <Link key={index} href={item.href}>
              <div className='p-2 m-2 hover:bg-zinc-500 w-auto duration-300 rounded'>
                {item.label}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  )
}

export default DashboardSideBar