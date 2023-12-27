'use client'

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import NavSocialMedia from "@/components/NavSocialMedia";
import SectionTitle from "@/components/SectionTitle";
import SliderPoints from "@/components/SliderPoints";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Pic1 from '../../../public/Pic1.jpg';
import InvestorAcumenSectionLogo from '../../../public/InvestorAcumenLogo.svg'
import GraphImage from '../../../public/ImageGraphHome.jpg'
import SeparatorVector from '../../../public/SeparatorVector.svg'
import InvestorAcumenMd from '../../../public/InvestorAcumenMd.svg'
import InvestingMd from '../../../public/InvestingMd.svg'
import TheStreetMd from '../../../public/TheStreetMd.svg'
import SeekingAlphaMd from '../../../public/SeekingAlphaMd.svg'
import DangerIcon from '../../../public/DangerIcon.svg'

import Link from "next/link";
import { useState } from "react";
import { Slides } from "@/constants";

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import PublicationHome from "@/components/PublicationHome";

export default function Home() {

  const [currentSlide, setCurrentSlide] = useState<number>(0)

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newSlide = isFirstSlide ? Slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide)
  }

  const nextSlide = () => {
    const isLastSlide = currentSlide === Slides.length - 1;
    const newSlide = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide)
  }

  return (
    <>
      <section style={{ backgroundImage: `url(${Slides[currentSlide].url})` }} className="bg-no-repeat bg-center bg-cover h-auto duration-500">
        <MaxWidthWrapper>
          <div className="py-32 mx-auto flex flex-col max-w-3xl text-center font-lora">
            <h1 className=" text-white  text-8xl">
              James A. Kostohryz
            </h1>
            <p className="max-w-md pt-16 text-white mx-auto font-roboto text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="w-full flex justify-between text-white">
              <BsChevronCompactLeft size={30} onClick={prevSlide} className='hover:text-black cursor-pointer' />
              <BsChevronCompactRight size={30} onClick={nextSlide} className='hover:text-black cursor-pointer' />
            </div>
            <div className="mt-48 mx-auto">
              <NavSocialMedia />
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Link href={'/biography'}>
              <Button variant={"grayhome"}>
                My Biography
                &rarr;
              </Button>
            </Link>
          </div>
          <div className="flex justify-center mt-4 lg:mb-6">
            <SliderPoints />
          </div>
          <div className="mt-4">.</div>
        </MaxWidthWrapper>
      </section>
      <section className="h-[75rem] bg-whitebg bg-center bg-cover bg-no-repeat">
        <MaxWidthWrapper>
          <div>
            <SectionTitle TextColor="black" VectorColor="Black" title="Biography" />
          </div>
          <div className="flex flex-col lg:flex-row mt-24 lg:mt-60 justify-center gap-16 items-center">
            <div className="flex flex-col gap-12 lg:gap-32">
              <h2 className="font-roboto text-xl max-w-md">
                James A. Kostohryz has more than twenty years of experience investing and trading virtually every asset class across the globe.
                Kostohryz started his investment career as an analyst at one of the world's
                largest asset management firms covering sectors as diverse as emerging markets,
                banking, energy, construction, real estate, metals and mining. Later,
                Kostohryz became Global Portfolio Strategist and Head of International Investments for a major investment bank.
              </h2>
              <div>
                <Button variant={'grayhome'}>
                  Read More
                  &rarr;
                </Button>
              </div>
            </div>
            <div>
              <Image
                src={Pic1}
                alt="pic 1"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="h-[114rem] lg:h-[65rem] bg-blackbg bg-neutral-600 bg-center bg-cover bg-no-repeat">
        <MaxWidthWrapper>
          <div className="h-auto flex w-full pt-14 justify-center">
            <Image
              src={InvestorAcumenSectionLogo}
              alt="investor acumen section logo"
            />
          </div>
          <div className="flex flex-col lg:flex-row mt-16 gap-20 items-center text-white text-center justify-center">
            <div className="w-96 h-96 font-roboto rounded-xl bg-neutral-500 hover:bg-black duration-100 hover:border">
              <div className="flex flex-col mx-5 items-center h-full justify-center gap-10">
                <h2 className="text-4xl">
                  Title
                </h2>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="w-96 h-96 font-roboto rounded-xl bg-neutral-500 hover:bg-black duration-100 hover:border">
              <div className="flex flex-col mx-5 items-center h-full justify-center gap-10">
                <h2 className="text-4xl">
                  Title
                </h2>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row mt-10 gap-7 items-center justify-center">
            <div>
              <Image
                src={GraphImage}
                alt="graph image"
                className="rounded-xl"
              />
            </div>
            <div>
              <Image
                src={GraphImage}
                alt="graph image"
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="w-full justify-center lg:justify-end lg:pr-4 mt-5 lg:mt-6 flex">
            <Button variant={"grayhome"}>
              Read more
              &rarr;
            </Button>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="h-[104rem] lg:h-[68rem] bg-whitebg bg-center bg-cover bg-no-repeat">
        <MaxWidthWrapper>
          <SectionTitle TextColor="black" VectorColor="Black" title="Publications:" subtitle="Economics, Finance and Investing." />
          <div className="h-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between">
            <div className="h-[43.75rem] w-[36rem] mt-16 font-roboto bg-neutral-600 rounded-xl">
              <div className="my-5 mx-5 bg-white rounded-full h-6 flex items-center justify-center w-36">
                <h2 className="text-center font-roboto text-sm">Recent Publications:</h2>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <PublicationHome logo="MiniInvestorAcumen" />
                <PublicationHome logo="MiniInvesting" />
                <PublicationHome logo="MiniSeekingAlpha" />
              </div>
              <div className="flex items-center justify-end pr-8 pt-4">
                <Button variant={'grayhome'}>
                  Read more
                  &rarr;
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <Image
                src={SeparatorVector}
                alt="separator vector"
              />
            </div>
            <div className="flex flex-col mt-12 gap-28 lg:gap-20">
              <div>
                <Link href={'https://www.investoracumen.com/'}>
                  <Image
                    src={InvestorAcumenMd}
                    alt="investor acumen md"
                  />
                </Link>
              </div>
              <div>
                <Link href={'/'}>
                  <Image
                    src={InvestingMd}
                    alt="investing md"
                  />
                </Link>
              </div>
              <div>
                <Link href={'/'}>
                  <Image
                    src={TheStreetMd}
                    alt="the street md"
                  />
                </Link>
              </div>
              <div>
                <Link href={'/'}>
                  <Image
                    src={SeekingAlphaMd}
                    alt="seeking alpha md"
                  />
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="h-[68.5rem] lg:h-[50rem] w-full bg-blackbg bg-center bg-no-repeat bg-cover bg-neutral-600">
        <MaxWidthWrapper>
          <SectionTitle TextColor="white" VectorColor="White" title="Personal Blog" />
          <div className="flex flex-col lg:flex-row items-center mt-20 lg:justify-center gap-28">
            <h2 className="text-white font-roboto text-3xl mt-16 text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Itaque quos sequi perspiciatis eveniet iusto officiis,
              culpa hic saepe ratione at,
              dignissimos omnis officia esse dicta repellat totam laudantium reiciendis. Cupiditate.
            </h2>
            <div className="h-80 w-[27rem] min-w-[27rem] bg-neutral-400 rounded-lg">
              <Image
                src={DangerIcon}
                alt="danger icon"
                className="pt-2 ml-2"
              />
              <div className="flex flex-col gap-20 items-center">
                <h2 className="text-center text-white font-roboto max-w-sm text-2xl mt-5">
                  Only people James has accepted on Facebook or LinkedIn can access his personal blog.
                </h2>
                <Button variant={'ghost'}>
                  Authenticate
                  &rarr;
                </Button>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="h-[54rem] md:h-[49rem] w-full bg-whitebg bg-cover bg-center bg-no-repeat">
        <MaxWidthWrapper>
          <SectionTitle TextColor="black" VectorColor="Black" title="Contact" />
          <div className="flex flex-col items-center">
            <h1 className="font-lora text-3xl text-center mt-16">Get in Touch</h1>
            <div className="h-[35rem] w-[33rem] md:h-[28rem] md:w-[40rem] mt-5 bg-zinc-300 rounded-lg">
              <div className="flex flex-col md:grid grid-cols-2 items-center gap-x-20 mx-4 gap-y-7 mt-24">
                <input type="text" className="rounded-full w-[30rem] md:w-[16rem] h-8 placeholder:pl-2" placeholder="Name:" />
                <input type="text" className="rounded-full w-[30rem] md:w-[16rem] h-8 placeholder:pl-2" placeholder="Surname:" />
                <input type="text" className="rounded-full w-[30rem] md:w-[16rem] h-8 placeholder:pl-2" placeholder="E-mail:" />
                <input type="text" className="rounded-full w-[30rem] md:w-[16rem] h-8 placeholder:pl-2" placeholder="Phone:" />
              </div>
              <div className="w-full flex justify-center">
                <input type="text" placeholder="Your message..." className="mt-12 p-4 h-32 w-[28rem] rounded-lg duration-200 hover:bg-black text-black" />
              </div>
              <div className="flex flex-row-reverse mr-10 mt-5">
                <Button variant={'send'}>
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
