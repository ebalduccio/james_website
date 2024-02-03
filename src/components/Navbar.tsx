'use client'

import Image from 'next/image'
import Burguer from '../../public/Hamburguer.svg'
import Close from '../../public/Cancel.svg'

import React, { useState } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { Button } from './ui/button'
import NavLinks from './NavLinks'
import NavLinksMobile from './NavLinksMobile'

const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <>
            <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
                <header className='relative bg-white border-b h-16'>
                    <MaxWidthWrapper className='flex h-16'>
                        <div className='flex justify-between items-center w-full lg:w-auto'>
                            <div className='ml-4 md:ml-2 self-stretch flex items-center'>
                                <Link href={'/'}>
                                    <h1 className='text-4xl font-lora'>JK</h1>
                                </Link>
                            </div>
                            <div className='lg:hidden duration-200' onClick={() => setOpen(!open)}>
                                <Image
                                    src={open ? Close : Burguer}
                                    alt='burguer icon'
                                />
                            </div>
                        </div>
                        <div className='w-full hidden lg:flex gap-12 justify-center items-center h-full'>
                            <NavLinks />
                        </div>
                        <div className='hidden lg:flex items-center'>
                            <Button variant={'grayhome'}>
                                Authorization
                                &rarr;
                            </Button>
                        </div>
                    </MaxWidthWrapper>
                </header>
            </div>
            {/*Mobile Nav*/}
            <div className={`lg: z-10 pt-20 bg-white fixed border-r w-72 h-full duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
                <div className='h-screen w-full'>
                    <div className='flex flex-col w-full justify-start gap-8'>
                        <div className='flex w-full overflow-hidden flex-col mt-2 gap-8'>
                            <NavLinksMobile />
                        </div>
                        <div className='ml-4'>
                            <Link href={'/auth'}>
                                <Button variant={'grayhome'}>
                                    Authorization
                                    &rarr;
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar