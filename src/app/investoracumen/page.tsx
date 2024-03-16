import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionTitle from "@/components/SectionTitle";

import Image from "next/image";
import InvestorAcumenLogo from '../../../public/InvestoracumenBig.svg'
import InvestorAcumenCard from "@/components/InvestorAcumenCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InvestorAcumenPage() {
    return (
        <>
            <section className="h-[25rem] bg-whitebg bg-cover bg-no-repeat bg-center">
                <MaxWidthWrapper>
                    <div className=" py-32 mx-auto flex items-center justify-center">
                        <Link href={'https://www.investoracumen.com/'} target="_blank">
                            <Image
                                src={InvestorAcumenLogo}
                                alt="Investor Acumen Big Logo"
                            />
                        </Link>
                    </div>
                </MaxWidthWrapper>
            </section>
            <section className="h-[104rem] lg:h-[78rem] bg-blackbg bg-cover bg-center bg-no-repeat bg-neutral-600">
                <MaxWidthWrapper>
                    <SectionTitle TextColor="white" VectorColor="White" title="My Company" />
                    <div className="flex flex-col gap-20 mt-20 items-center">
                        <InvestorAcumenCard />
                        <InvestorAcumenCard />
                    </div>
                    <div className="flex items-center justify-center lg:justify-end lg:pr-20 pt-2 lg:pt-10">
                        <Link href={'https://www.investoracumen.com/'} target="_blank">
                            <Button variant={'investoracumen'}>
                                Investor Acumen
                                &rarr;
                            </Button>
                        </Link>
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    )
}