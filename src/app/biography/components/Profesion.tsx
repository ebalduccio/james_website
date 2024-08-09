import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import SectionTitle from '@/components/SectionTitle'
import { Book, Briefcase, GraduationCap } from 'lucide-react'
import ProfessionCard from '@/components/ProfesionCard'

const Profession = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <MaxWidthWrapper>
                <SectionTitle TextColor="black" VectorColor="Black" title="Curriculum Vitae" className='pt-0 pb-10' />

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <div className="flex items-center space-x-4">
                            <GraduationCap className="w-10 h-10 text-blue-600" />
                            <h2 className="text-3xl font-semibold text-gray-800">Education</h2>
                        </div>
                        <p className="text-lg text-gray-600 max-w-xl">
                            Dedicated to continuous learning and academic excellence, with a strong foundation in finance and economics from prestigious institutions.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ProfessionCard
                                title="Bachelor's Degree"
                                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae ipsam veniam? Molestiae minima, mollitia, impedit ipsam maiores reiciendis perspiciatis iste illo fugiat provident eos, asperiores alias accusantium hic repellendus?'
                                Icon={Book}
                            />
                            <ProfessionCard
                                title="Senior Financial Analyst"
                                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae ipsam veniam? Molestiae minima, mollitia, impedit ipsam maiores reiciendis perspiciatis iste illo fugiat provident eos, asperiores alias accusantium hic repellendus?'
                                Icon={Briefcase}
                            />
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-center space-x-4">
                            <Briefcase className="w-10 h-10 text-green-600" />
                            <h2 className="text-3xl font-semibold text-gray-800">Profession</h2>
                        </div>
                        <p className="text-lg text-gray-600 max-w-xl">
                            A distinguished career in global finance, marked by leadership roles and significant contributions to portfolio strategy and investment management.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ProfessionCard
                                title="Bachelor's Degree"
                                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae ipsam veniam? Molestiae minima, mollitia, impedit ipsam maiores reiciendis perspiciatis iste illo fugiat provident eos, asperiores alias accusantium hic repellendus?'
                                Icon={Book}
                            />
                            <ProfessionCard
                                title="Senior Financial Analyst"
                                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae ipsam veniam? Molestiae minima, mollitia, impedit ipsam maiores reiciendis perspiciatis iste illo fugiat provident eos, asperiores alias accusantium hic repellendus?'
                                Icon={Briefcase}
                            />
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default Profession