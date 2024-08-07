'use client'

import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import FooterLinks from './FooterLinks'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Send } from 'lucide-react'

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-gray-300 py-16'>
            <MaxWidthWrapper>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
                    <div className='space-y-6'>
                        <h1 className='text-white font-serif text-4xl'>
                            James Kostohryz
                        </h1>
                        <p className='text-gray-400 max-w-md'>
                            Financial expert and global strategist with decades of experience in navigating complex market dynamics and shaping investment futures.
                        </p>
                        <div className='pt-4'>
                            <FooterLinks />
                        </div>
                    </div>
                    
                    <div className='lg:col-span-2'>
                        <h2 className='font-serif text-3xl text-white mb-6'>Get in Touch</h2>
                        <form className='space-y-4'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <Input type="text" placeholder='Name' className='bg-gray-800 border-gray-700 text-white' />
                                <Input type="email" placeholder='Email' className='bg-gray-800 border-gray-700 text-white' />
                                <Input type="tel" placeholder='Phone' className='bg-gray-800 border-gray-700 text-white' />
                                <Input type="text" placeholder='Subject' className='bg-gray-800 border-gray-700 text-white' />
                            </div>
                            <Textarea placeholder='Your Message...' className='bg-gray-800 border-gray-700 text-white h-32' />
                            <div className='flex justify-end'>
                                <Button variant='default' className='bg-blue-600 hover:bg-blue-700 text-white'>
                                    Send Message
                                    <Send className='ml-2 h-4 w-4' />
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div className='mt-12 pt-8 border-t border-gray-800 text-center text-gray-400'>
                    <p>&copy; {new Date().getFullYear()} James Kostohryz. All rights reserved.</p>
                </div>
            </MaxWidthWrapper>
        </footer>
    )
}

export default Footer