import React from 'react'
import Image from 'next/image'
import GraphImage from '../../public/ImageGraphHome.jpg'
import { ArrowUpRight } from 'lucide-react'

interface InvestorAcumenCardProps {
  title: string;
  description: string;
}

const InvestorAcumenCard: React.FC<InvestorAcumenCardProps> = ({ title, description }) => {
  return (
    <div className='bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]'>
      <div className='relative'>
        <Image
          src={GraphImage}
          alt={title}
          width={600}
          height={400}
          className='w-full h-64 object-cover'
        />
        <div className='absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/70 to-transparent'>
          <h2 className='text-2xl font-bold text-white'>{title}</h2>
        </div>
      </div>
      <div className='p-6'>
        <p className='text-gray-600 mb-4'>{description}</p>
        <button className='inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200'>
          Learn More <ArrowUpRight className='ml-2 h-4 w-4' />
        </button>
      </div>
    </div>
  )
}

export default InvestorAcumenCard