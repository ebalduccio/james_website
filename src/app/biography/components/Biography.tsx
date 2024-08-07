import React from 'react';
import Image from 'next/image';
import ImageBiography from '../../../../public/ImageBiography.jpg'

const Biography = () => {
  return (
    <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:'rgb(34,197,94)',stopOpacity:0.6}} />
              <stop offset="100%" style={{stopColor:'rgb(34,197,94)',stopOpacity:0}} />
            </linearGradient>
          </defs>
          <path d="M0,1000 L1000,1000 L1000,0 Q500,200 0,0 Z" fill="url(#grad)">
            <animate attributeName="d" 
              values="M0,1000 L1000,1000 L1000,0 Q500,200 0,0 Z;
                      M0,1000 L1000,1000 L1000,0 Q500,0 0,0 Z;
                      M0,1000 L1000,1000 L1000,0 Q500,200 0,0 Z"
              dur="20s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">Biography</h2>
        <div className="bg-gray-800 rounded-lg p-8 shadow-xl backdrop-blur-sm bg-opacity-75">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500 rounded-lg transform rotate-3"></div>
                <Image
                  src={ImageBiography}
                  alt="James A. Kostohryz"
                  width={500}
                  height={600}
                  className="relative z-10 rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-gray-300">James A. Kostohryz</h3>
              <p className="text-xl text-green-400 mb-4">Financial Expert & Global Strategist</p>
              <p className="text-gray-400 mb-6">
                With over two decades of experience, James A. Kostohryz has mastered the art of investing and trading across global asset classes. His journey began as an analyst at one of the world's premier asset management firms, where he covered a diverse range of sectors including emerging markets, banking, energy, and real estate.
              </p>
              <p className="text-gray-400">
                Kostohryz's expertise led him to become a Global Portfolio Strategist and Head of International Investments at a major investment bank, solidifying his position as a leader in the financial world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;