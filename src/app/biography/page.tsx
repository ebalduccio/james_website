'use client'

import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import SectionTitle from "@/components/SectionTitle"
import EducationGrid from "@/components/EducationGrid"
import InterestsCard from "@/components/InterestsCard"

import Image from "next/image"
import ImageBiography from '../../../public/ImageBiography.jpg'
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
                        <SectionTitle TextColor="white" VectorColor="White" title="Who i am?" />
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

            <section className="h-[135rem] md:h-[105rem] xl:h-[60rem] bg-whitebg bg-cover bg-no-repeat bg-center">
                <MaxWidthWrapper>
                    <SectionTitle TextColor="black" VectorColor="Black" title="Curriculum Vitae" />
                    <div className="flex flex-col xl:flex-row pt-28 items-center justify-center gap-36">
                        <div className="flex flex-col items-center gap-24">
                            <h1 className="text-4xl font-lora">Education</h1>
                            <p className="text-center text-lg max-w-md">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur inventore,
                                iusto molestiae laborum in eos est culpa ut vel ullam sed obcaecati modi dolor necessitatibus,
                                possimus incidunt sapiente voluptatum recusandae!
                            </p>
                            <div className="flex flex-col gap-10 md:flex-row">
                                <ProfesionCard />
                                <ProfesionCard />
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-24">
                            <h1 className="text-4xl font-lora">Profesion</h1>
                            <p className="text-center text-lg max-w-md">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur inventore,
                                iusto molestiae laborum in eos est culpa ut vel ullam sed obcaecati modi dolor necessitatibus,
                                possimus incidunt sapiente voluptatum recusandae!
                            </p>
                            <div className="flex flex-col gap-10 md:flex-row">
                                <ProfesionCard />
                                <ProfesionCard />
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>

            <section className="h-[120rem] lg:h-[75rem] bg-blackbg bg-neutral-600 bg-cover bg-center">
                <MaxWidthWrapper>
                    <SectionTitle TextColor="white" VectorColor="White" title="Interests" />
                    <div className="mt-20 flex flex-col lg:grid grid-cols-2 items-center gap-24">
                        <div className="grid grid-cols-2 items-center gap-14">
                            <InterestsCard />
                            <InterestsCard />
                            <InterestsCard />
                            <InterestsCard />
                            <InterestsCard />
                            <InterestsCard />
                        </div>
                        <div className="grid grid-cols-2 items-center gap-14">
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

            <section className="h-[90rem] lg:h-[70rem] bg-whitebg bg-center bg-cover bg-no-repeat">
                <MaxWidthWrapper>
                    <SectionTitle TextColor="black" VectorColor="Black" title="Personal Blog" />
                    <div className="flex flex-col-reverse pt-24 gap-20 lg:flex-row lg:justify-between items-center">
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
                        <div className="text-3xl max-w-lg">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Laudantium aliquam itaque ipsam ad earum laborum obcaecati sed quis placeat,
                            ut incidunt quibusdam iusto alias maiores molestias quia esse asperi
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>

        </>
    )
}