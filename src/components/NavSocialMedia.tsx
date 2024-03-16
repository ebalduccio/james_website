import Image from 'next/image'
import FacebookIcon from '../../public/FacebookHome.svg'
import TwitterIcon from '../../public/TwitterHome.svg'
import LinkedinIcon from '../../public/LinkedinHome.svg'

import React from 'react'
import Link from 'next/link'

const NavSocialMedia = () => {
    return (
        <div className='w-44 h-12 bg-neutral-800 rounded-xl flex items-center justify-around'>
                <Link href={'/'} className='hover:bg-[#0866FF] duration-300 rounded p-2'>
                    <Image
                        src={FacebookIcon}
                        alt='facebook home icon'
                    />
                </Link>
                <span className='opacity-50'>
                    |
                </span>
                <Link href={'/'} className='hover:bg-gray-700 duration-300 rounded p-2'>
                    <Image
                        src={TwitterIcon}
                        alt='facebook home icon'
                    />
                </Link>
                <span className='opacity-50'>
                    |
                </span>
                <Link href={'/'} className='hover:bg-[#0A66C2] duration-300 rounded p-2'>
                    <Image
                        src={LinkedinIcon}
                        alt='facebook home icon'
                    />
            </Link>
        </div>
    )
}

export default NavSocialMedia