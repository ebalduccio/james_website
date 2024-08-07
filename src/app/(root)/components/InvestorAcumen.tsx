'use client'

import React from 'react'
import { TrendingUp, DollarSign, PieChart, BarChart2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import GraphImage from '../../../../public/ImageGraphHome.jpg'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import SectionTitle from '@/components/SectionTitle'

const InvestorAcumen = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden relative">
      {/* Animated background graphs */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
          <g fill="none" stroke="currentColor" strokeWidth="2">
            {/* Line graph */}
            <path d="M0,500 Q250,450 500,550 T1000,450" className="animate-draw">
              <animate attributeName="d" 
                values="M0,500 Q250,450 500,550 T1000,450;M0,450 Q250,550 500,450 T1000,550;M0,500 Q250,450 500,550 T1000,450"
                dur="20s" repeatCount="indefinite" />
            </path>
            
            {/* Bar chart */}
            <g className="animate-grow origin-bottom">
              <rect x="100" y="700" width="50" height="200" />
              <rect x="300" y="600" width="50" height="300" />
              <rect x="500" y="750" width="50" height="150" />
              <rect x="700" y="550" width="50" height="350" />
              <rect x="900" y="650" width="50" height="250" />
            </g>
            
            {/* Pie chart */}
            <path d="M850,200 L850,50 A150,150 0 0,1 975,200 Z" className="animate-pulse" />
            <path d="M850,200 L975,200 A150,150 0 0,1 850,350 Z" className="animate-pulse" />
            <path d="M850,200 L850,350 A150,150 0 0,1 725,200 Z" className="animate-pulse" />
            <circle cx="850" cy="200" r="150" className="animate-pulse" />
          </g>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle TextColor='white' VectorColor='White' title='Investor Acumen' className='pt-0 pb-10'  />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: TrendingUp, title: "Market Trends" },
            { icon: DollarSign, title: "Financial Analysis" },
            { icon: PieChart, title: "Portfolio Diversification" },
            { icon: BarChart2, title: "Performance Metrics" }
          ].map((item, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-lg border-0 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <item.icon className="w-12 h-12 mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{item.title}</h3>
                <p className="text-sm text-gray-300">Gain insights into {item.title.toLowerCase()} with our expert analysis.</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/5 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold mb-4">Empower Your Investment Decisions</h3>
            <p className="text-lg mb-8 leading-relaxed text-gray-300">
              Leverage cutting-edge analytics and expert insights to navigate the complex world of finance. Our platform provides in-depth research, real-time market data, and personalized strategies to enhance your investment portfolio.
            </p>
            <Link href="/investoracumen" passHref>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                Explore Investor Acumen
              </Button>
            </Link>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={GraphImage}
                alt="Investment Analytics Dashboard"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes grow {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        .animate-draw {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 20s linear infinite;
        }
        .animate-grow {
          animation: grow 4s ease-out infinite alternate;
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  )
}

export default InvestorAcumen