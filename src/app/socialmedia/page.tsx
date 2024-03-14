import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PublicationSocialMedia from "@/components/PublicationSocialMedia";
import SectionTitle from "@/components/SectionTitle";

import Image from "next/image";
import fbicon from '../../../public/FacebookMD.svg'
import tticon from '../../../public/TwitterMD.svg'
import ldicon from '../../../public/LinkedinMD.svg'
import igicon from '../../../public/InstagramMD.svg'
import SeparatorVector from '../../../public/SeparatorWhiteVector.svg'
import Link from "next/link";

export default function SocialMediaPage() {
    return (
        <>
            <section className="h-[25rem] bg-whitebg bg-cover bg-no-repeat bg-center">
                <MaxWidthWrapper>
                    <div className="py-32 mx-auto flex items-center justify-center">
                        <h1 className="text-8xl font-lora text-center">Social Media</h1>
                    </div>
                </MaxWidthWrapper>
            </section>
            <section className="h-[95rem] md:h-[80rem] bg-blackbg bg-cover bg-center bg-no-repeat bg-neutral-600">
                <MaxWidthWrapper>
                    <SectionTitle TextColor="white" VectorColor="White" title="Social Media" subtitle="Recents Publications" />
                    <div className="flex flex-col md:flex-row gap-20 items-center pt-20">
                        <div className="w-[32rem] lg:w-[50rem] h-[48rem] rounded-md bg-white">
                            <div className="pt-px ml-2">
                                <div className="my-5 mx-5 bg-stone-500 rounded-full h-6 flex items-center justify-center w-36">
                                    <h2 className="text-center text-white font-roboto text-xs max-w-md">Recent Publications:</h2>
                                </div>
                            </div>
                            <div className="flex flex-col gap-10 items-center">
                                <PublicationSocialMedia />
                                <PublicationSocialMedia />
                                <PublicationSocialMedia />
                            </div>
                        </div>
                        <div className="hidden xl:block">
                            <Image
                                src={SeparatorVector}
                                alt="separator vector"
                            />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-1 items-center gap-20">
                            <Link href={"https://www.facebook.com/jameskostohryz"} target="_blank">
                                <div>
                                    <Image
                                        src={fbicon}
                                        alt="fb icon"
                                    />
                                </div>
                            </Link>
                            <Link href={"https://x.com/jameskostohryz?s=20"} target="_blank">
                                <div>
                                    <Image
                                        src={tticon}
                                        alt="tt icon"
                                    />
                                </div>
                            </Link>
                            <Link href={"https://www.linkedin.com/in/jameskostohryz/es"} target="_blank">
                                <div>
                                    <Image
                                        src={ldicon}
                                        alt="ld icon"
                                    />
                                </div>
                            </Link>
                            <Link href={"https://www.instagram.com/jameskostohryz/"} target="_blank">
                                <div>
                                    <Image
                                        src={igicon}
                                        alt="ld icon"
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    )
}