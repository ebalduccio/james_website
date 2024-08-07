'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import NavSocialMedia from '@/components/NavSocialMedia'
import { Button } from '@/components/ui/button'
import { Slides } from '@/constants'

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? Slides.length - 1 : prev - 1))
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === Slides.length - 1 ? 0 : prev + 1))
    }

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000) // Auto-advance every 5 seconds
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="relative h-screen overflow-hidden">
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={Slides[currentSlide].url}
                        alt={`Slide ${currentSlide + 1}`}
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50" /> {/* Overlay for better text visibility */}
                </motion.div>
            </AnimatePresence>

            <MaxWidthWrapper className="relative h-full flex flex-col justify-center items-center text-white">
                <motion.h1 
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-6xl md:text-8xl font-bold mb-8 text-center"
                >
                    James A. Kostohryz
                </motion.h1>
                <motion.p 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="max-w-2xl text-xl md:text-2xl text-center mb-12"
                >
                    Financial Expert & Global Strategist: Navigating Markets, Shaping Futures
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <Link href="/biography">
                        <Button 
                            variant="default" 
                            size="lg"
                            className="bg-white text-black hover:bg-gray-200 transition-colors"
                        >
                            Explore My Biography
                        </Button>
                    </Link>
                </motion.div>
                
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                    <NavSocialMedia />
                </div>
            </MaxWidthWrapper>

            <button 
                onClick={prevSlide} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 transition-all"
            >
                <ChevronLeft size={40} className="text-white" />
            </button>
            <button 
                onClick={nextSlide} 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-2 transition-all"
            >
                <ChevronRight size={40} className="text-white" />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {Slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full ${
                            currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
                        }`}
                    />
                ))}
            </div>
        </section>
    )
}

export default Hero