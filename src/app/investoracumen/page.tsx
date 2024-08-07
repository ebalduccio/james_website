import React from 'react';
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import InvestorAcumenLogo from '../../../public/InvestoracumenBig.svg';
import InvestorAcumenCard from "@/components/InvestorAcumenCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BarChart2, TrendingUp, Users } from 'lucide-react';

export default function InvestorAcumenPage() {
    return (
        <div className="relative overflow-hidden bg-gray-900 text-white">
            {/* Animated background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-950 to-gray-900 animate-gradient-xy"></div>
                <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                        <defs>
                            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{stopColor:'rgb(30,58,138)',stopOpacity:0.5}} />
                                <stop offset="100%" style={{stopColor:'rgb(30,58,138)',stopOpacity:0}} />
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
            </div>

            <div className="relative z-10">
                <section className="py-20 bg-gray-800 bg-opacity-50">
                    <MaxWidthWrapper>
                        <div className="flex flex-col items-center justify-center space-y-8">
                            <Link href={'https://www.investoracumen.com/'} target="_blank" className="transition-transform duration-300 hover:scale-105">
                                <Image
                                    src={InvestorAcumenLogo}
                                    alt="Investor Acumen Big Logo"
                                    width={400}
                                    height={100}
                                />
                            </Link>
                            <p className="text-xl text-blue-200 text-center max-w-2xl">
                                Empowering investors with cutting-edge financial insights and strategies.
                            </p>
                        </div>
                    </MaxWidthWrapper>
                </section>

                <section className="py-20 bg-gray-900 bg-opacity-70">
                    <MaxWidthWrapper>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-blue-300">About Investor Acumen</h2>
                                <p className="text-gray-300 mb-6">
                                    Investor Acumen is a pioneering financial technology company dedicated to revolutionizing the way investors approach market analysis and decision-making. Our mission is to democratize access to sophisticated financial tools and insights, empowering both individual and institutional investors to navigate the complexities of global markets with confidence.
                                </p>
                                <p className="text-gray-300 mb-6">
                                    Through our cutting-edge platform, we combine advanced data analytics, machine learning algorithms, and expert financial knowledge to provide real-time market intelligence, predictive analytics, and personalized investment strategies.
                                </p>
                                <div className="flex justify-start">
                                    <Link href={'https://www.investoracumen.com/'} target="_blank">
                                        <Button variant={'investoracumen'} className="group bg-blue-700 hover:bg-blue-600 text-white">
                                            Learn More About Us
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="bg-gray-800 p-6 rounded-lg">
                                    <BarChart2 className="w-12 h-12 text-blue-400 mb-4" />
                                    <h3 className="text-xl font-semibold mb-2 text-blue-200">Data-Driven Insights</h3>
                                    <p className="text-gray-400">Leverage big data and AI for smarter investment decisions.</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg">
                                    <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
                                    <h3 className="text-xl font-semibold mb-2 text-green-200">Performance Optimization</h3>
                                    <p className="text-gray-400">Maximize returns with our advanced portfolio strategies.</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg">
                                    <Users className="w-12 h-12 text-purple-400 mb-4" />
                                    <h3 className="text-xl font-semibold mb-2 text-purple-200">Community Insights</h3>
                                    <p className="text-gray-400">Connect with a network of savvy investors and experts.</p>
                                </div>
                            </div>
                        </div>
                    </MaxWidthWrapper>
                </section>

                <section className="py-20 bg-gray-950 bg-opacity-70">
                    <MaxWidthWrapper>
                        <SectionTitle TextColor="white" VectorColor="White" title="Our Services" className='pt-0 pb-10' />
                        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <InvestorAcumenCard
                                title="Financial Strategy"
                                description="Discover cutting-edge financial strategies to optimize your investment portfolio and maximize returns in volatile markets."
                            />
                            <InvestorAcumenCard
                                title="Market Analysis"
                                description="Gain deep insights into market trends and make informed investment decisions with our comprehensive analysis tools."
                            />
                        </div>
                        <div className="mt-16 flex justify-center lg:justify-end">
                            <Link href={'https://www.investoracumen.com/'} target="_blank">
                                <Button variant={'investoracumen'} className="group bg-blue-700 hover:bg-blue-600 text-white">
                                    Explore All Services
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </div>
                    </MaxWidthWrapper>
                </section>
            </div>
        </div>
    )
}