'use client'

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import InvestorAcumenLogo from '../../../public/InvestorAcumenMd.svg'
import SeekingAlphaLogo from '../../../public/SeekingAlphaMd.svg'
import InvestingLogo from '../../../public/InvestingMD.svg'
import TheStreetLogo from '../../../public/TheStreetMd.svg'
import { useEffect, useState } from "react";
import axios from "axios";
import Publication from "@/components/Publication";
import Link from "next/link";

type DataProps = {
    title: string,
    link: string,
    date_pub: string
};

export default function PublicationsPage() {
    const [tsPosts, setTsPosts] = useState<DataProps[]>([]);
    const [iaPosts, setIaPosts] = useState<DataProps[]>([]);
    const [saPosts, setSaPosts] = useState<DataProps[]>([]);
    const [inPosts, setInPosts] = useState<DataProps[]>([]);

    useEffect(() => {
        const fetchTsPosts = async () => {
            const response = await axios.get<DataProps[]>('https://appdata.investoracumen.com/james/ts');
            setTsPosts(response.data);
        };

        fetchTsPosts();
    }, []);

    useEffect(() => {
        const fetchIaPosts = async () => {
            const response = await axios.get<DataProps[]>('https://appdata.investoracumen.com/james/ia');
            setIaPosts(response.data);
        };

        fetchIaPosts();
    }, []);

    useEffect(() => {
        const fetchSaPosts = async () => {
            const response = await axios.get<DataProps[]>('https://appdata.investoracumen.com/james/sa');
            setSaPosts(response.data);
        };

        fetchSaPosts();
    }, []);

    useEffect(() => {
        const fetchInPosts = async () => {
            const response = await axios.get<DataProps[]>('https://appdata.investoracumen.com/james/in');
            setInPosts(response.data);
        };

        fetchInPosts();
    }, []);

    if (!tsPosts || !iaPosts || !saPosts || !inPosts) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <section className="h-[25rem] bg-whitebg bg-cover bg-no-repeat bg-center">
                <MaxWidthWrapper>
                    <div className="py-32 mx-auto flex items-center justify-center">
                        <h1 className="text-8xl font-lora text-center">Publications</h1>
                    </div>
                </MaxWidthWrapper>
            </section>
            <section className="h-[67rem] bg-blackbg bg-cover bg-center bg-no-repeat bg-neutral-600">
                <MaxWidthWrapper>
                    <div className="flex flex-col items-center gap-4">
                        <div className='flex items-center justify-center pt-14'>
                            <Image
                                src={`WhiteVector.svg`}
                                alt='vector'
                                width={71}
                                height={0}
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <Image
                                src={InvestorAcumenLogo}
                                alt="investor acumen logo"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-9 mt-10">
                        <div className="w-[32rem] sm:w-[42rem] lg:w-[50rem] h-[48rem] rounded-md bg-white">
                            <div className="pt-px ml-2">
                                <div className="my-5 mx-5 bg-stone-500 rounded-full h-6 flex items-center justify-center w-36">
                                    <h2 className="text-center text-white font-roboto text-xs max-w-md">Recent Publications:</h2>
                                </div>
                            </div>
                            <div className="flex flex-col gap-10 items-center">
                                {iaPosts.map((post) => (
                                    <Publication key={post.link} date={post.date_pub} link={post.link} title={post.title} />
                                ))}
                            </div>
                        </div>
                        <div>
                            <Link href="https://www.investorLinkcumen.com/" target="_blank">
                                <Button variant={'investoracumen'}>
                                    Investor Acumen
                                    &rarr;
                                </Button>
                            </Link>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section >
            <section className="h-[67rem] bg-whitebg bg-cover bg-center bg-no-repeat">
                <MaxWidthWrapper>
                    <div className="flex flex-col items-center gap-4">
                        <div className='flex items-center justify-center pt-14'>
                            <Image
                                src={`blackVector.svg`}
                                alt='vector'
                                width={71}
                                height={0}
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <Image
                                src={SeekingAlphaLogo}
                                alt="seeking alpha logo"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-9 mt-10">
                        <div className="w-[32rem] sm:w-[42rem] lg:w-[50rem] h-[48rem] rounded-md bg-stone-500">
                            <div className="pt-px ml-2">
                                <div className="my-5 mx-5 bg-white rounded-full h-6 flex items-center justify-center w-36">
                                    <h2 className="text-center font-roboto text-xs max-w-md">Recent Publications:</h2>
                                </div>
                            </div>
                            <div className="flex flex-col gap-10 items-center">
                                {saPosts.map((post) => (
                                    <Publication key={post.link} date={post.date_pub} link={post.link} title={post.title} />
                                ))}
                            </div>
                        </div>
                        <div>
                            <Link href="https://seekingalpha.com/author/james-a-kostohryz" target="_blank">
                                <Button variant={'seekingalpha'}>
                                    Seeking Alpha
                                    &rarr;
                                </Button>
                            </Link>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
            <section className="h-[67rem] bg-blackbg bg-cover bg-center bg-no-repeat bg-neutral-600">
                <MaxWidthWrapper>
                    <div className="flex flex-col items-center gap-4">
                        <div className='flex items-center justify-center pt-14'>
                            <Image
                                src={`WhiteVector.svg`}
                                alt='vector'
                                width={71}
                                height={0}
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <Image
                                src={InvestingLogo}
                                alt="investing logo"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-9 mt-10">
                        <div className="w-[32rem] sm:w-[42rem] lg:w-[50rem] h-[48rem] rounded-md bg-white">
                            <div className="pt-px ml-2">
                                <div className="my-5 mx-5 bg-stone-500 rounded-full h-6 flex items-center justify-center w-36">
                                    <h2 className="text-center text-white font-roboto text-xs max-w-md">Recent Publications:</h2>
                                </div>
                            </div>
                            <div className="flex flex-col gap-10 items-center">
                                {inPosts.map((post) => (
                                    <Publication key={post.link} date={post.date_pub} link={post.link} title={post.title} />
                                ))}
                            </div>
                        </div>
                        <div>
                            <Link href="https://www.investing.com" target="_blank">
                                <Button variant={'investing'}>
                                    Investing
                                    &rarr;
                                </Button>
                            </Link>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
            <section className="h-[66rem] bg-whitebg bg-cover bg-center bg-no-repeat">
                <MaxWidthWrapper>
                    <div className="flex flex-col items-center gap-4">
                        <div className='flex items-center justify-center pt-14'>
                            <Image
                                src={`blackVector.svg`}
                                alt='vector'
                                width={71}
                                height={0}
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <Image
                                src={TheStreetLogo}
                                alt="the street logo"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-9 mt-10">
                        <div className="w-[32rem] sm:w-[42rem] lg:w-[50rem] h-[48rem] rounded-md bg-stone-500">
                            <div className="pt-px ml-2">
                                <div className="my-5 mx-5 bg-white rounded-full h-6 flex items-center justify-center w-36">
                                    <h2 className="text-center font-roboto text-xs max-w-md">Recent Publications:</h2>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8 items-center">
                                {tsPosts.map((post) => (
                                    <Publication key={post.link} date={post.date_pub} link={post.link} title={post.title} Darkmode={false} />
                                ))}
                            </div>
                        </div>
                        <div>
                            <Link href="https://www.thestreet.com/author/james-kostohryz" target="_blank">
                                <Button variant={'thestreet'}>
                                    TheStreet
                                    &rarr;
                                </Button>
                            </Link>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    )
}