import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionTitle from "@/components/SectionTitle";

import Image from "next/image";
import authfb from '../../../public/AuthFacebook.svg'
import authld from '../../../public/AuthLinkedin.svg'
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AuthPage() {
    return (
        <>
            <section className="h-[60rem] bg-whitebg bg-cover bg-center bg-no-repeat">
                <MaxWidthWrapper>
                    <SectionTitle TextColor="black" VectorColor="Black" title="James A. Kostohryz" subtitle="Authentication" />
                    <div className="flex flex-col items-center mt-20">
                        <div className="w-[30rem] sm:w-[40rem] h-[26rem] relative bg-stone-500 rounded-3xl">
                            <div className="absolute right-24 bottom-[21.6rem]">
                                <Link href={'pid-help'}>
                                    <p className="text-blue-400 hover:text-blue-200 transition duration-300 underline">
                                        What is Profile Id?
                                    </p>
                                </Link>
                            </div>
                            <div className="flex flex-col gap-5 h-full items-center justify-center">
                                <div className="flex gap-4 items-center">
                                    <div>
                                        <Image
                                            src={authfb}
                                            alt="auth fb icon"
                                        />
                                    </div>
                                    <div>
                                        <input type="text" className="h-10 w-[16rem] pl-2 rounded-md" />
                                    </div>
                                </div>
                                <p className="text-white text-center text-lg">Or</p>
                                <div className="flex items-center">
                                    <div className="pr-2">
                                        <Image
                                            src={authld}
                                            alt="auth fb icon"
                                        />
                                    </div>
                                    <div className="">
                                        <input type="text" className="h-10 w-[16rem] pl-2 rounded-md" />
                                    </div>
                                </div>
                                <div className="pt-10">
                                    <Button variant={"sucess"} className="px-16">
                                        Login
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section >
        </>
    )
}