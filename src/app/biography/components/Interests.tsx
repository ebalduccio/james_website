import React from 'react'
import InterestsCard from '@/components/InterestsCard'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import SectionTitle from '@/components/SectionTitle'
import { BookOpen, Briefcase, Globe, BarChart2, Music, Camera, Palette, Coffee } from 'lucide-react'

const Interests = () => {
    const interests = [
        { title: "Reading", description: "Exploring diverse genres and expanding knowledge through literature.", Icon: BookOpen },
        { title: "Business", description: "Keeping up with market trends and innovative business strategies.", Icon: Briefcase },
        { title: "Travel", description: "Experiencing different cultures and broadening global perspectives.", Icon: Globe },
        { title: "Data Analysis", description: "Uncovering insights from complex financial datasets and market trends.", Icon: BarChart2 },
        { title: "Music", description: "Appreciating various genres and attending live performances.", Icon: Music },
        { title: "Photography", description: "Capturing moments and exploring visual storytelling.", Icon: Camera },
        { title: "Art", description: "Appreciating various forms of visual arts and visiting galleries.", Icon: Palette },
        { title: "Coffee", description: "Exploring different coffee cultures and brewing methods.", Icon: Coffee },
    ]

    return (
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
            <MaxWidthWrapper>
                <SectionTitle TextColor="white" VectorColor="White" title="Interests" />
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {interests.map((interest, index) => (
                        <InterestsCard
                            key={index}
                            title={interest.title}
                            description={interest.description}
                            Icon={interest.Icon}
                        />
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default Interests