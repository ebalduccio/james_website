import { FooterContact, NavItems, FooterResources } from '@/constants'
import Link from 'next/link'
import React from 'react'

const FooterLinks = () => {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-8'>
            <div>
                <h3 className='text-white text-lg font-semibold mb-3'>Quick Links</h3>
                <ul className='space-y-2'>
                    {NavItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href}>
                                <span className='hover:text-white transition-colors duration-300'>
                                    {item.label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className='text-white text-lg font-semibold mb-3'>Resources</h3>
                <ul className='space-y-2'>
                    {FooterResources.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href}>
                                <span className='hover:text-white transition-colors duration-300'>
                                    {item.label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className='text-white text-lg font-semibold mb-3'>Contact</h3>
                <ul className='space-y-2'>
                    {FooterContact.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} target='_blank' rel="noopener noreferrer">
                                <span className='hover:text-white transition-colors duration-300'>
                                    {item.label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FooterLinks