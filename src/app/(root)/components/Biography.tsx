'use client'

import React from 'react'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Pic1 from '../../../../public/Pic1.jpg'
import SectionTitle from '@/components/SectionTitle'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const Biography = () => {
  return (
    <section className="py-12 md:py-24 bg-gray-900 text-white overflow-hidden relative">
      {/* Angular, growing stock chart animation background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor:'rgb(34,197,94)',stopOpacity:0.6}} />
              <stop offset="100%" style={{stopColor:'rgb(34,197,94)',stopOpacity:0}} />
            </linearGradient>
          </defs>
          
          <path d="M0,300 L0,250 L100,200 L200,220 L300,180 L400,230 L500,150 L600,200 L700,100 L800,150 L900,50 L1000,100 L1000,300 Z" 
                fill="url(#grad)" stroke="rgb(34,197,94)" strokeWidth="3">
            <animate attributeName="d" 
              values="
                M0,300 L0,250 L100,200 L200,220 L300,180 L400,230 L500,150 L600,200 L700,100 L800,150 L900,50 L1000,100 L1000,300 Z;
                M0,300 L0,280 L100,260 L200,240 L300,220 L400,200 L500,180 L600,160 L700,140 L800,120 L900,100 L1000,80 L1000,300 Z;
                M0,300 L0,250 L100,200 L200,220 L300,180 L400,230 L500,150 L600,200 L700,100 L800,150 L900,50 L1000,100 L1000,300 Z"
              dur="30s" repeatCount="indefinite" />
          </path>
          
          <g>
            <animate attributeName="transform" type="translate" from="1000,0" to="-1000,0" dur="30s" repeatCount="indefinite" />
            <path d="M0,250 L100,200 L200,220 L300,180 L400,230 L500,150 L600,200 L700,100 L800,150 L900,50 L1000,100" 
                  fill="none" stroke="rgb(34,197,94)" strokeWidth="3" />
          </g>
        </svg>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .float-animation {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
      
      <SectionTitle TextColor='White' VectorColor='White' title='Biography' className='pt-0 pb-8 md:pb-16 relative z-10'/>
      <div className="container mx-auto px-4 relative z-10">
        <Card className="bg-gray-800/90 border-gray-700 backdrop-blur-sm">
          <CardContent className="p-4 md:p-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl md:text-2xl font-semibold mb-2 text-gray-300">James A. Kostohryz</CardTitle>
                  <CardDescription className="text-base md:text-lg mb-4 md:mb-6 text-gray-400">Financial Expert & Global Strategist</CardDescription>
                </CardHeader>
                <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed text-gray-300">
                  With over two decades of experience, James A. Kostohryz has mastered the art of investing and trading across global asset classes. His journey began as an analyst at one of the world's premier asset management firms, where he covered a diverse range of sectors including emerging markets, banking, energy, and real estate. Kostohryz's expertise led him to become a Global Portfolio Strategist and Head of International Investments at a major investment bank, solidifying his position as a leader in the financial world.
                </p>
                <Link href="/biography" passHref>
                  <Button variant="default" className="w-full md:w-auto">
                    Read Full Biography
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
              <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0">
                <div className="relative w-full aspect-[3/4] md:aspect-square lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl float-animation">
                  <Image
                    src={Pic1}
                    alt="James A. Kostohryz"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Biography