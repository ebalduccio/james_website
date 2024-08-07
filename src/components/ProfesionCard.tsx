import React from 'react'
import { LucideIcon, GraduationCap } from 'lucide-react'

interface ProfessionCardProps {
  title: string;
  description: string;
  Icon?: LucideIcon;
}

const ProfessionCard: React.FC<ProfessionCardProps> = ({ title, description, Icon = GraduationCap }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default ProfessionCard