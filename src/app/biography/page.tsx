'use client'

import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import SectionTitle from "@/components/SectionTitle"
import EducationGrid from "@/components/EducationGrid"
import InterestsCard from "@/components/InterestsCard"

import Image from "next/image"
import ImageBiography from '../../../public/ImageBiography.jpg'
import BlackSeparator from '../../../public/SeparatorVector.svg'
import ProfesionCard from "@/components/ProfesionCard"
import PublicationBiography from "@/components/PublicationBiography"


export default function Biography() {
    return (
        <>
            <section className="h-[25rem] bg-whitebg bg-cover bg-no-repeat bg-center">
                <MaxWidthWrapper>
                    <div className=" py-32 mx-auto flex items-center justify-center">
                        <h1 className="text-8xl font-lora text-center">Biography</h1>
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
            <section className="h-[134rem] md:h-[90rem] lg:h-[63rem] bg-blackbg bg-cover bg-no-repeat bg-center bg-neutral-600">
                <MaxWidthWrapper>
                    <SectionTitle TextColor="white" VectorColor="White" title="Profesion" />
                    <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8 mt-10">
                        <h1 className="text-white text-2xl max-w-md">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque suscipit sequi,
                            sint assumenda explicabo laborum architecto voluptates.
                            Tempore libero placeat illum quas, natus facere repellendus vero voluptatem voluptas,
                            possimus eum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit ex beatae nulla minima,
                            omnis vitae eius, qui voluptatibus optio odio unde? Atque velit consequatur esse iure nesciunt dolorum deserunt dolores.
                        </h1>
                        <div className="flex flex-col sm:grid grid-cols-2 items-center gap-10">
                            <ProfesionCard />
                            <ProfesionCard />
                            <ProfesionCard />
                            <ProfesionCard />
                            <ProfesionCard />
                            <ProfesionCard />
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
            <section className="h-[215rem] md:h-[120rem] lg:h-[70rem] bg-whitebg bg-cover bg-center">
                <MaxWidthWrapper>
                    <SectionTitle TextColor="black" VectorColor="Black" title="Interests" />
                    <div className="mt-20 flex flex-col md:grid grid-cols-2 items-center gap-24">
                        <div className="flex flex-col lg:grid grid-cols-2 items-center gap-14">
                            <InterestsCard />
                            <InterestsCard />
                            <InterestsCard />
                            <InterestsCard />
                            <InterestsCard />
                            <InterestsCard />
                        </div>
                        <div className="flex flex-col lg:grid grid-cols-2 items-center gap-14">
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
            <section className="h-[100rem] sm:h-[80rem] bg-blackbg bg-center bg-cover bg-no-repeat bg-neutral-600">
                <MaxWidthWrapper>
                    <SectionTitle TextColor="white" VectorColor="White" title="Personal Blog" />
                    <div className="flex flex-col gap-20 lg:flex-row lg:justify-between items-center">
                        <div className="h-[40rem] w-[40rem] lg:w-[42rem] rounded-lg bg-neutral-400">
                            <div className="pt-px ml-2">
                                <div className="my-5 mx-5 bg-white rounded-full h-6 flex items-center justify-center w-36">
                                    <h2 className="text-center font-roboto text-sm max-w-md">Recent Publications:</h2>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <PublicationBiography />
                                <PublicationBiography />
                                <PublicationBiography />
                            </div>
                        </div>
                        <div className="text-white text-3xl max-w-lg">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Laudantium aliquam itaque ipsam ad earum laborum obcaecati sed quis placeat,
                            ut incidunt quibusdam iusto alias maiores molestias quia esse asperiores! Cupiditate?
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    )
}