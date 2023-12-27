'use client'

import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import SectionTitle from "@/components/SectionTitle"

import Image from "next/image"
import ImageBiography from '../../../public/ImageBiography.jpg'
import Educationicon from '../../../public/Education.svg'
import EducationGrid from "@/components/EducationGrid"
import InterestsCard from "@/components/InterestsCard"

export default function Biography() {
    return (
        <>
            <section className="h-[25rem] bg-whitebg bg-cover bg-no-repeat bg-center">
                <MaxWidthWrapper>
                    <div className=" py-32 mx-auto flex items-center justify-center">
                        <h1 className="text-5xl font-lora text-center">Biography</h1>
                    </div>
                </MaxWidthWrapper>
            </section>
            <section className="h-[85rem] lg:h-[55rem] bg-blackbg bg-cover bg-center bg-no-repeat bg-neutral-600"  >
                <MaxWidthWrapper>
                    <div>
                        <SectionTitle TextColor="white" VectorColor="White" title="Personal Blog" />
                        <div className="mt-20">
                            <div className="flex flex-col items-center lg:flex-row gap-20">
                                <h1 className="text-white text-xl font-lora min-w-[30rem]">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cum enim, vel quisquam laboriosam voluptate voluptas suscipit corrupti qui,
                                    eveniet ex itaque aut! Quae, enim blanditiis culpa ducimus nemo eligendi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, eligendi voluptatum doloribus fugiat error numquam, sunt eos quisquam quia amet quas laborum,
                                    architecto dolorum necessitatibus alias dolorem sapiente accusamus placeat!
                                </h1>
                                <div className="min-w-[30rem] md:min-w-[20rem]">
                                    <Image
                                        src={ImageBiography}
                                        alt="image biography"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
            <section className="h-[90rem] lg:h-[55rem] bg-whitebg bg-cover bg-no-repeat bg-center">
                <MaxWidthWrapper>
                    <SectionTitle TextColor="black" VectorColor="Black" title="Education" />
                    <div className="flex flex-col lg:grid grid-cols-2 gap-10 items-center mt-20">
                        <EducationGrid />
                        <EducationGrid />
                        <EducationGrid />
                        <EducationGrid />
                    </div>
                </MaxWidthWrapper>
            </section>
            <section className="h-[240rem] lg:h-[60rem] bg-blackbg bg-cover bg-center bg-neutral-600">
                <MaxWidthWrapper>
                    <SectionTitle TextColor="white" VectorColor="White" title="Interests" />
                    <div className="flex flex-col lg:flex-row items-center gap-32">
                        <div className="flex flex-col lg:grid grid-cols-2 items-center gap-20">
                            <InterestsCard />
                            <InterestsCard />
                            <InterestsCard />
                            <InterestsCard />
                            <InterestsCard />
                            <InterestsCard />
                        </div>
                        <div className="flex flex-col lg:grid grid-cols-2 items-center gap-10">
                            <InterestsCard />
                            <InterestsCard />
                            <InterestsCard />
                            <InterestsCard />
                            <InterestsCard />
                            <InterestsCard />
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    )
}