'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Lock, ArrowRight } from 'lucide-react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import SectionTitle from '@/components/SectionTitle'
import { Button } from '@/components/ui/button'
import DangerIcon from '../../../../public/DangerIcon.svg'

const PersonalBlog = () => {
    return (
        <section className="bg-gradient-to-br from-gray-900 to-black py-20">
            <MaxWidthWrapper>
                <SectionTitle TextColor="white" VectorColor="White" title="Personal Blog" className='pt-0 pb-10' />
                
                <div className="mt-12 flex flex-col lg:flex-row items-center justify-between gap-12">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-white font-sans text-3xl lg:text-4xl font-bold leading-tight mb-6">
                            Exclusive Insights and Personal Reflections
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Dive deep into James' thoughts on current market trends, personal investment strategies, and behind-the-scenes glimpses of his professional journey. This blog offers a unique perspective that you won't find anywhere else.
                        </p>
                        <div className="flex items-center text-yellow-400">
                            <Image
                                src={DangerIcon}
                                alt="Exclusive content icon"
                                width={24}
                                height={24}
                                className="mr-2"
                            />
                            <p className="text-sm">Exclusive content for James' professional network</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:w-5/12"
                    >
                        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
                            <div className="flex items-center justify-center mb-6">
                                <Lock className="text-yellow-400 w-12 h-12" />
                            </div>
                            <h3 className="text-white text-xl font-semibold text-center mb-4">
                                Exclusive Access
                            </h3>
                            <p className="text-gray-300 text-center mb-8">
                                Only individuals connected with James on Facebook or LinkedIn can access his personal blog.
                            </p>
                            <Button 
                                variant="default"
                                size="lg"
                                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                            >
                                Authenticate <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default PersonalBlog