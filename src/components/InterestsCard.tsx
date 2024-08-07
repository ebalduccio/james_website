import React from 'react'
import { LucideIcon, BookOpen } from 'lucide-react'

interface InterestsCardProps {
  title: string;
  description: string;
  Icon?: LucideIcon;
}

const InterestsCard: React.FC<InterestsCardProps> = ({ title, description, Icon = BookOpen }) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 transition-all duration-300 hover:bg-opacity-20 hover:scale-105 group">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-3 bg-white bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition-all duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export default InterestsCard