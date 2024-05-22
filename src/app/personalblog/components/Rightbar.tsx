import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const SidebarPB = () => {
  return (
    <div className='w-full  h-screen max-h-screen sticky hidden lg:block top-[6rem]'>
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search" className="pl-8" />
      </div>
    </div >
  )
}

export default SidebarPB