'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

// Importe os logos das plataformas
import InvestorAcumenLogo from '../../../../public/InvestorAcumenMd.svg'
import SeekingAlphaLogo from '../../../../public/SeekingAlphaMd.svg'
import TheStreetLogo from '../../../../public/TheStreetMd.svg'
import InvestingLogo from '../../../../public/InvestingMD.svg'

const platforms = [
  { name: 'Investor Acumen', logo: InvestorAcumenLogo, url: 'https://www.investoracumen.com/' },
  { name: 'Seeking Alpha', logo: SeekingAlphaLogo, url: 'https://seekingalpha.com/author/james-a-kostohryz' },
  { name: 'The Street', logo: TheStreetLogo, url: 'https://www.thestreet.com/author/james-kostohryz' },
  { name: 'Investing.com', logo: InvestingLogo, url: 'https://www.investing.com' },
]

// Mock data for recent publications
const recentPublications = [
  { title: 'The Impact of AI on Financial Markets', date: '2023-08-01', platform: 'Investor Acumen' },
  { title: 'Emerging Market Trends in 2023', date: '2023-07-28', platform: 'Seeking Alpha' },
  { title: 'Navigating Inflation: Investment Strategies', date: '2023-07-25', platform: 'The Street' },
  { title: 'Cryptocurrency: A New Asset Class?', date: '2023-07-22', platform: 'Investing.com' },
  { title: 'ESG Investing: Balancing Profit and Purpose', date: '2023-07-20', platform: 'Investor Acumen' },
]

const PublicationsPage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">James A. Kostohryz Publications</h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Featured Platforms</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {platforms.map((platform) => (
              <motion.div
                key={platform.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={platform.url} target="_blank" rel="noopener noreferrer">
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="flex items-center justify-center p-4">
                      <Image
                        src={platform.logo}
                        alt={`${platform.name} logo`}
                        width={150}
                        height={50}
                        objectFit="contain"
                      />
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Publications</h2>
          <TabGroup>
            <TabList className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 mb-4">
              {platforms.map((platform) => (
                <Tab
                  key={platform.name}
                  className={({ selected }) =>
                    `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700
                    ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2
                    ${
                      selected
                        ? 'bg-white shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    }`
                  }
                >
                  {platform.name}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {platforms.map((platform) => (
                <TabPanel
                  key={platform.name}
                  className="rounded-xl bg-white p-3 shadow-md"
                >
                  <ul>
                    {recentPublications
                      .filter((pub) => pub.platform === platform.name)
                      .map((publication, idx) => (
                        <li
                          key={idx}
                          className="relative rounded-md p-3 hover:bg-gray-100"
                        >
                          <h3 className="text-sm font-medium leading-5">
                            {publication.title}
                          </h3>
                          <p className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                            <span>{publication.date}</span>
                            <span>&middot;</span>
                            <span>{publication.platform}</span>
                          </p>
                          <Link
                            href="#"
                            className="absolute inset-0 rounded-md"
                            target="_blank"
                          />
                        </li>
                      ))}
                  </ul>
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>

        <div className="text-center">
          <Button
            variant="default"
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            View All Publications
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PublicationsPage