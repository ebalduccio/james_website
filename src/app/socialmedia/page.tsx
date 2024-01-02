import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PublicationInvestorAcumen from "@/components/PublicationInvestorAcumen";
import PublicationSocialMedia from "@/components/PublicationSocialMedia";
import SectionTitle from "@/components/SectionTitle";

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
            <section className="h-[68rem] bg-blackbg bg-cover bg-center bg-no-repeat bg-neutral-600">
                <MaxWidthWrapper>
                    <SectionTitle TextColor="white" VectorColor="White" title="Social Media" subtitle="Recents Publications" />
                    <div className="flex flex-col items-center pt-10">
                        <div className="w-[32rem] sm:w-[42rem] lg:w-[50rem] h-[48rem] rounded-md bg-white">
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
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    )
}